<script>
	import { T } from '@threlte/core';
	import { BackSide } from 'three';

	export let baseMesh;
	export let outlineThickness = 0.01;
</script>

{#if baseMesh}
	<T.Mesh geometry={baseMesh.geometry} {...$$props}>
		<T.ShaderMaterial
			vertexShader={`
				void main() {
					vec3 newPosition = position + normal * ${outlineThickness};
					gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1);
				}
			`}
			fragmentShader={`
				void main() {
					gl_FragColor = vec4(0, 0, 0, 1);
				}
			`}
			side={BackSide}
		/>
	</T.Mesh>
{/if}
