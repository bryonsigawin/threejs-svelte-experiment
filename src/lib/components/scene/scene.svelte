<script>
  import { T } from '@threlte/core';

  import { cameraPan, entryComplete, isNight, worldShift } from './../animator/animation-store';

  import Elements from './elements.svelte';
  import LightsDay from './lights-day.svelte';
  import LightsNight from './lights-night.svelte';

  let rotation = 0;
  let sceneFocus;

  let initialCameraPosition = { x: 0, y: 2.2, z: 8.5 };
  let cameraPosition = { ...initialCameraPosition };

  $: if ($entryComplete) {
    worldShift.subscribe(({ x, y }) => {
      cameraPosition.x = initialCameraPosition.x + x;
      cameraPosition.y = initialCameraPosition.y + y;
    });
  }

  const unsubcribePanning = cameraPan.subscribe(({ value }) => {
    cameraPosition.x = value;
    cameraPosition = cameraPosition;
  });

  $: if (cameraPosition.x === 0) {
    unsubcribePanning();
  }
</script>

<T.Group rotation.y={rotation}>
  <T.PerspectiveCamera fov={30} position={[...Object.values(cameraPosition)]} makeDefault />
</T.Group>

{#if $isNight}
  <LightsNight />
{:else}
  <LightsDay />
{/if}

<T.Group bind:ref={sceneFocus}>
  <Elements />
</T.Group>
