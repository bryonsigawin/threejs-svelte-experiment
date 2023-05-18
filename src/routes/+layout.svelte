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

  import { isProbablyMobile } from '$lib/components/animator/animation-store';

  let pageIsReady = false;

  onMount(() => {
    if (window.innerWidth < 768) isProbablyMobile.set(true);
    pageIsReady = true;
  });
</script>

{#if pageIsReady}
  <slot />

  {#if !$isProbablyMobile}
    <Cursor />
  {/if}

  <!-- Turn on as needed -->
  <!-- <Gui /> -->
{/if}
