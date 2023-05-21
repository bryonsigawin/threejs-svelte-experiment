<script>
  import { onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { quartInOut } from 'svelte/easing';

  import { T, useFrame, useThrelte } from '@threlte/core';
  import { Vector2 } from 'three';
  import { lerp } from 'three/src/math/MathUtils';

  import { isProbablyMobile, entryComplete, mousePosition } from './../../stores/animation';
  import { isNight, enableNightLights } from './../../stores/time';

  import Elements from './elements.svelte';
  import LightsDay from './lights-day.svelte';
  import LightsNight from './lights-night.svelte';

  const isMobile = $isProbablyMobile;

  const cameraFov = isMobile ? 70 : 30;
  const panAmount = 4;

  const defaultCameraPosition = { x: isMobile ? -1.6 : 0, y: 2.2, z: 8.5 };
  let cameraPosition = { ...defaultCameraPosition };

  let cameraShift = {
    amount: { x: 0.2, y: 0.2 },
    current: { x: panAmount, y: 0 },
    next: { x: 0, y: 0 }
  };

  let cameraPan = tweened(panAmount, {
    duration: 6000,
    delay: 500,
    easing: quartInOut
  });

  cameraPan.set(0);

  const { stop: stopShifting } = useFrame(() => {
    let { current, next, amount } = cameraShift;
    current.x = lerp(current.x, next.x, 0.01);
    current.y = lerp(current.y, next.y, 0.01);

    next.x = $mousePosition.normalized.x * amount.x;
    next.y = $mousePosition.normalized.y * amount.y;

    cameraPosition.x = defaultCameraPosition.x + $cameraPan + current.x;
    cameraPosition.y = defaultCameraPosition.y + current.y;

    cameraShift = cameraShift;
    cameraPosition = cameraPosition;
  });

  $: if ($cameraPan === 0) {
    entryComplete.set(true);
  }

  $: if (isMobile) {
    const { renderer, camera } = useThrelte();

    let rendererSize = new Vector2();
    renderer.getSize(rendererSize);

    camera.subscribe((cam) => {
      cam.setViewOffset(rendererSize.x, rendererSize.y, 0, 210, rendererSize.x, rendererSize.y);
      cam.updateProjectionMatrix();
    });
  }

  onDestroy(() => {
    stopShifting();
  });
</script>

<T.PerspectiveCamera fov={cameraFov} position={[...Object.values(cameraPosition)]} makeDefault />

{#if !$isNight}
  <LightsDay />
{/if}

{#if $enableNightLights}
  <LightsNight />
{/if}

<Elements />
