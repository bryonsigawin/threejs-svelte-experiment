<script>
	import windowImage from '$lib/images/window-temp.png';
</script>

<div class="window">
	<img src={windowImage} alt="it's a window" />
</div>

<style>
	.window {
		display: inline-block;
		position: fixed;
		z-index: 1;

		top: 50%;
		left: 50%;

		transform-origin: center center;
		transform: translate(calc(-50% - 30vw * var(--progress)), -50%)
			scale(calc(0.8 + 0.2 * var(--progress)));
		/* transform: translate(calc(-50% - 30vw * var(--progress)), -50%); */

		width: 60vw;
		height: 100%;
		max-height: 90vh;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
