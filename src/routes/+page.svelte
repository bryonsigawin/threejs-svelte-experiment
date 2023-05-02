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

	import windowImage from '$lib/images/window-temp.png';
</script>

<div class="layout">
	<div class="window">
		<img src={windowImage} alt="window lol" />
	</div>

	<main>
		<div>
			<h1 class="job-title">front-end developer</h1>
			<h2 class="my-name">bryon sigawin</h2>
		</div>

		<div class="page-links">
			<a class="page-link" href="/">about</a>
			<a class="page-link" href="/">resume</a>
			<a class="page-link" href="/">linkedin</a>
			<a class="page-link" href="/">github</a>
		</div>
	</main>
</div>

<style>
	.layout {
		position: relative;

		display: grid;
		grid-template-columns: 40vw 1fr;
		align-items: center;
		gap: 5rem;

		min-height: 100vh;
	}

	.layout::before {
		content: '';

		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		background-image: url('$lib/images/wall-texture.jpg');
		background-size: 50%;
		opacity: 0.2;
		mix-blend-mode: overlay;
	}

	.window {
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: flex-end;
	}

	.window img {
		width: auto;
		height: 90vh;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		margin-top: 10rem;
		gap: 10rem;
	}

	.job-title {
		font-size: 3.5rem;
		font-weight: 300;
		letter-spacing: -3px;

		margin: 0;
	}

	.my-name {
		font-size: 1.5rem;
		font-weight: 200;

		margin: 0;
	}

	.page-links {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.page-link {
		font-size: 0.95rem;
		font-weight: 200;

		color: white;
		text-decoration: none;
	}
</style>
