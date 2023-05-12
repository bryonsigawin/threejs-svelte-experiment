<script>
  import { entryComplete, cursorScale, cursorPosition, contentShift } from './animator/animation-store';
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
          {#each "Hey there, I'm Bryon Sigawin" as character}
            <span>
              {#if character === ' '}
                &nbsp;
              {:else}
                {character}
              {/if}</span
            >
          {/each}
        </h1>
        <h2 class="intro-line-2">
          {#each 'front-end developer with a penchant for ux and motion design.' as character}
            <span>
              {#if character === ' '}
                &nbsp;
              {:else}
                {character}
              {/if}</span
            >
          {/each}
        </h2>
      </div>
      <div class="page-links">
        <a class="page-link" href="/">about</a>
        <a class="page-link" href="/">resume</a>
        <a class="page-link" href="/">linkedin</a>
        <a class="page-link" href="/">github</a>
      </div>
    </main>
  </div>
</div>

<div
  class="cursor"
  style="--position-x: {$cursorPosition.current.x}px; --position-y: {$cursorPosition.current
    .y}px; --scale: {$cursorScale.value}"
/>

<style>
  .cursor {
    position: fixed;
    top: 0;
    left: 0;

    width: 15px;
    height: 15px;

    border-radius: 50%;
    background-color: white;

    pointer-events: none;

    transform: translate(calc(var(--position-x) - 50%), calc(var(--position-y) - 50%)) scale(var(--scale));
  }

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
    display: grid;
    grid-template-columns: 50vw 1fr;
    align-items: center;
    gap: 5rem;

    min-height: 100vh;
    overflow: hidden;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 10rem;

    margin-top: auto;
    margin-bottom: 10vh;

    transform: translate(calc(var(--shift-x)), calc(var(--shift-y)));
  }

  .intro-line-1 {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: -3px;
    font-style: italic;

    margin: 0;
    overflow: hidden;
  }

  .intro-line-2 {
    font-size: 1.25rem;
    font-weight: 200;

    margin: 0;
    overflow: hidden;
  }

  .intro-line-1 span,
  .intro-line-2 span {
    display: inline-block;
  }

  .page-links {
    display: flex;
    gap: 2rem;
  }

  .intro-line-1 span,
  .intro-line-2 span {
    display: inline-block;
  }

  .page-link {
    font-size: 0.95rem;
    font-weight: 200;

    color: rgb(219, 219, 219);
    text-decoration: none;
  }
</style>
