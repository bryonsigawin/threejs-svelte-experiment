import { writable } from 'svelte/store';

export const createTimeTracker = () => {
  const { subscribe, set, update } = writable({ full: '', hours: 0, minutes: 0, seconds: 0 });

  let ticker = setInterval(function tick() {
    const date = new Date();

    set({
      full: date,
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    });
  }, 1000);

  return {
    subscribe,
    set: (...args) => {
      clearInterval(ticker);
      set(...args);
    },
    update: (...args) => {
      clearInterval(ticker);
      update(...args);
    },
    stop: () => {
      clearInterval(ticker);
    }
  };
};
