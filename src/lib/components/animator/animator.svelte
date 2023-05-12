<script>
  import anime from 'animejs';
  import { onMount } from 'svelte';
  import { entryComplete, cameraPan, cursorScale } from './animation-store';

  let _cameraPan = $cameraPan;
  let _cursorScale = $cursorScale;

  onMount(() => {
    const timeline = anime.timeline();

    timeline
      .add({
        targets: _cameraPan,
        value: [4, 0],
        duration: 6000,
        delay: 500,
        easing: 'easeInOutQuart',
        update: () => {
          cameraPan.set(_cameraPan);
        },
        complete: () => {
          entryComplete.set(true);
        }
      })
      .add({
        targets: _cursorScale,
        value: [0, 1],
        duration: 1200,
        easing: 'easeOutQuart',
        update: () => {
          cursorScale.set(_cursorScale);
        }
      })
      .add(
        {
          targets: '.intro-line-1 span',
          translateY: ['100%', 0],
          duration: 1100,
          delay: anime.stagger(20),
          easing: 'easeInOutQuint'
        },
        6500
      )
      .add(
        {
          targets: '.intro-line-2 span',
          translateY: ['100%', 0],
          duration: 700,
          delay: anime.stagger(5),
          easing: 'easeInOutQuint'
        },
        6700
      )
      .add(
        {
          targets: '.page-links',
          opacity: [0, 1],
          duration: 1000,
          delay: anime.stagger(80),
          easing: 'linear'
        },
        6900
      );
  });
</script>
