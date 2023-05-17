<script>
  import { T } from '@threlte/core';

  let lightIntensity = 1;
</script>

<!--
  Room ambient light
-->
<T.DirectionalLight color={'#ffffff'} intensity={0.02 * lightIntensity} position={[2, 4, 5]} />

<!-- 
  Room sort-of rim lights
 -->
<T.DirectionalLight color={'#ffa454'} intensity={0.03 * lightIntensity} position={[0.5, 4, 0]}>
  <T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<!--
  Lamp light
  note: light cone is coming from ./elements
-->
<T.SpotLight
  position={[-4, 2.5, -1]}
  intensity={0.5 * lightIntensity}
  color={'#ff9b40'}
  angle={Math.PI / 6.1}
/>

<T.SpotLight
  position={[-1.5, 2.5, 10]}
  distance={10}
  intensity={3 * lightIntensity}
  penumbra={0}
  angle={Math.PI / 4}
  color={'#96a1ce'}
/>

<T.PointLight
  position={[-2.83, 3.43, -5.8]}
  color={'#ffe9d6'}
  intensity={0.01 * lightIntensity}
  distance={0.35}
  decay={0.1}
/>
