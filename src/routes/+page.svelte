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

  import { isNight, isProbablyMobile } from '$lib/components/animator/animation-store';

  let pageIsReady = false;

  onMount(() => {
    if (window.innerWidth < 768) isProbablyMobile.set(true);
    pageIsReady = true;
  });
</script>

<button
  on:click={() => {
    isNight.update((v) => !v);
  }}>Switch</button
>
{#if pageIsReady}
  <World />
  <Animator />

  <Content />
{/if}

<style>
  button {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
</style>
