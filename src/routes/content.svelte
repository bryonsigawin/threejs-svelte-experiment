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

	import anime from 'animejs';
	import { onMount } from 'svelte';

	import windowImage from '$lib/images/window-temp.png';
	import { mapRange, lerp } from '$lib/utils/maths';

	let entryComplete = false;

	let mouseCurrent = { x: -1, y: -1 };
	let mouseTo = { x: 0, y: 0 };
	let cursorScale = { value: 0 };

	let parallaxCurrent = { x: 0, y: 0 };
	let parallaxTo = { x: 0, y: 0 };
	let parallaxShift = { x: 0, y: 0 };

	onMount(() => {
		window.addEventListener('mousemove', (e) => {
			/** set the initial position of the cursor */
			if (mouseCurrent.x === -1 && mouseCurrent.y === -1) {
				mouseCurrent.x = e.clientX;
				mouseCurrent.y = e.clientY;
			}

			mouseTo.x = e.clientX;
			mouseTo.y = e.clientY;
			mouseTo = mouseTo;

			parallaxTo.x = e.clientX;
			parallaxTo.y = e.clientY;
			parallaxTo = parallaxTo;
		});

		let raf = requestAnimationFrame(function animate() {
			if (mouseCurrent.x !== -1 && mouseCurrent.y !== -1) {
				mouseCurrent.x = lerp(mouseCurrent.x, mouseTo.x, 0.1).toFixed(3);
				mouseCurrent.y = lerp(mouseCurrent.y, mouseTo.y, 0.1).toFixed(3);

				// parallaxCurrent.x = lerp(parallaxCurrent.x, parallaxTo.x, 0.005).toFixed(3);
				// parallaxCurrent.y = lerp(parallaxCurrent.y, parallaxTo.y, 0.005).toFixed(3);

				// parallaxShift.x = mapRange(0, window.innerWidth, parallaxCurrent.x, 40, -40);
				// parallaxShift.y = mapRange(0, window.innerHeight, parallaxCurrent.y, 10, -10);
			}

			requestAnimationFrame(animate);
		});

		const timeline = anime.timeline();

		timeline
			.add({
				targets: cursorScale,
				value: [0, 1],
				duration: 1200,
				easing: 'easeOutQuart',
				begin: () => {
					entryComplete = true;
				},
				update: () => {
					cursorScale = cursorScale;
				}
			})
			.add(
				{
					targets: '.intro-line-1 span',
					translateY: ['100%', 0],
					duration: 1100,
					delay: anime.stagger(20),
					easing: 'easeInOutQuint'
				},
				0
			)
			.add(
				{
					targets: '.intro-line-2 span',
					translateY: ['100%', 0],
					duration: 700,
					delay: anime.stagger(5),
					easing: 'easeInOutQuint'
				},
				200
			)
			.add(
				{
					targets: '.page-links',
					opacity: [0, 1],
					duration: 1000,
					delay: anime.stagger(80),
					easing: 'linear'
				},
				200
			);

		timeline.pause();
		timeline.seek(0);

		setTimeout(() => timeline.play(), 6000);
	});
</script>

<div
	class="frame"
	class:freeze={!entryComplete}
	style="--shift-x: {parallaxShift.x}px; --shift-y: {parallaxShift.y}px"
>
	<div class="layout">
		<div />

		<main>
			<div>
				<h1 class="intro-line-1">
					{#each "Hey there, I'm Bryon Sigawin" as character}
						<span>
							{#if character === ' '}
								&nbsp;
							{:else}
								{character}
							{/if}</span
						>
					{/each}
				</h1>
				<h2 class="intro-line-2">
					{#each 'front-end developer with a penchant for ux and motion design.' as character}
						<span>
							{#if character === ' '}
								&nbsp;
							{:else}
								{character}
							{/if}</span
						>
					{/each}
				</h2>
			</div>
			<div class="page-links">
				<a class="page-link" href="/">about</a>
				<a class="page-link" href="/">resume</a>
				<a class="page-link" href="/">linkedin</a>
				<a class="page-link" href="/">github</a>
			</div>
		</main>
	</div>
</div>

<div
	class="cursor"
	style="--position-x: {mouseCurrent.x}px; --position-y: {mouseCurrent.y}px; --scale: {cursorScale.value}"
/>

<style>
	.cursor {
		position: fixed;
		top: 0;
		left: 0;

		width: 15px;
		height: 15px;

		border-radius: 50%;
		background-color: white;

		pointer-events: none;

		transform: translate(calc(var(--position-x) - 50%), calc(var(--position-y) - 50%)) scale(var(--scale));
	}

	.freeze {
		width: 100vw;
		height: 100vh;

		overflow: hidden;
	}

	.freeze .layout {
		overflow: unset !important;
		opacity: 0;
	}

	.layout {
		display: grid;
		grid-template-columns: 50vw 1fr;
		align-items: center;
		gap: 5rem;

		min-height: 100vh;
		overflow: hidden;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		gap: 10rem;

		margin-top: auto;
		margin-bottom: 10vh;

		transform: translate(calc(var(--shift-x)), calc(var(--shift-y)));
	}

	.intro-line-1 {
		font-size: 4rem;
		font-weight: 300;
		letter-spacing: -3px;
		font-style: italic;

		margin: 0;
		overflow: hidden;
	}

	.intro-line-2 {
		font-size: 1.25rem;
		font-weight: 200;

		margin: 0;
		overflow: hidden;
	}

	.intro-line-1 span,
	.intro-line-2 span {
		display: inline-block;
	}

	.page-links {
		display: flex;
		gap: 2rem;
	}

	.intro-line-1 span,
	.intro-line-2 span {
		display: inline-block;
	}

	.page-link {
		font-size: 0.95rem;
		font-weight: 200;

		color: rgb(219, 219, 219);
		text-decoration: none;
	}
</style>
