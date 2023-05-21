<script>
  import { quintInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  export let sentence = '';
  export let inDuration = 800;
  export let inDelay = 0;
  export let inStagger = 0;
  0;

  export let outDuration = 800;
  export let outDelay = 0;
  export let outStagger = 0;

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

<div in:fade>
  {#each sentence.split(' ') as word}
    <span class="word">
      {#each word as character}
        <span class="character" in:slideAnim out:slideAnim={{ out: true }}>{character}</span>
      {/each}
      <span class="empty">&#x200b;</span>
    </span>
  {/each}
</div>

<style>
  .word,
  .character {
    display: inline-block;
  }

  .word {
    overflow: hidden;
  }
</style>
