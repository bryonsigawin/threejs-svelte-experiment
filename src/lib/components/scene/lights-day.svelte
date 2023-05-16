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

<T.AmbientLight color={'#ffc977'} intensity={0.05} />

<!-- 
  Main sun light source intended for casting the shadow of the window
 -->
<T.DirectionalLight color={'#ffc977'} intensity={1} position={[4, 10, 5]}>
  <T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<!-- 
  Light source for the room's interior
 -->
<T.DirectionalLight
  color={'#ffedd3'}
  intensity={1}
  position={[1, 2, 1.5]}
  castShadow
  shadow.camera.near={0}
  shadow.camera.far={8}
  shadow.camera.top={10}
  shadow.camera.right={10}
  shadow.camera.bottom={-10}
  shadow.camera.left={-10}
  shadow.radius={2}
>
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
