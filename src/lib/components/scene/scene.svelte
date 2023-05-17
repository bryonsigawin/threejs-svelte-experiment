<script>
  import { T, useThrelte } from '@threlte/core';
  import { Vector2 } from 'three';

  import {
    isProbablyMobile,
    cameraPan,
    entryComplete,
    isNight,
    worldShift,
    enableNightLights
  } from './../animator/animation-store';

  import Elements from './elements.svelte';
  import LightsDay from './lights-day.svelte';
  import LightsNight from './lights-night.svelte';

  const isMobile = $isProbablyMobile;

  const initialCameraPosition = {
    x: isMobile ? -1.6 : 0,
    y: 2.2,
    z: 8.5
  };
  let cameraPosition = { ...initialCameraPosition };

  const panAmount = 4;
  let cameraFov = isMobile ? 70 : 30;

  /**
   * Pan camera
   */
  const unsubcribePanning = cameraPan.subscribe(({ value }) => {
    cameraPosition.x = initialCameraPosition.x + panAmount * value;
    cameraPosition = cameraPosition;
  });

  /**
   * Unsubscribe after it's done
   */
  $: if ($cameraPan.value === 0) {
    unsubcribePanning();
  }

  /**
   * Enable parallax
   */
  $: if (!isMobile && $entryComplete) {
    worldShift.subscribe(({ x, y }) => {
      cameraPosition.x = initialCameraPosition.x + x;
      cameraPosition.y = initialCameraPosition.y + y;
    });
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
</script>

<T.PerspectiveCamera fov={cameraFov} position={[...Object.values(cameraPosition)]} makeDefault />

{#if !$isNight}
  <LightsDay />
{/if}

{#if enableNightLights}
  <LightsNight />
{/if}

<Elements />
