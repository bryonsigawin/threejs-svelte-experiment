<script>
	import { Object3DInstance, T } from '@threlte/core';
	import { MeshToonMaterial } from 'three';

	import { useGltf } from '@threlte/extras';

	const { gltf } = useGltf('/models/scene_simplified.glb', {
		useDraco: true
	});

	gltf.subscribe((e) => {
		console.log(e);
	});

	// const toonShader = T.MeshToonMaterial({});
</script>

{#if $gltf}
	<Object3DInstance object={$gltf.scene} />
	<!-- <T.Mesh geometry={$gltf.nodes['Table'].geometry} position={[1, 0, 0]} castShadow receiveShadow>
		<T.MeshStandardMaterial />
	</T.Mesh> -->
{/if}
