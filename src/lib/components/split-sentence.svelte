<script>
  import { quintInOut } from 'svelte/easing';

  export let sentence = '';
  export let mode = 'words';

  export let inDuration = 600;
  export let inStagger = 10;
  export let inDelay = 0;

  export let outDuration = 600;
  export let outStagger = 0;
  export let outDelay = 0;

  let animPosition = 0;

  const slideAnim = (n, { out = false }) => {
    animPosition += 1;

    const duration = out ? outDuration : inDuration;

    const baseDelay = out ? outDelay : inDelay;
    const stagger = out ? outStagger : inStagger;
    const delay = baseDelay + stagger * animPosition;

    return {
      intro: false,
      delay,
      duration,
      css: (time) => {
        const eased = quintInOut(time);

        return /*css*/ `
        transform: translateY(${100 - eased * 100}%);
      `;
      }
    };
  };
</script>

{#each sentence.split(' ') as word}
  <span class="words">
    {#if mode === 'characters'}
      {#each word as character}
        <span class="character" in:slideAnim out:slideAnim={{ out: true }}>{character}</span>
      {/each}
    {:else}
      <span class="word" in:slideAnim out:slideAnim={{ out: true }}>{word}</span>
    {/if}
    <span class="empty">&#x200b;</span>
  </span>
{/each}

<style>
  .words,
  .word,
  .character {
    display: inline-block;
  }

  .words {
    overflow: hidden;
  }
</style>
