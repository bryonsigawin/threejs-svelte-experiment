<script>
  export let sentence = '';
</script>

{#each sentence.split(' ') as word}
  <span class="word">
    {#each word as character}
      <span class="character">{character}</span>
    {/each}
    <span class="empty">&#x200b;</span>
  </span>
{/each}

<style>
  .word,
  .character {
    display: inline-block;
  }

  .word {
    overflow: hidden;
  }
</style>
