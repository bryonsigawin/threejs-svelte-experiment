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
  import { fade } from 'svelte/transition';

  import { DefaultLoadingManager } from 'three';
  import { lerp } from 'three/src/math/MathUtils';

  import Gui from '$lib/components/gui.svelte';
  import Cursor from '$lib/components/cursor.svelte';
  import World from '$lib/components/scene/world.svelte';
  import Loading from '$lib/components/loading.svelte';

  import { isProbablyMobile, mousePosition, entryComplete } from '$lib/stores/animation';
  import { currentTime } from '$lib/stores/time';

  let pageIsReady = false;
  let worldIsReady = false;

  export let data;

  let layoutShift = {
    amount: { x: -20, y: 10 },
    current: { x: 0, y: 0 },
    next: { x: 0, y: 0 }
  };

  let raf;

  DefaultLoadingManager.onLoad = () => {
    worldIsReady = true;
  };

  onMount(() => {
    if (window.innerWidth < 768) {
      isProbablyMobile.set(true);
    } else {
      mousePosition.track();
    }

    if (!$isProbablyMobile) {
      raf = requestAnimationFrame(function tick() {
        let { current, next, amount } = layoutShift;

        current.x = lerp(current.x, next.x, 0.01);
        current.y = lerp(current.y, next.y, 0.01);

        next.x = $mousePosition.normalized.x * amount.x;
        next.y = $mousePosition.normalized.y * amount.y;

        layoutShift = layoutShift;

        requestAnimationFrame(tick);
      });
    }

    return () => {
      if ($mousePosition.tracking) mousePosition.stopTracking();
      if (raf) cancelAnimationFrame(raf);
    };
  });

  console.log(data.pathname);
</script>

<World isReady={worldIsReady} />

{#if worldIsReady}
  <div class="layout" style="--shift-x: {layoutShift.current.x}px; --shift-y: {layoutShift.current.y}px">
    <header />

    <div class="content-spacer" />

    {#if $entryComplete}
      {#key data.pathname}
        <main>
          <slot />
        </main>
      {/key}
    {/if}

    <footer>
      <p>
        my local time is {new Intl.DateTimeFormat('en-GB', {
          dateStyle: 'full',
          timeStyle: 'medium',
          hour12: true,
          timeZone: 'Asia/Kuala_Lumpur'
        }).format($currentTime.full)}
      </p>

      <p>
        built by me as an excuse to play with svelte + three.js + blender, gradually iterating since 2023.
      </p>
    </footer>
  </div>

  {#if !$isProbablyMobile}
    <Cursor />
  {/if}

  {#if data.pathname === '/about' && $isProbablyMobile && $entryComplete}
    <div class="overlay" transition:fade />
  {/if}
{:else}
  <Loading />
{/if}

<!-- Turn on as needed -->
<!-- <Gui /> -->

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

    display: flex;
    justify-content: space-between;

    font-size: 0.7rem;
    font-weight: 200;
    text-align: right;

    opacity: 0.5;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background: black;

    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    .layout {
      grid-template-areas: 'header' 'main' 'footer';
      grid-template-rows: auto 1fr auto;
      grid-template-columns: unset;

      align-items: end;
    }

    main {
      padding: 0 1rem;
      margin-bottom: 10rem;
    }

    footer {
      display: block;
      text-align: center;
    }
  }
</style>
