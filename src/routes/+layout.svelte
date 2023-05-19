<script>
  // load fonts
  import '@fontsource/spectral/400.css';
  import '@fontsource/spectral/400-italic.css';
  import '@fontsource/spectral/300.css';
  import '@fontsource/spectral/300-italic.css';
  import '@fontsource/spectral/200.css';
  import '@fontsource/spectral/200-italic.css';

  // load default styles
  import 'modern-normalize';
  import '../styles.css';

  import { onMount } from 'svelte';

  import Gui from '$lib/components/gui.svelte';
  import Cursor from '$lib/components/cursor.svelte';
  import World from '$lib/components/scene/world.svelte';
  import Animator from '$lib/components/animator/animator.svelte';

  import { isProbablyMobile, entryComplete, contentShift } from '$lib/components/animator/animation-store';

  let pageIsReady = false;
  export let data;

  $: console.log(data);

  onMount(() => {
    if (window.innerWidth < 768) isProbablyMobile.set(true);
    pageIsReady = true;
  });
</script>

{#if pageIsReady}
  <World />
  <Animator />

  <div
    class="layout"
    class:freeze={!$entryComplete}
    style="--shift-x: {$contentShift.x}px; --shift-y: {$contentShift.y}px"
  >
    <div class="content-spacer" />

    <main>
      {#key data.pathname}
        <slot />
      {/key}
    </main>
  </div>

  {#if !$isProbablyMobile}
    <Cursor />
  {/if}

  <!-- Turn on as needed -->
  <!-- <Gui /> -->
{/if}

<style>
  .freeze {
    width: 100vw;
    height: 100vh;

    overflow: hidden;
  }

  .layout.freeze {
    overflow: unset !important;
    opacity: 0;
  }

  .layout {
    position: relative;
    z-index: 2;

    display: grid;
    grid-template-columns: 47.5vw 1fr;
    align-items: center;

    min-height: 100vh;
    padding: 0 1rem;

    overflow: hidden;
  }

  main {
    transform: translate(calc(var(--shift-x)), calc(var(--shift-y)));
  }
</style>
