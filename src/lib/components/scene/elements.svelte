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
      geometry={$gltf.nodes.Kettle.geometry}
      material={$gltf.materials.Temp}
      position={[-2.11, 1.66, -5.23]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Dripper.geometry}
      material={$gltf.materials.Temp}
      position={[-1.65, 1.8, -5.27]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Pitcher.geometry}
      material={$gltf.materials.Temp}
      position={[-1.65, 1.72, -5.35]}
      rotation={[0, -0.59, 0]}
    />
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
      geometry={$gltf.nodes.Cabinet.geometry}
      material={$gltf.materials.Temp}
      position={[-3.55, 1.01, -5.43]}
      scale={[0.86, 1, 1]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Sideboard.geometry}
      material={$gltf.materials.Temp}
      position={[-1.32, 0.8, -5.5]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Sideboard001.geometry}
      material={$gltf.materials.Temp}
      position={[-1.32, 2.53, -5.77]}
      scale={[1.22, 0.05, 0.49]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Box.geometry}
      material={$gltf.materials.Temp}
      position={[-3.63, 2.26, -5.51]}
      rotation={[0, 0.35, 0]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Chair.geometry}
      material={$gltf.materials.Wood}
      position={[-1.92, 0.69, -1.38]}
      rotation={[0, 0.49, 0]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.CabinetDrawers.geometry}
      material={$gltf.materials.Temp}
      position={[-3.55, 1.65, -5.4]}
      scale={[0.66, 0.23, 0.97]}
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
    <T.Group position={[-1.59, 2.28, 2]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube018.geometry}
        material={$gltf.materials.Window}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube018_1.geometry}
        material={$gltf.materials.Outline}
      />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Clockface.geometry}
      material={$gltf.materials.Temp}
      position={[-2.83, 3.43, -5.98]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockFrame.geometry}
      material={$gltf.materials.Temp}
      position={[-2.83, 3.43, -5.98]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandHour.geometry}
      material={$gltf.materials.Temp}
      position={[-2.83, 3.43, -5.98]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandMinutes.geometry}
      material={$gltf.materials.Temp}
      position={[-2.83, 3.43, -5.98]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.TableMat.geometry}
      material={$gltf.materials.TableMat}
      position={[-2.92, 1.35, -1.33]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack001.geometry}
      material={$gltf.nodes.BookStack001.material}
      position={[-2.89, 1.39, -2.5]}
      rotation={[0, -0.11, 0]}
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
      geometry={$gltf.nodes.BookShelf.geometry}
      material={$gltf.materials.Temp}
      position={[-2.02, 2.56, -5.59]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={0.89}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack.geometry}
      material={$gltf.materials.Temp}
      position={[-3.38, 2.1, -5]}
      rotation={[0, -0.44, 0]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.BookStack002.geometry}
      material={$gltf.materials.Temp}
      position={[-2.34, 2.64, -5.75]}
      rotation={[0, 0.01, 0]}
      scale={0.96}
    />

    <slot {ref} />
  </Three>
{/if}
