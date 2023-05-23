<script>
  import { Canvas } from '@threlte/core';
  import { VSMShadowMap } from 'three';

  import Scene from './scene.svelte';
  import { tweened } from 'svelte/motion';

  export let isReady = false;

  const fadeIn = tweened(0, {
    duration: 1000,
    delay: 750
  });

  $: if (isReady) {
    fadeIn.set(1);
  }
</script>

<div style={`opacity: ${$fadeIn};`}>
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
