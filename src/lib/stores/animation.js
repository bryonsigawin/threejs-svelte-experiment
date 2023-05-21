import { writable } from 'svelte/store';
import { mapLinear } from 'three/src/math/MathUtils';

const createMouseTracker = () => {
  const { subscribe, update } = writable({
    tracking: false,
    x: -1,
    y: -1,
    normalized: {
      x: 0,
      y: 0
    }
  });

  const trackMouse = (e) => {
    update((current) => ({
      ...current,
      x: e.clientX,
      y: e.clientY,
      normalized: {
        x: mapLinear(e.clientX, 0, window.innerWidth, -1, 1),
        y: mapLinear(e.clientY, 0, window.innerHeight, 1, -1)
      }
    }));
  };

  return {
    subscribe,
    track: () => {
      update((current) => ({ ...current, tracking: true }));
      window.addEventListener('mousemove', trackMouse);
    },
    stopTracking: () => {
      update((current) => ({ ...current, tracking: false }));
      window.removeEventListener('mousemove', trackMouse);
    }
  };
};

export const mousePosition = createMouseTracker();

export const entryComplete = writable(false);
export const isProbablyMobile = writable(false);
