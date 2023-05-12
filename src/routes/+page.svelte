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

  import Content from '$lib/components/content.svelte';
  import World from '$lib/components/scene/world.svelte';
  import Animator from '$lib/components/animator/animator.svelte';
</script>

<World />
<Animator />
<Content />
