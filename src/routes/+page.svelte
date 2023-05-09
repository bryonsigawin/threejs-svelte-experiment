<script>
	import { OrbitControls, T, TransformableObject, useFrame } from '@threlte/core';

	import anime from 'animejs';

	import Room from '../lib/scenes/room.svelte';
	import Scene from '../lib/scenes/scene.svelte';

	let rotation = 0;
	let sceneFocus;

	let cameraPosition = { x: 0, y: 2.1, z: 8 };

	anime({
		targets: cameraPosition,
		x: [10, 0],
		duration: 5000,
		delay: 500,
		easing: 'easeInOutQuart',
		update: () => {
			cameraPosition = cameraPosition;
		}
	});
</script>

<T.Group rotation.y={rotation}>
	<T.PerspectiveCamera fov={30} let:ref={cam} position={[...Object.values(cameraPosition)]} makeDefault>
		<!-- <TransformableObject object={cam} lookAt={[3, 2, 8]} /> -->
		<!-- <OrbitControls enableDamping /> -->
	</T.PerspectiveCamera>
</T.Group>

<T.GridHelper />
<T.AxesHelper />

<T.DirectionalLight let:ref={mainLight} color={'#ffc350'} intensity={1} position={[1, 3, 3]} castShadow>
	<T.DirectionalLightHelper args={[mainLight, 5, '#F08C53']} />
	<T.Vector2 attach="shadow.mapSize" args={[2048, 2048]} />
</T.DirectionalLight>

<T.DirectionalLight let:ref={fillLight} color={'#1f1b12'} intensity={5} position={[-3, 10, -10]}>
	<T.DirectionalLightHelper args={[fillLight, 5, '#F08C53']} />
	<T.Vector2 attach="shadow.mapSize" args={[2048, 2048]} />
</T.DirectionalLight>

<T.Mesh position.y={0.5} castShadow let:ref>
	<T.BoxGeometry />
	<T.MeshStandardMaterial color="#333333" />
</T.Mesh>

<T.Group bind:ref={sceneFocus}>
	<Scene />
</T.Group>
