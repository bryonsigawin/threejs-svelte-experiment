<script>
  import { Group, MeshBasicMaterial } from 'three';

  import { T, Three } from '@threlte/core';
  import { useGltf } from '@threlte/extras';

  import { isNight, clockHands } from '../../stores/time';
  import LightCone from './light-cone.svelte';

  export const ref = new Group();

  const { gltf } = useGltf('/models/scene.glb', {
    useDraco: 'loaders/draco/'
  });

  const outlineMaterial = new MeshBasicMaterial({ color: '#191919' });
</script>

{#if $gltf}
  <Three type={ref} {...$$restProps}>
    {#if $isNight}
      <LightCone
        geometry={$gltf.nodes.LightCone.geometry}
        position={[-2.93, 1.37, -1.67]}
        rotation={[-0.17, -0.06, 0.12]}
      />
    {/if}

    <T.Group position={[-1.47, 2.7, -5.76]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane028.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane028_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-0.32, 2.7, -5.76]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane028.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane028_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-0.1, 1.87, 1.59]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane002.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane002_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-2.94, 0.59, 1.01]} rotation={[Math.PI / 2, 0, -0.92]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Soil_02001.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Soil_02001_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-3.55, 1.01, -5.43]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube012.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube012_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-1.32, 0.74, -5.5]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube015.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube015_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.63, 2.26, -5.51]} rotation={[0, 0.35, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube019.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube019_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-1.32, 2.67, -5.77]} scale={[1.22, 0.05, 0.49]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube014.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube014_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-1.92, 0.69, -1.38]} rotation={[0, 0.49, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder006.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder006_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>

    <T.Group position={[-2.89, 1.13, -5.36]} rotation={[Math.PI / 2, 0.21, -1.13]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane014.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Plane014_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-2.11, 1.61, -5.23]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder007.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder007_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-1.81, 1.75, -5.27]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.BezierCurve002.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.BezierCurve002_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-1.81, 1.68, -5.35]} rotation={[0, -0.59, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder010.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder010_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-3.55, 1.79, -4.84]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube028.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube028_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.21, 0, -1.63]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube004.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube004_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.21, 0, -1.63]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube005.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube005_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.21, 0, -1.63]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube006.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube006_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Wall.geometry}
      material={$gltf.materials.Wall}
      position={[0.79, 2, 2]}
      scale={[5, 2, 0.1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Wall001.geometry}
      material={$gltf.materials.FlatColor}
      position={[-4.11, 2, -1.1]}
      rotation={[-Math.PI, Math.PI / 2, 0]}
      scale={[-3, -2, -0.1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Wall003.geometry}
      material={$gltf.materials.FlatColor}
      position={[5.68, 2, -1.1]}
      rotation={[-Math.PI, Math.PI / 2, 0]}
      scale={[-3, -2, -0.1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Wall002.geometry}
      material={$gltf.materials.FlatColor}
      position={[-1.21, 2, -6.1]}
      rotation={[-Math.PI, 0, 0]}
      scale={[-5, -2, -0.1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Plane.geometry}
      material={$gltf.materials.Wall}
      position={[-0.38, 0, 0]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Plane001.geometry}
      material={$gltf.materials.Wall}
      position={[-0.38, -4.79, 0]}
    />
    <T.Group position={[-4.01, 2.46, -3.48]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube001.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube001_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Picture.geometry}
      material={$gltf.materials.FlatColor}
      position={[-4.01, 2.46, -3.48]}
      rotation={[0, -Math.PI / 2, 0]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.WindowPane_L.geometry}
      material={$gltf.materials.FlatColor}
      position={[-1.61, 2.28, 2]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.WindowPane_R.geometry}
      material={$gltf.materials.FlatColor}
      position={[-1.61, 2.28, 2]}
    />
    <T.Group position={[-1.59, 2.28, 2]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube018.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube018_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-2.83, 3.43, -5.98]} rotation={[Math.PI / 2, 0, 0]} scale={0.75}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder002.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder002_1.geometry}
        material={$gltf.materials.FlatColorDark}
      />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockFrame.geometry}
      material={$gltf.materials.FlatColorDark}
      position={[-2.83, 3.43, -5.98]}
      rotation={[Math.PI / 2, 0, 0]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandMinutes.geometry}
      material={$gltf.materials.FlatColorDark}
      position={[-2.83, 3.43, -5.98]}
      rotation={[0, 0, $clockHands.minutes]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandHours.geometry}
      material={$gltf.materials.FlatColorDark}
      position={[-2.83, 3.43, -5.98]}
      rotation={[0, 0, $clockHands.hours]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandSeconds.geometry}
      material={$gltf.materials['ClockHands.001']}
      position={[-2.83, 3.43, -5.98]}
      rotation={[0, 0, $clockHands.seconds]}
    />
    <T.Group position={[-2.92, 1.36, -1.33]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube003.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube003_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-2.89, 1.39, -2.5]} rotation={[0, -0.11, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.59, 1.37, -2.49]} rotation={[0, 0.18, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder004.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder004_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-3.16, 1.38, -1.02]} rotation={[Math.PI, -0.17, Math.PI]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube030.geometry}
        material={$gltf.materials.FlatColor}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube030_1.geometry} material={outlineMaterial} />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube030_2.geometry}
        material={$gltf.materials.FlatColorDark}
      />
    </T.Group>

    <slot {ref} />
  </Three>
{/if}
