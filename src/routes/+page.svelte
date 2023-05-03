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
	let cursorScale = 0;

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
		});

		let raf = requestAnimationFrame(function animate() {
			if (mouseCurrent.x !== -1 && mouseCurrent.y !== -1) {
				/** bring into view the cursor */
				if (cursorScale < 1 && entryComplete) {
					cursorScale = lerp(cursorScale, 1, 0.05).toFixed(2);
				}

				mouseCurrent.x = lerp(mouseCurrent.x, mouseTo.x, 0.2).toFixed(2);
				mouseCurrent.y = lerp(mouseCurrent.y, mouseTo.y, 0.2).toFixed(2);

				parallaxShift.x = mapRange(0, window.innerWidth, mouseCurrent.x, 40, -40);
				parallaxShift.y = mapRange(0, window.innerHeight, mouseCurrent.y, 10, -10);
			}

			requestAnimationFrame(animate);
		});

		const timeline = anime.timeline();

		timeline
			.add({
				targets: '.parallax-scene',
				translateX: ['-50vw', 0],
				duration: 3500,
				easing: 'easeInOutQuint',
				complete: () => {
					entryComplete = true;
				}
			})
			.add(
				{
					targets: '.job-title span',
					translateY: ['100%', 0],
					duration: 1200,
					delay: anime.stagger(120),
					easing: 'easeInOutQuint'
				},
				3000
			)
			.add(
				{
					targets: '.my-name span',
					translateY: ['100%', 0],
					duration: 1200,
					delay: anime.stagger(80),
					easing: 'easeInOutQuint'
				},
				3200
			)
			.add(
				{
					targets: '.page-links',
					opacity: [0, 1],
					duration: 1000,
					delay: anime.stagger(80),
					easing: 'linear'
				},
				3500
			);
	});
</script>

<!-- <div class="debug-box">
	{mouseCurrent.x}
	{JSON.stringify(mouseCurrent)}
</div> -->

<div
	class="frame"
	class:freeze={!entryComplete}
	style="--shift-x: {parallaxShift.x}px; --shift-y: {parallaxShift.y}px"
>
	<div class="parallax-scene">
		<div class="parallax-track">
			<div class="background" />

			<div class="window">
				<img src={windowImage} alt="window lol" />
			</div>
		</div>
	</div>

	<div class="layout">
		<div />

		<main>
			<div>
				<h1 class="job-title">
					<span>Hey there!</span>
					<span>I'm</span>
					<span>Bryon</span>
					<span>Sigawin</span>
				</h1>
				<h2 class="my-name">
					<span>front-end developer </span>
					<span>with </span>
					<span>a </span>
					<span>penchant </span>
					<span>for </span>
					<span>ux </span>
					<span>and </span>
					<span>motion </span>
					<span>design.</span>
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
	class="circle"
	style="--position-x: {mouseCurrent.x}px; --position-y: {mouseCurrent.y}px; --scale: {cursorScale}"
/>

<style>
	.circle {
		position: fixed;
		top: 0;
		left: 0;

		width: 15px;
		height: 15px;

		border-radius: 50%;
		background-color: white;

		pointer-events: none;

		transform: translate(calc(var(--position-x) - 50%), calc(var(--position-y) - 50%))
			scale(var(--scale));
	}

	.debug-box {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 10;

		transform: translateX(-50%, -50%);

		font-size: 48px;
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

	.freeze .parallax-scene {
		transform: translateX(-50vw);
	}

	.parallax-scene {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}

	.parallax-track {
		position: absolute;
		top: 50%;
		left: -5vw;

		width: 160vw;
		height: 120vh;

		/* transform: translateY(-50%); */

		transform: translate(var(--shift-x), calc(-50% + var(--shift-y)));
	}

	.window {
		position: absolute;
		top: 50%;
		left: -10vw;

		transform: translate(0, -50%);
	}

	.window img {
		width: auto;
		height: 90vh;
	}

	.background::before,
	.background::after {
		content: '';

		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
	}

	.background::before {
		background-color: #183a6a;
	}

	.background::after {
		background-image: url('$lib/images/wall-texture.jpg');
		background-size: 50%;

		mix-blend-mode: overlay;
		opacity: 0.1;
	}

	.layout {
		display: grid;
		grid-template-columns: 40vw 1fr;
		align-items: center;
		gap: 5rem;

		min-height: 100vh;
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

	.job-title {
		font-size: 4rem;
		font-weight: 300;
		letter-spacing: -3px;
		font-style: italic;

		margin: 0;

		overflow: hidden;
	}

	.my-name {
		font-size: 1.25rem;
		font-weight: 200;

		margin: 0;
		overflow: hidden;
	}

	.page-links {
		display: flex;
		gap: 2rem;
	}

	.job-title span,
	.my-name span {
		display: inline-block;
	}

	.page-link {
		font-size: 0.95rem;
		font-weight: 200;

		color: rgb(219, 219, 219);
		text-decoration: none;
	}
</style>
