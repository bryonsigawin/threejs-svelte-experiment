import { derived, writable, readable } from 'svelte/store';
import { mapLinear } from 'three/src/math/MathUtils';

export const entryComplete = writable(false);
export const cameraPan = writable({ value: 0 });
export const cursorScale = writable({ value: 0 });

export const isProbablyMobile = writable(false);

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
export const parallaxEnabled = derived(isProbablyMobile, (value) => !value);
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
export const time = readable({ hours: 0, minutes: 0, seconds: 0 }, function start(set) {
  const interval = setInterval(() => {
    const date = new Date();
    const hours = date.getHours();

    set({
      hours: hours > 12 ? hours - 12 : hours,
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    });
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

export const clockHands = derived(
  time,
  ($time) => {
    const { hours, minutes, seconds } = $time;

    const hoursOffset = mapLinear(minutes, 0, 60, 0, (Math.PI * 2) / 12);
    const minutesOffset = mapLinear(seconds, 0, 60, 0, (Math.PI * 2) / 12);

    return {
      hours: mapLinear(hours + hoursOffset, 0, 12, 0, -Math.PI * 2),
      minutes: mapLinear(minutes + minutesOffset, 0, 60, 0, -Math.PI * 2),
      seconds: mapLinear(seconds, 0, 60, 0, -Math.PI * 2)
    };
  },
  { hours: 0, minutes: 0, seconds: 0 }
);
