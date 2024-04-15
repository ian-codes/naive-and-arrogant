import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { importAssets } from 'svelte-preprocess-import-assets';


export default {
	preprocess: [importAssets()],

	kit: {
		paths: {
			base: '/naive-and-arrogant',
			relative: false
		},

		alias: {
			"$t": "./src/locales/translations.json",
			"$stores": "./src/stores"
		},

		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),

		preprocess: vitePreprocess()
	}
};