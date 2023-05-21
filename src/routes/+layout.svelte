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
    <header>
      <!-- <div>it's currently {$currentTime.hours}:{$currentTime.minutes}:{$currentTime.seconds}</div> -->
    </header>

    <div class="content-spacer" />

    {#if $entryComplete}
      {#key data.pathname}
        <main>
          <slot />
        </main>
      {/key}
    {/if}

    <footer>
      <p>scrapily built by me as an excuse to play with svelte + three.js + blender.</p>
    </footer>
  </div>

  {#if !$isProbablyMobile}
    <Cursor />
  {/if}

  <!-- Turn on as needed -->
  <!-- <Gui /> -->
{/if}

<style>
  .layout {
    position: relative;
    z-index: 2;

    display: grid;

    grid-template-rows: auto 1fr auto;
    grid-template-columns: 47.5vw 1fr;
    grid-template-areas:
      'header header'
      'spacer main'
      'footer footer';
    align-items: center;

    min-height: 100vh;
    padding: 0 1rem;

    overflow: hidden;
  }

  header {
    grid-area: header;
    padding: 0.75rem 0;

    display: flex;
    justify-content: flex-end;

    font-size: 0.75rem;
    font-weight: 200;
  }

  main {
    grid-area: main;
    transform: translate(calc(var(--shift-x)), calc(var(--shift-y)));
  }

  footer {
    grid-area: footer;
    margin-top: auto;
    margin-bottom: 0;

    font-size: 0.7rem;
    font-weight: 200;
    text-align: right;

    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    .layout {
      display: block;
    }

    main {
      padding: 0 1rem;
      margin-top: 90vw;
    }

    .footer {
      text-align: center;
    }
  }
</style>
