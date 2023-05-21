<script>
  import SplitSentence from '$lib/components/split-sentence.svelte';
</script>

<div>
  <p>
    <SplitSentence
      sentence="Quisque posuere ipsum et turpis viverra auctor. Suspendisse venenatis tempor dolor, et porta risus pharetra ac."
      inStagger={5}
    />
    <br />
    <SplitSentence
      sentence="Quisque posuere ipsum et turpis viverra auctor. Suspendisse venenatis tempor dolor, et porta risus pharetra ac."
      inStagger={5}
      inDelay={100}
    />
  </p>
</div>

<style>
  p {
    font-weight: 200;
  }
</style>
