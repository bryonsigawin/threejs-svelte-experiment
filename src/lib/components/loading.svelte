<script>
  import SplitSentence from './split-sentence.svelte';
</script>

<div class="loader">
  <div class="loading-text">
    <SplitSentence
      sentence="Loading"
      inDuration={1500}
      inStagger={20}
      outDuration={1500}
      outStagger={20}
      mode="characters"
    />
  </div>
</div>

<style>
  .loader {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
    font-size: 1.5rem;

    width: 100vw;
    height: 100vh;
  }
</style>
