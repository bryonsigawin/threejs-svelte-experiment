<script>
	import { smoothScroll } from '$lib/stores/scroll';
	import anime from 'animejs';
	import { onDestroy } from 'svelte';

	// const unsubscribe = smoothScroll.subscribe((e) => {
	// 	// if (Math.ceil(e.scroll) === 1) keepInView = false;
	// 	// else if (e.scroll < window.innerHeight) keepInView = true;

	// 	if (Math.ceil(e.scroll) === 1) {
	// 		anime({
	// 			targets: '.intro-text span',
	// 			translateY: '-100%',
	// 			delay: anime.stagger(50),
	// 			duration: 400,
	// 			easing: 'easeOutQuart'
	// 		});
	// 	}

	// 	if (Math.ceil(e.scroll) === 0) {
	// 		anime({
	// 			targets: '.intro-text span',
	// 			translateY: '0%',
	// 			delay: anime.stagger(50),
	// 			duration: 400,
	// 			easing: 'easeOutQuart'
	// 		});
	// 	}
	// });

	onDestroy(() => unsubscribe());
</script>

<section class="home-hero">
	<div class="spacer" />
	<div class="content">
		<h1 class="intro-text">
			<span>bryon sigawin,</span> <span>front-end developer</span>
		</h1>
		<nav>
			<ul>
				<li><a href="#works">works</a></li>
				<li><a href="#contact">contact</a></li>
			</ul>
		</nav>
	</div>
</section>

<style>
	.home-hero {
		position: fixed;

		top: 0;
		left: 0;

		width: 100vw;
		height: 100vh;
	}

	.spacer {
		width: 50vw;
		height: 100%;

		max-height: 75vh;
		margin: 0 auto 50px;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin: 0 auto;
	}

	.intro-text {
		font-size: 38px;
		font-weight: 400;
		font-style: italic;

		margin: 0;
		margin-bottom: 20px;

		overflow: hidden;
	}

	.intro-text span {
		display: inline-block;
	}

	ul {
		display: flex;
		justify-content: center;

		width: 100%;

		padding: 0;
		margin: 0;

		list-style-type: none;
	}

	li {
		display: flex;
		align-items: center;
		position: relative;
	}

	li::before,
	li::after {
		content: '';
		display: block;

		width: 3px;
		height: 3px;
		border-radius: 50%;

		margin: 0 40px;

		background-color: white;
	}

	li:last-child::before {
		content: none;
	}

	a {
		font-size: 20px;
		font-weight: 200;

		color: white;
		text-decoration: none;
	}
</style>
