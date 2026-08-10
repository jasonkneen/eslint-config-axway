import { defineConfig } from 'eslint/config';
import pluginMocha from 'eslint-plugin-mocha';
import globals from 'globals';

const { mocha } = globals;

export default defineConfig({
	name: 'axway/+mocha',
	plugins: {
		mocha: pluginMocha
	},
	languageOptions: {
		globals: mocha
	},
	rules: {
		// mocha rules
		'mocha/handle-done-callback': 'error',
		'mocha/no-exclusive-tests': 'warn',
		'mocha/no-identical-title': 'error',
		'mocha/valid-test-title': 'off'
	}
});
