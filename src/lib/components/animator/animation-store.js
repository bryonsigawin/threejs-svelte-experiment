import { derived, writable, readable } from 'svelte/store';
import { mapLinear } from 'three/src/math/MathUtils';

export const entryComplete = writable(false);
export const cameraPan = writable({ value: 0 });
export const cursorScale = writable({ value: 0 });

/**
 * mouse position holders
 */

const lerpedMousePosition = {
  current: { x: 0, y: 0 },
  next: { x: 0, y: 0 }
};

export const mouseRawPosition = writable({ x: -1, y: -1 });

/**
 * Custom cursor position
 */
export const cursorPosition = writable({ ...lerpedMousePosition });

/**
 * Parallax effect
 */
export const parallaxShift = writable({ ...lerpedMousePosition });

// shifting of the 3d world
export const worldShift = derived(parallaxShift, ({ current }) => ({
  x: current.x * -0.2,
  y: current.y * 0.2
}));

// shifting of the content
export const contentShift = derived(parallaxShift, ({ current }) => ({
  x: current.x * 30,
  y: current.y * 30
}));

export const isNight = writable(false);

/**
 * Clock movements
 */
export const time = readable({ hour: 0, minute: 0 }, function start(set) {
  const interval = setInterval(() => {
    const date = new Date();
    const hour = date.getHours();

    set({
      hour: hour > 12 ? hour - 12 : hour,
      minute: date.getMinutes()
    });
  }, 1000 * 30);

  return function stop() {
    clearInterval(interval);
  };
});

export const clockHands = derived(
  time,
  ($time) => {
    const { hour, minute } = $time;

    return {
      hour: mapLinear(hour, 0, 12, 0, -Math.PI * 2),
      minute: mapLinear(minute, 0, 60, 0, -Math.PI * 2)
    };
  },
  { hour: 0, minute: 0 }
);
