<script>
  import { fade } from 'svelte/transition';

  import SplitSentence from '$lib/components/split-sentence.svelte';
</script>

<div>
  <h1>
    <SplitSentence sentence="bit more about me," inStagger={5} />
  </h1>
  <p>
    <SplitSentence
      sentence="I've spent the past 7 years specializing in front-end web development. Beyond writing code, I've also had a hand in the designing the UI, architecting systems, and being the lead maintainer of the codebase."
      inStagger={5}
      inDelay={100}
    />
  </p>

  <p>
    <SplitSentence
      sentence="Though primarily a dev, I'm a big fan of motion and U/UX design, and am always searching for ways to craft unique experiences with animations and micro-interactions."
      inStagger={5}
      inDelay={200}
    />
  </p>

  <p>
    <SplitSentence
      sentence="Outside of work, I like brewing coffee and listening to music for long sessions."
      inStagger={5}
      inDelay={300}
    />
  </p>

  <div in:fade={{ duration: 400, delay: 800 }} out:fade={{ duration: 400 }}>
    <a href="/">Go back</a>
  </div>
</div>

<style>
  div {
    max-width: 800px;
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
