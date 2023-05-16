<script>
  import { Group, MeshBasicMaterial } from 'three';
  import { T, Three } from '@threlte/core';
  import { useGltf } from '@threlte/extras';

  import { clockHands } from '../animator/animation-store';

  export const ref = new Group();

  const { gltf } = useGltf('/models/scene.glb', {
    useDraco: 'loaders/draco/'
  });

  const outlineMaterial = new MeshBasicMaterial({ color: '#191919' });
</script>

{#if $gltf}
  <Three type={ref} {...$$restProps}>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Kettle.geometry}
      material={$gltf.materials.Kettle}
      position={[-2.11, 1.61, -5.23]}
    />
    <T.Group position={[-1.65, 1.75, -5.27]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.BezierCurve002.geometry}
        material={$gltf.materials.Dripper}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.BezierCurve002_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-1.65, 1.68, -5.35]} rotation={[0, -0.59, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder010.geometry}
        material={$gltf.materials.Pitcher}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder010_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Curtain.geometry}
      material={$gltf.materials.Curtain}
      position={[-0.1, 1.87, 1.59]}
      rotation={[-Math.PI / 2, 0, Math.PI]}
      scale={[-0.24, -0.24, -0.19]}
    />
    <T.Group position={[-2.94, 0.97, 1.01]} rotation={[Math.PI / 2, 0, -0.21]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Soil_02001.geometry}
        material={$gltf.materials.Plant}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Soil_02001_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-3.55, 1.01, -5.43]} scale={[0.86, 1, 1]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube012.geometry}
        material={$gltf.materials.Cabinet}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube012_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-1.32, 0.74, -5.5]} scale={[1, 0.93, 1]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube015.geometry}
        material={$gltf.materials.Shelf}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube015_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.63, 2.26, -5.51]} rotation={[0, 0.35, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube019.geometry}
        material={$gltf.materials.Box}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube019_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.55, 1.63, -5.36]} scale={[0.78, 0.27, 0.97]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube037.geometry}
        material={$gltf.materials.Cabinet}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube037_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.59, 1.37, -2.49]} rotation={[0, 0.18, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder004.geometry}
        material={$gltf.materials.Kettle}
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
    <T.Group position={[-1.32, 2.67, -5.77]} scale={[1.22, 0.05, 0.49]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube014.geometry}
        material={$gltf.materials.Shelf}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube014_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-1.92, 0.69, -1.38]} rotation={[0, 0.49, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder006.geometry}
        material={$gltf.materials.Wood}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder006_1.geometry}
        material={outlineMaterial}
      />
    </T.Group>
    <T.Group position={[-3.21, 0, -1.63]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube004.geometry}
        material={$gltf.materials.Wood}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube004_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.21, 0, -1.63]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube005.geometry}
        material={$gltf.materials.Wood}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube005_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-3.21, 0, -1.63]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube006.geometry}
        material={$gltf.materials.Wood}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube006_1.geometry} material={outlineMaterial} />
    </T.Group>
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
      material={$gltf.materials.PictureFrame}
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
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube018_1.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Group position={[-2.83, 3.43, -5.98]} rotation={[Math.PI / 2, 0, 0]} scale={0.75}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder002.geometry}
        material={$gltf.materials.Temp}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cylinder002_1.geometry}
        material={$gltf.materials.Clock}
      />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockFrame.geometry}
      material={$gltf.materials.Clock}
      position={[-2.83, 3.43, -5.98]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandHour.geometry}
      material={$gltf.materials.Clock}
      position={[-2.83, 3.43, -5.98]}
      rotation={[0, 0, $clockHands.hours]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandMinutes.geometry}
      material={$gltf.materials.Clock}
      position={[-2.83, 3.43, -5.98]}
      rotation={[0, 0, $clockHands.minutes]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.ClockHandMinutes.geometry}
      material={$gltf.materials.Clock}
      position={[-2.83, 3.43, -5.98]}
      rotation={[0, 0, $clockHands.seconds]}
      scale={0.75}
    />
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.TableMat.geometry}
      material={$gltf.materials.TableMat}
      position={[-2.92, 1.35, -1.33]}
    />
    <T.Group position={[-2.89, 1.39, -2.5]} rotation={[0, -0.11, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube.geometry}
        material={$gltf.materials.BookPage}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube_1.geometry}
        material={$gltf.materials.BookBlue}
      />
      <T.Mesh castShadow receiveShadow geometry={$gltf.nodes.Cube_2.geometry} material={outlineMaterial} />
    </T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Laptop_Block.geometry}
      material={$gltf.nodes.Laptop_Block.material}
      position={[-3.16, 1.37, -1.02]}
      rotation={[0, 0.13, 1.96]}
    />
    <T.Group position={[-1.7, 2.93, -5.78]} rotation={[0, 0, -Math.PI / 2]} scale={0.89}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube024.geometry}
        material={$gltf.materials.BookPage}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube024_1.geometry}
        material={$gltf.materials.BookBlue}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube024_2.geometry}
        material={$gltf.materials.BookGreen}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube024_3.geometry}
        material={$gltf.materials.BookRed}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube024_4.geometry}
        material={$gltf.materials.BookOrange}
      />
    </T.Group>
    <T.Group position={[-3.38, 2.11, -5]} rotation={[0, -0.44, 0]}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube023.geometry}
        material={$gltf.materials.BookPage}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube023_1.geometry}
        material={$gltf.materials.BookOrange}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube023_2.geometry}
        material={$gltf.materials.BookGreen}
      />
    </T.Group>
    <T.Group position={[-2.34, 2.78, -5.75]} rotation={[0, 0.01, 0]} scale={0.96}>
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube020.geometry}
        material={$gltf.materials.BookPage}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube020_1.geometry}
        material={$gltf.materials.BookGreen}
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={$gltf.nodes.Cube020_2.geometry}
        material={$gltf.materials.BookRed}
      />
    </T.Group>

    <slot {ref} />
  </Three>
{/if}
