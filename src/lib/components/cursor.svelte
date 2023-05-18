<script>
  import { cursorScale, cursorPosition } from './animator/animation-store';

  let isOverLink = false;
</script>

<div
  class="cursor"
  class:is-over-link={isOverLink}
  style="--position-x: {$cursorPosition.current.x}px; --position-y: {$cursorPosition.current
    .y}px; --scale: {$cursorScale.value}"
/>

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

  .is-over-link {
    background-color: red;
  }
</style>
