<script>
  import { onMount } from 'svelte';
  import anime from 'animejs';
  import { mapLinear, lerp } from 'three/src/math/MathUtils';

  import {
    mouseRawPosition,
    cursorPosition,
    parallaxEnabled,
    parallaxShift,
    entryComplete,
    cameraPan,
    cursorScale
  } from './animation-store';

  let _cameraPan = $cameraPan;
  let _cursorScale = $cursorScale;

  let raf;
  let listenersActivated;

  const calculateParallaxShift = (mousePosition) => {
    const normalizedX = mapLinear(mousePosition.x, 0, window.innerWidth, 1, -1);
    const normalizedY = mapLinear(mousePosition.y, 0, window.innerHeight, 1, -1);

    return { x: normalizedX, y: normalizedY };
  };

  const trackMouse = (e) => {
    const position = {
      x: e.clientX,
      y: e.clientY
    };

    if ($mouseRawPosition.x === -1 && $mouseRawPosition.y === -1) {
      cursorPosition.update((values) => ({ ...values, current: position }));
      parallaxShift.update((values) => ({ ...values, next: calculateParallaxShift(position) }));
    }

    mouseRawPosition.set(position);
  };

  $: if ($parallaxEnabled && !listenersActivated) {
    listenersActivated = true;

    /**
     * Setup mouse listener for parallax
     */
    window.addEventListener('mousemove', trackMouse);

    /**
     * Setup parallaxing
     */
    raf = requestAnimationFrame(function animate() {
      if ($entryComplete) {
        /**
         * mouse cursor
         */
        cursorPosition.update(({ next, current }) => ({
          current: {
            x: lerp(current.x, next.x, 0.05),
            y: lerp(current.y, next.y, 0.05)
          },
          next: {
            x: $mouseRawPosition.x,
            y: $mouseRawPosition.y
          }
        }));

        /**
         * scene shifting
         */
        parallaxShift.update(({ next, current }) => ({
          current: {
            x: lerp(current.x, next.x, 0.01),
            y: lerp(current.y, next.y, 0.01)
          },
          next: calculateParallaxShift($mouseRawPosition)
        }));
      }

      requestAnimationFrame(animate);
    });
  }

  onMount(() => {
    if (window.innerWidth > 512) parallaxEnabled.set(true);

    /**
     * Configure entry animation
     */
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

    return () => {
      if ($parallaxEnabled) {
        window.removeEventListener('mousemove', trackMouse);
        cancelAnimationFrame(raf);
      }
    };
  });
</script>
