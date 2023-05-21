<script>
  import { mousePosition } from '$lib/stores/animation';

  import { spring } from 'svelte/motion';
  import { onDestroy } from 'svelte';

  let started = false;
  let stiffness = 0.1;
  let damping = 0.9;

  let cursor = spring({ x: $mousePosition.x, y: $mousePosition.y }, { stiffness: 1, damping: 1 });
  let scale = spring(0);

  const stopTracking = mousePosition.subscribe(({ x, y }) => {
    cursor.set({ x, y });

    if (!started && x !== -1) {
      started = true;

      cursor.damping = damping;
      cursor.stiffness = stiffness;

      scale.set(1);
    }
  });

  onDestroy(() => {
    stopTracking();
  });
</script>

<div class="cursor" style="--position-x: {$cursor.x}px; --position-y: {$cursor.y}px; --scale: {$scale}" />

<style>
  .cursor {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: white;
    pointer-events: none;

    transform: translate(calc(var(--position-x) - 50%), calc(var(--position-y) - 50%)) scale(var(--scale));
  }
</style>
