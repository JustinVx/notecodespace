import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import footnotes from 'remark-footnotes';
import headings from 'remark-autolink-headings';
import unwrapImages from 'remark-unwrap-images';
import slug from 'remark-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
			layout: './src/components/project.svelte',
			remarkPlugins: [footnotes, slug, headings, unwrapImages]
		})
	],
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
