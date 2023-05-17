<script>
  import { onDestroy } from 'svelte';

  import { T, useFrame } from '@threlte/core';
  import { Color, VideoTexture } from 'three';
  import { mapLinear, clamp } from 'three/src/math/MathUtils';

  import { isProbablyMobile, time } from '../animator/animation-store';

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

  let sunOffset = 0;

  let lightIntensity = 1;
  let colorShift = 0;

  let lightColorEvening = new Color('#ffcbac');
  let lightColorDay = new Color('#f7fdff');
  let lightColor = new Color().lerpColors(lightColorEvening, lightColorDay, 1);

  const unsubTime = time.subscribe(({ hours }) => {
    const intensityTime = clamp(hours, 5, 20);
    const colorTime = clamp(hours, 16, 17);

    if (intensityTime < 8) {
      lightIntensity = mapLinear(intensityTime, 5, 8, 0.025, 1);
    } else {
      lightIntensity = mapLinear(intensityTime, 8, 20, 1, 0.15);
    }

    colorShift = clamp(mapLinear(colorTime, 16, 17, 1, 0), 0, 1);
    lightColor = new Color().lerpColors(lightColorEvening, lightColorDay, colorShift);

    sunOffset = mapLinear(hours, 0, 24, 3, -3);
  });

  onDestroy(() => {
    unsubTime();
  });
</script>

<!-- 
  Main sun light source intended for casting the shadow of the window
 -->
<T.DirectionalLight
  color={lightColor}
  intensity={1 * lightIntensity}
  position={[sunOffset, 2.5, 2]}
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
  #f7fdff [247, 253, 255]
  #ffe8da [255, 232, 218]
 -->
<T.DirectionalLight color={lightColor} intensity={0.7 * lightIntensity} position={[4, 10, 5]}>
  <T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<!-- 
  Light source for casting caustics onto the wall
 -->
{#if !$isProbablyMobile}
  <T.SpotLight
    position={[0.5, 4, 8]}
    target.position={[0.5, 4, 0]}
    intensity={0.3 * lightIntensity}
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
