<script>
  import { fade } from 'svelte/transition';

  import SplitSentence from '$lib/components/split-sentence.svelte';
</script>

<div class="content">
  <div class="headline">
    <h1 class="intro-line-1">
      <SplitSentence
        sentence="Hey there, I'm Bryon Sigawin"
        mode="characters"
        inDuration={1000}
        inStagger={20}
      />
    </h1>
    <h2 class="intro-line-2">
      <SplitSentence
        sentence="a front-end developer with a penchant for ux and motion design"
        mode="characters"
        inDuration={600}
        inStagger={7}
        inDelay={300}
        outDelay={50}
      />
    </h2>
  </div>

  <div class="page-links" in:fade={{ duration: 400, delay: 800 }} out:fade={{ duration: 400 }}>
    <a class="page-link" href="/about">about</a>
    <a class="page-link" href="/bryon_sigawin_cv_2023.pdf" target="_blank">resume</a>
    <a class="page-link" href="mailto:bryon.sigawin@gmail.com" target="_blank">get in touch</a>
    <a class="page-link" href="https://www.linkedin.com/in/bryon-sigawin/" target="_blank">linkedin</a>
    <a class="page-link" href="https://github.com/bryonsigawin" target="_blank">github</a>
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 4rem;
    margin-top: 10vh;
  }

  .intro-line-1 {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: -3px;
    font-style: italic;

    margin: 0;
  }

  .intro-line-2 {
    font-size: 1.1rem;
    font-weight: 200;

    margin: 0;
  }

  .page-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 0.15rem;
  }

  .page-link {
    font-size: 0.95rem;
    font-weight: 200;

    color: rgb(219, 219, 219);
    text-decoration: none;

    transition: cubic-bezier(0.77, 0, 0.175, 1) 300ms opacity;
    opacity: 0.7;
  }

  .page-link:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    .intro-line-1 {
      font-size: 1.8rem;
      letter-spacing: -1px;
    }

    .intro-line-2 {
      font-size: 1rem;
    }

    .page-link {
      opacity: 1;
    }
  }
</style>
