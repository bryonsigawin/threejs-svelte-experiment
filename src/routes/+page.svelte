<script>
	import { OrbitControls, T, TransformableObject, useFrame } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import Scene from '../lib/scenes/scene.svelte';
	import { DirectionalLight, DirectionalLightHelper } from 'three';

	import anime from 'animejs';

	import Room from '../lib/scenes/room.svelte';

	let rotation = 0;
	let sceneFocus;

	let cameraPosition = { x: 2.1, y: 2, z: 8 };

	anime({
		targets: cameraPosition,
		x: [10, 2.1],
		duration: 5000,
		delay: 1000,
		easing: 'easeOutQuint',
		update: () => {
			cameraPosition = cameraPosition;
		}
	});
</script>

<T.Group rotation.y={rotation}>
	<T.PerspectiveCamera
		fov={35}
		let:ref={cam}
		position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
		makeDefault
	>
		<!-- <TransformableObject object={cam} lookAt={[3, 2, 8]} /> -->
		<!-- <OrbitControls enableDamping /> -->
	</T.PerspectiveCamera>
</T.Group>

<T.GridHelper />
<T.AxesHelper />

<T.DirectionalLight let:ref={light} args={['#ffffff', 0.2]} position={[1, 3, 3]} castShadow visible>
	<T.DirectionalLightHelper args={[light, 5, '#F08C53']} />
	<T.Vector2 attach="shadow.mapSize" args={[2048, 2048]} />
</T.DirectionalLight>
<!-- <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} /> -->
<!-- <T.AmbientLight intensity={0.5} /> -->

<T.Group bind:ref={sceneFocus}>
	<Room />
</T.Group>
