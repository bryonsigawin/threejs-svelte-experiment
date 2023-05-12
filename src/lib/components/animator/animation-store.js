import { writable } from 'svelte/store';

export const entryComplete = writable(false);
export const cameraPan = writable({ value: 0 });
export const cursorScale = writable({ value: 0 });
