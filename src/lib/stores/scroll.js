import Lenis from '@studio-freight/lenis';
import { writable } from 'svelte/store';

const createSmoothScroll = () => {
	const { subscribe, set } = writable(null);

	return {
		subscribe,
		initialize: () => {
			const lenis = new Lenis();

			lenis.on('scroll', (e) => {
				set(e);
			});

			// immediately emit an event get scroll position after a page refresh
			lenis.emit('scroll');

			const raf = requestAnimationFrame(function animate(time) {
				lenis.raf(time);
				requestAnimationFrame(animate);
			});

			return () => cancelAnimationFrame(raf);
		}
	};
};

export const smoothScroll = createSmoothScroll();
