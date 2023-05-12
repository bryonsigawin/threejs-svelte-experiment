import { derived, writable } from 'svelte/store';

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

export const cursorPosition = writable({ ...lerpedMousePosition });

export const parallaxShift = writable({ ...lerpedMousePosition });
export const worldShift = derived(parallaxShift, ({ current }) => ({
  x: current.x * -0.2,
  y: current.y * 0.2
}));

export const contentShift = derived(parallaxShift, ({ current }) => ({
  x: current.x * 30,
  y: current.y * 30
}));

export const isNight = writable(false);
