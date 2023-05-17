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

  import Content from '$lib/components/content.svelte';
  import World from '$lib/components/scene/world.svelte';
  import Animator from '$lib/components/animator/animator.svelte';
  import Gui from '$lib/components/gui.svelte';

  import { isNight, isProbablyMobile } from '$lib/components/animator/animation-store';
  let pageIsReady = false;

  onMount(() => {
    if (window.innerWidth < 768) isProbablyMobile.set(true);
    pageIsReady = true;
  });
</script>

{#if pageIsReady}
  <div class:is-day={!$isNight} class:is-night={$isNight}>
    <World />
    <Animator />
    <Content />
  </div>

  <Gui />
{/if}

<style>
  .is-day {
    background-color: #254083;
  }

  .is-night {
    background-color: #000215;
  }
</style>
