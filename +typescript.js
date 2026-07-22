import pluginTypescript from '@typescript-eslint/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig({
	name: 'axway/+typescript',
	plugins: {
		'@typescript-eslint': pluginTypescript
	},
	extends: [
		pluginTypescript.configs['flat/eslint-recommended'],
		pluginTypescript.configs['flat/recommended']
	],
	rules: {
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'warn',
		'@typescript-eslint/no-unused-vars': [ 'warn', {
			argsIgnorePattern: '^_.+',
			caughtErrorsIgnorePattern: '^_.+'
		} ]
	}
});
