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
	import anime from 'animejs';

	import { smoothScroll } from '$lib/stores/scroll';

	import Window from '$lib/components/window.svelte';

	let animatedValue = { value: 0 };
	let windowProgress = 0;
	let entryDone = false;

	onMount(() => {
		const animeTimeline = anime.timeline();

		animeTimeline
			.add({
				targets: '.content',
				easing: 'easeOutQuint',
				duration: 2500,
				translateY: ['30vh', 0]
			})
			.add({
				targets: animatedValue,
				value: 1,
				easing: 'easeInOutQuart',
				duration: 1200,
				update: () => {
					windowProgress = animatedValue.value;
				},
				complete: () => {
					entryDone = true;
				}
			});
	});
</script>

<div class={entryDone ? '' : 'freeze-page'}>
	<main class="content" style="--progress: {windowProgress}">
		<Window --progress={windowProgress} />
		<div>a</div>
		<div>a</div>
	</main>
</div>

<style>
	:global(.freeze-page) {
		width: 100vw;
		height: 100vh;

		overflow: hidden;
	}

	:global(.freeze-page main) {
		width: 100vw;
		height: 100vh;

		overflow: unset !important;
	}

	main {
		position: relative;
		min-height: 100vh;

		overflow: hidden;
	}

	main::before {
		content: '';

		position: absolute;
		top: 50%;
		left: 50%;

		width: 200%;
		height: 200%;

		background-image: url('$lib/images/wall-texture.jpg');
		background-size: 25%;
		opacity: 0.1;
		mix-blend-mode: overlay;
		transform: translate(calc(-50% - 30vw * var(--progress)), calc(-50% + 5% * var(--progress)))
			scale(calc(0.8 + 0.2 * var(--progress)));
	}

	.content {
		display: grid;
		grid-template-columns: 0.7fr 1fr;
	}
</style>
