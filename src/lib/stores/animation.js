import { writable } from 'svelte/store';

import { createMouseTracker } from './creators/create-mouse-tracker';

export const mousePosition = createMouseTracker();

export const entryComplete = writable(false);
export const isProbablyMobile = writable(false);
