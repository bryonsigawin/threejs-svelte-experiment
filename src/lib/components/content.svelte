<script>
  import anime from 'animejs';
  import { entryComplete, cursorScale, contentShift } from './animator/animation-store';
  import SplitSentence from './split-sentence.svelte';

  let animation;
  let _cursorScale = { ...$cursorScale };

  /**
   * TODO: this can 100% be refactored
   */
  const animateOnHover = (reverse = false) => {
    if (animation) animation.pause();

    animation = anime({
      targets: _cursorScale,
      value: [$cursorScale.value, reverse ? 1 : 0.3],
      duration: 700,
      easing: 'easeOutQuart',
      update: () => {
        cursorScale.set(_cursorScale);
      }
    });
  };
</script>

<div
  class="frame"
  class:freeze={!$entryComplete}
  style="--shift-x: {$contentShift.x}px; --shift-y: {$contentShift.y}px"
>
  <div class="layout">
    <div />

    <main>
      <div>
        <h1 class="intro-line-1">
          <SplitSentence sentence="Hey there, I'm Bryon Sigawin" />
        </h1>
        <h2 class="intro-line-2">
          <SplitSentence sentence="front-end developer with a penchant for ux and motion design." />
        </h2>
      </div>
      <div class="page-links">
        <!-- <a
          class="page-link"
          href="/"
          on:mouseenter={() => animateOnHover(false)}
          on:mouseleave={() => animateOnHover(true)}
        >
          about
        </a> -->
        <a
          class="page-link"
          href="/bryon_sigawin_cv_2023.pdf"
          target="_blank"
          on:mouseenter={() => animateOnHover(false)}
          on:mouseleave={() => animateOnHover(true)}
          >resume
        </a>
        <a
          class="page-link"
          href="https://www.linkedin.com/in/bryon-sigawin/"
          target="_blank"
          on:mouseenter={() => animateOnHover(false)}
          on:mouseleave={() => animateOnHover(true)}
          >linkedin
        </a>
        <a
          class="page-link"
          href="https://github.com/bryonsigawin"
          target="_blank"
          on:mouseenter={() => animateOnHover(false)}
          on:mouseleave={() => animateOnHover(true)}
          >github
        </a>
      </div>
    </main>
  </div>
</div>

<style>
  .freeze {
    width: 100vw;
    height: 100vh;

    overflow: hidden;
  }

  .freeze .layout {
    overflow: unset !important;
    opacity: 0;
  }

  .layout {
    position: relative;
    z-index: 2;

    display: grid;
    grid-template-columns: 47.5vw 1fr;
    align-items: center;

    min-height: 100vh;
    padding: 0 1rem;

    overflow: hidden;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 4rem;
    margin-top: 10rem;

    transform: translate(calc(var(--shift-x)), calc(var(--shift-y)));
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
    .layout {
      display: block;
    }

    main {
      padding: 0 1rem;
      margin-top: 90vw;
    }

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
