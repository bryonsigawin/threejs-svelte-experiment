<script>
	import { OrbitControls, T, Three, TransformableObject, useFrame, useTexture } from '@threlte/core';
	import { Editable } from '@threlte/theatre';

	import anime from 'animejs';

	import Room from '../lib/scenes/room.svelte';
	import Scene from '../lib/scenes/scene.svelte';
	import { BoxGeometry, PointLightHelper, RectAreaLight, SpotLightHelper, VideoTexture } from 'three';
	import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
	import { DEG2RAD } from 'three/src/math/MathUtils';

	let rotation = 0;
	let sceneFocus;

	let cameraPosition = { x: 0, y: 2.2, z: 8.5 };

	const video = document.getElementById('video');
	video.play();

	const texture = new VideoTexture(video);
	texture.needsUpdate = true;

	// anime({
	// 	targets: cameraPosition,
	// 	x: [4, 0],
	// 	duration: 6000,
	// 	delay: 500,
	// 	easing: 'easeInOutQuart',
	// 	update: () => {
	// 		cameraPosition = cameraPosition;
	// 	}
	// });

	let target;

	useFrame(() => {
		texture.needsUpdate = true;
	});
</script>

<T.Group rotation.y={rotation}>
	<T.PerspectiveCamera fov={30} let:ref={cam} position={[...Object.values(cameraPosition)]} makeDefault>
		<!-- <OrbitControls enableDamping /> -->
		<!-- <Editable name="Camera" transform controls /> -->
	</T.PerspectiveCamera>
</T.Group>

<T.GridHelper />
<T.AxesHelper />

<T.AmbientLight intensity={0.1} />

<T.DirectionalLight
	let:ref={mainLight}
	color={'#FFF1CD'}
	intensity={3}
	position={[16, 30, 10]}
	castShadow
	shadow.camera.near={0.5}
	shadow.camera.far={100}
	shadow.camera.top={8}
	shadow.camera.right={8}
	shadow.camera.bottom={-8}
	shadow.camera.left={-8}
	shadow.radius={1.5}
	shadow.blurSamples={26}
	shadow.bias={-0.0003}
>
	<T.DirectionalLightHelper args={[mainLight, 5, '#F08C53']} />
	<T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<T.DirectionalLight let:ref={roomAmbient} color={'#ffffff'} intensity={1} position={[1.5, 4, 0]}>
	<T.DirectionalLightHelper args={[roomAmbient, 5, '#F08C53']} />
</T.DirectionalLight>

<T.SpotLight
	let:ref={causticLight}
	position={[0.5, 1.5, 8]}
	target.position={[0.5, 1.5, 0]}
	intensity={0.3}
	color={'#ffffff'}
	angle={Math.PI / 4}
	penumbra={1}
	distance={15}
	map={texture}
	castShadow
	shadow.focus={0.6}
	shadow.radius={1.5}
	shadow.blurSamples={26}
	shadow.bias={-0.0002}
	shadow.camera.near={2}
	shadow.camera.top={8}
	shadow.camera.right={8}
	shadow.camera.bottom={-8}
	shadow.camera.left={-8}
>
	<T.SpotLightHelper args={[causticLight]} />
	<T.Vector2 attach="shadow.mapSize" args={[1024 * (16 / 9), 1024]} />
</T.SpotLight>

<T.Group bind:ref={sceneFocus}>
	<Scene />
</T.Group>
