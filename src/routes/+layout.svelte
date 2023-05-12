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
	import { useProgress } from '@threlte/extras';
	import { Theatre, Studio, Project, Sheet } from '@threlte/theatre';

	import * as THREE from 'three';
	import Content from './content.svelte';
</script>

<video
	id="video"
	src="textures/caustics_edited.mkv"
	muted="true"
	playsinline="true"
	loop
	controls
	style="display: none;"
/>

<div>
	<!-- <Studio enabled={true} /> -->

	<Canvas shadowMapType={THREE.VSMShadowMap}>
		<!-- <Project name="Through the window"> -->
		<!-- <Sheet name="animated"> -->
		<slot />
		<!-- </Sheet> -->
		<!-- </Project> -->
	</Canvas>
</div>

<Content />

<style>
	div {
		position: fixed;

		top: 0;
		left: 0;

		width: 100vw;
		height: 100vh;

		background: hsl(0 0% 10%);
	}
</style>
