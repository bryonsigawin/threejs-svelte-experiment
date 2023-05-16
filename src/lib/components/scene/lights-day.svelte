<script>
  import { T, useFrame } from '@threlte/core';
  import { VideoTexture } from 'three';
  import { isProbablyMobile } from '../animator/animation-store';

  let texture;

  $: if (!$isProbablyMobile) {
    const video = document.getElementById('video');
    video.play();

    texture = new VideoTexture(video);
    texture.needsUpdate = true;

    useFrame(() => {
      texture.needsUpdate = true;
    });
  }
</script>

<!-- 
  Main sun light source intended for casting the shadow of the window
 -->
<T.DirectionalLight
  color={'#ffffff'}
  intensity={1}
  position={[1.5, 2.5, 2]}
  castShadow
  shadow.camera.near={0}
  shadow.camera.far={20}
  shadow.camera.top={10}
  shadow.camera.right={10}
  shadow.camera.bottom={-10}
  shadow.camera.left={-10}
  shadow.radius={2.5}
  shadow.blurSamples={24}
  shadow.bias={-0.0002}
>
  <T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<!-- 
  Light source for the room's interior
  #f7fdff
  #ffe8da
 -->
<T.DirectionalLight color={'#ffe8da'} intensity={0.7} position={[4, 10, 5]}>
  <T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<!-- 
  Light source for casting caustics onto the wall
 -->
{#if !$isProbablyMobile}
  <T.SpotLight
    position={[0.5, 4, 8]}
    target.position={[0.5, 4, 0]}
    intensity={0.3}
    color={'#ffffff'}
    angle={Math.PI / 4}
    penumbra={1}
    distance={15}
    map={texture}
    castShadow
    shadow.focus={0.6}
    shadow.radius={1.5}
    shadow.blurSamples={26}
    shadow.bias={-0.0002}
    shadow.camera.near={2}
    shadow.camera.top={8}
    shadow.camera.right={8}
    shadow.camera.bottom={-8}
    shadow.camera.left={-8}
  >
    <T.Vector2 attach="shadow.mapSize" args={[1024 * (16 / 9), 1024]} />
  </T.SpotLight>
{/if}
