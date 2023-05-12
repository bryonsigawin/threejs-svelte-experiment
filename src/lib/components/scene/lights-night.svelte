<!-- 
  Main sun light source intended for casting the shadow of the window
 -->
<T.DirectionalLight color={'#ffffff'} intensity={0.03} position={[4, 10, 5]}>
  <T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<!-- 
  Light source for the room's interior
 -->
<T.DirectionalLight color={'#ff9b40'} intensity={0.1} position={[0.5, 4, 0]}>
  <T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<T.SpotLight
  let:ref={nightLight}
  position={[-4, 2.5, -1]}
  intensity={0.5}
  color={'#ff9b40'}
  angle={Math.PI / 6.1}
>
  <!-- <Three type={new SpotLightHelper(nightLight)} /> -->
</T.SpotLight>
