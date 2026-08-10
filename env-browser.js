import { defineConfig } from 'eslint/config';
import globals from 'globals';

import axwayRecommended from './index.js';

const { browser } = globals;

export default defineConfig({
	name: 'axway/env-browser',
	extends: [
		axwayRecommended
	],
	languageOptions: {
		globals: browser
	}
});
