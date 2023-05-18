import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: seqPreprocessor([preprocess(), preprocessThrelte()]),
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),

    /**
     * Temporary while this fix gets pushed
     * https://github.com/threlte/threlte/issues/374
     */
    alias: {
      ['three/examples/jsm/objects/GroundProjectedEnv']: 'src/threlte_fix'
    }
  }
};

export default config;
