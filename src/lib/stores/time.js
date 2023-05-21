import { derived } from 'svelte/store';
import { mapLinear } from 'three/src/math/MathUtils';

import { createTimeTracker } from './creators/crate-time-tracker';

export const currentTime = createTimeTracker();
export const enableNightLights = derived(currentTime, ({ hours }) => hours > 18 || hours < 5);
export const isNight = derived(currentTime, ({ hours }) => hours > 20 || hours < 5);

export const clockHands = derived(
  currentTime,
  ($time) => {
    const { hours: _hours, minutes, seconds } = $time;

    // ensure hours is a value between 0 - 12
    const hours = _hours > 12 ? _hours - 12 : _hours;

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
