<script>
  import { Group } from 'three';
  import { T, Three } from '@threlte/core';
  import { useGltf } from '@threlte/extras';

  export const ref = new Group();

  const { gltf } = useGltf('/models/scene_colored-transformed.glb', {
    useDraco: 'loaders/draco/'
  });
</script>

{#if $gltf}
  <Three type={ref} {...$$restProps}>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Curtain.geometry}
      material={$gltf.materials.Curtain}
      position={[-0.1, 1.87, 1.59]}
      rotation={[-Math.PI / 2, 0, Math.PI]}
      scale={[-0.24, -0.24, -0.19]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Plant.geometry}
      material={$gltf.materials.Plant}
      position={[-2.94, 0.97, 1.01]}
      rotation={[Math.PI / 2, 0, -0.21]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Cube.geometry}
      material={$gltf.materials.Temp}
      position={[-3.55, 1.01, -5.43]}
      scale={[0.86, 1, 1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Cube001.geometry}
      material={$gltf.materials.Temp}
      position={[-1.18, 0.8, -5.5]}
      scale={[1.18, 0.8, 0.47]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Cube003.geometry}
      material={$gltf.materials.Temp}
      position={[-3.63, 2.26, -5.51]}
      rotation={[0, 0.35, 0]}
      scale={[0.27, 0.24, 0.27]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Chair.geometry}
      material={$gltf.materials.Wood}
      position={[-1.92, 0.69, -1.38]}
      rotation={[0, 0.49, 0]}
      scale={[0.37, 1, 0.37]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Cube002.geometry}
      material={$gltf.materials.Temp}
      position={[-3.55, 1.65, -5.42]}
      scale={[0.75, 0.26, 1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Cube004.geometry}
      material={$gltf.materials.Temp}
      position={[-3.55, 1.01, -5.43]}
      scale={[0.86, 1, 1]}
    />
    <T.Group position={[-3.59, 1.37, -2.49]} rotation={[0, 0.18, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder004.geometry}
        material={$gltf.materials.Temp}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder004_1.geometry}
        material={$gltf.materials.Temp}
      />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Guitar.geometry}
      material={$gltf.materials.Temp}
      position={[-2.89, 1.13, -5.36]}
      rotation={[Math.PI / 2, 0.21, -1.13]}
      scale={[0.06, 0.24, 0.24]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.TableTop.geometry}
      material={$gltf.materials.Wood}
      position={[-3.21, 0, -1.63]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Legs.geometry}
      material={$gltf.materials.Wood}
      position={[-3.21, 0, -1.63]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.LegBridges.geometry}
      material={$gltf.materials.Wood}
      position={[-3.21, 0, -1.63]}
    />
    <T.Group position={[0.79, 2, 2]} scale={[5, 2, 0.1]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube007.geometry}
        material={$gltf.materials.Wall}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube007_1.geometry}
        material={$gltf.materials.Wall}
      />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Wall001.geometry}
      material={$gltf.materials.InnerWall}
      position={[-4.11, 2, -1.1]}
      rotation={[-Math.PI, Math.PI / 2, 0]}
      scale={[-3, -2, -0.1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Wall002.geometry}
      material={$gltf.materials.InnerWall}
      position={[-1.21, 2, -6.1]}
      rotation={[-Math.PI, 0, 0]}
      scale={[-5, -2, -0.1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Wall003.geometry}
      material={$gltf.materials.Wall}
      position={[5.68, 2, -1.1]}
      rotation={[-Math.PI, Math.PI / 2, 0]}
      scale={[-3, -2, -0.1]}
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
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.PictureFrame.geometry}
      material={$gltf.materials.Temp}
      position={[-4.01, 2.46, -3.48]}
      rotation={[-Math.PI, Math.PI / 2, 0]}
      scale={[-0.65, -0.66, -1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Picture.geometry}
      material={$gltf.materials.Temp}
      position={[-4.01, 2.46, -3.48]}
      rotation={[-Math.PI, Math.PI / 2, 0]}
      scale={[-0.65, -0.66, -1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.WindowPane_L.geometry}
      material={$gltf.materials.Window}
      position={[-1.61, 2.28, 2]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.WindowPane_R.geometry}
      material={$gltf.materials.Window}
      position={[-1.61, 2.28, 2]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.WindowFrame.geometry}
      material={$gltf.materials.Window}
      position={[-1.59, 2.28, 2]}
      scale={[1.25, 1.04, 0.21]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Clockface.geometry}
      material={$gltf.materials.Temp}
      position={[-2.29, 3.44, -5.98]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.86}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockFrame.geometry}
      material={$gltf.materials.Temp}
      position={[-2.29, 3.44, -5.98]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.86}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandHour.geometry}
      material={$gltf.materials.Temp}
      position={[-2.29, 3.44, -5.98]}
      scale={[0.2, 3.5, 0.05]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandMinutes.geometry}
      material={$gltf.materials.Temp}
      position={[-2.29, 3.44, -5.98]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[0.2, 2.55, 0.05]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.TableMat.geometry}
      material={$gltf.materials.TableMat}
      position={[-2.92, 1.35, -1.33]}
      scale={[0.47, 0.43, 0.56]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack.geometry}
      material={$gltf.nodes.BookStack.material}
      position={[-2.9, 1.41, -2.53]}
      rotation={[0, -0.11, 0]}
      scale={[1.66, 2.25, 1.58]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Laptop_Block.geometry}
      material={$gltf.nodes.Laptop_Block.material}
      position={[-3.16, 1.37, -1.02]}
      rotation={[0, 0.13, 1.96]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Pot.geometry}
      material={$gltf.nodes.Pot.material}
      position={[-3.71, 1.47, -2.09]}
      scale={1.2}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack002.geometry}
      material={$gltf.nodes.BookStack002.material}
      position={[-2.18, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.41, 3.6, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack003.geometry}
      material={$gltf.nodes.BookStack003.material}
      position={[-2.05, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.01, 1.53, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack005.geometry}
      material={$gltf.nodes.BookStack005.material}
      position={[-1.89, 1.6, -5.67]}
      rotation={[-Math.PI, 0, Math.PI / 2]}
      scale={[1.23, 1.83, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack006.geometry}
      material={$gltf.nodes.BookStack006.material}
      position={[-1.82, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.48, 1.08, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack004.geometry}
      material={$gltf.nodes.BookStack004.material}
      position={[-1.97, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.3, 1.37, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack007.geometry}
      material={$gltf.nodes.BookStack007.material}
      position={[-1.75, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.32, 1.53, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack008.geometry}
      material={$gltf.nodes.BookStack008.material}
      position={[-1.65, 1.6, -5.67]}
      rotation={[Math.PI, 0, Math.PI / 2]}
      scale={[1.38, 2.48, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack009.geometry}
      material={$gltf.nodes.BookStack009.material}
      position={[-1.56, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.24, 1.18, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack010.geometry}
      material={$gltf.nodes.BookStack010.material}
      position={[-1.5, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.24, 1.17, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack011.geometry}
      material={$gltf.nodes.BookStack011.material}
      position={[-1.44, 1.6, -5.67]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[0.93, 1.19, 1.41]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack001.geometry}
      material={$gltf.nodes.BookStack001.material}
      position={[-1.06, 1.71, -5.66]}
      rotation={[0, -0.11, 0]}
      scale={[1.41, 1.53, 1.41]}
    />

    <slot {ref} />
  </Three>
{/if}
