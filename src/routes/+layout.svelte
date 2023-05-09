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

	import { Canvas } from '@threlte/core';
</script>

<div>
	<Canvas>
		<slot />
	</Canvas>
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;

		background: hsl(0 0% 10%);
	}
</style>
