<script>
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
