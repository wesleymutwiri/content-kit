import adapter from '@sveltejs/adapter-netlify';
import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			split: false
		}),
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};

export default config;
