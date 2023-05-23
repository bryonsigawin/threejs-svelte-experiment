<script>
  import { fade } from 'svelte/transition';

  import SplitSentence from '$lib/components/split-sentence.svelte';
</script>

<div class="content">
  <h1>
    <SplitSentence sentence="bit more about me," inStagger={5} />
  </h1>

  <p>
    <SplitSentence
      sentence="I've spent the past 7-ish years specializing in front-end web development, and beyond writing code, I've also had a hand in designing UI and UX, architecting systems, and being the lead maintainer of the codebases."
      inStagger={5}
      inDelay={100}
    />
  </p>

  <p>
    <SplitSentence
      sentence="A result of having a design education, I'm also a big fan of UI/UX and motion design. I've been known to nitpick over designs and trying to add micro-interactions and animations wherever it makes sense."
      inStagger={5}
      inDelay={200}
    />
  </p>

  <p>
    <SplitSentence
      sentence="Outside of work, I brew and drink too much coffee, and have spent many hours just staring at walls and listening to music."
      inStagger={5}
      inDelay={200}
    />
  </p>

  <div in:fade={{ duration: 400, delay: 800 }} out:fade={{ duration: 400 }}>
    <a href="/">Go back</a>
  </div>
</div>

<style>
  div {
    max-width: 700px;
  }

  h1 {
    font-weight: 200;
    font-style: italic;
  }

  p {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5;
  }

  a {
    display: block;

    font-size: 0.95rem;
    font-weight: 200;

    color: rgb(219, 219, 219);
    text-decoration: none;

    transition: cubic-bezier(0.77, 0, 0.175, 1) 300ms opacity;
    opacity: 0.7;

    margin-top: 3rem;
  }

  a:hover {
    opacity: 1;
  }
</style>
