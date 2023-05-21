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
  import { isProbablyMobile, mousePosition, entryComplete } from '$lib/stores/animation';

  let pageIsReady = false;

  export let data;

  onMount(() => {
    if (window.innerWidth < 768) {
      isProbablyMobile.set(true);
    } else {
      mousePosition.track();
    }

    pageIsReady = true;

    return () => {
      if ($mousePosition.tracking) mousePosition.stopTracking();
    };
  });
</script>

{#if pageIsReady}
  <World />
  <div class="layout">
    <div class="content-spacer" />

    {#if $entryComplete}
      {#key data.pathname}
        <main>
          <slot />
        </main>
      {/key}
    {/if}
  </div>

  {#if !$isProbablyMobile}
    <Cursor />
  {/if}

  <!-- Turn on as needed -->
  <Gui />
{/if}

<style>
  .layout {
    position: relative;
    z-index: 2;

    display: grid;
    grid-template-columns: 47.5vw 1fr;
    grid-template-areas: 'spacer main';
    align-items: center;

    min-height: 100vh;
    padding: 0 1rem;

    overflow: hidden;
  }

  main {
    grid-area: main;
    transform: translate(calc(var(--shift-x)), calc(var(--shift-y)));
  }

  @media screen and (max-width: 768px) {
    .layout {
      display: block;
    }

    main {
      padding: 0 1rem;
      margin-top: 90vw;
    }
  }
</style>
