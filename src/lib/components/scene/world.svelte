<script>
  import { Canvas } from '@threlte/core';
  import { VSMShadowMap } from 'three';

  import Scene from './scene.svelte';
</script>

<video id="video" src="textures/caustics_edited.mkv" muted="true" playsinline="true" loop controls />

<div>
  <Canvas shadowMapType={VSMShadowMap}>
    <Scene />
  </Canvas>
</div>

<style>
  video {
    display: none;
  }

  div {
    position: fixed;

    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background: hsl(0 0% 10%);
  }

  @media screen and (max-width: 768px) {
    div {
      height: 100vw;
    }
  }
</style>
