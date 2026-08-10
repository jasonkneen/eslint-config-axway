import { defineConfig } from 'eslint/config';
import pluginNodeTest from 'eslint-node-test';

export default defineConfig({
	name: 'axway/+node-test',
	extends: [
		pluginNodeTest.configs.unopinionated
	],
	rules: {
		// node-test rules
		'node-test/no-only-test': 'warn'
	}
});
