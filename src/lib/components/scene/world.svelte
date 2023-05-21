<script>
  import { Canvas } from '@threlte/core';
  import { VSMShadowMap } from 'three';

  import Scene from './scene.svelte';
</script>

<div>
  <Canvas shadowMapType={VSMShadowMap}>
    <Scene />
  </Canvas>
</div>

<style>
  div {
    position: fixed;

    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
  }
</style>
