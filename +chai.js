import { defineConfig } from 'eslint/config';
import pluginChaiExpect from 'eslint-plugin-chai-expect';
import pluginChaiFriendly from 'eslint-plugin-chai-friendly';
import globals from 'globals';

const { chai } = globals;

export default defineConfig({
	name: 'axway/+chai',
	plugins: {
		'chai-expect': pluginChaiExpect,
		'chai-friendly': pluginChaiFriendly
	},
	languageOptions: {
		globals: chai
	},
	rules: {
		'no-unused-expressions': 'off',
		'chai-friendly/no-unused-expressions': [ 'error', { allowShortCircuit: true, allowTernary: true } ],

		// chai rules
		'chai-expect/missing-assertion': 'error',
		'chai-expect/terminating-properties': 'warn',
	}
});
