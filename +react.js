import pluginEslintReact from '@eslint-react/eslint-plugin';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginStylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig({
	name: 'axway/+react',
	plugins: {
		'jsx-a11y': pluginJsxA11y,
		'@stylistic': pluginStylistic
	},
	extends: [
		pluginEslintReact.configs.recommended
	],
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true
			}
		}
	},
	rules: {
		// jsx a11y rules
		'jsx-a11y/anchor-has-content': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/aria-role': [ 'error', { ignoreNonDom: false } ],
		'jsx-a11y/aria-props': 'error',
		'jsx-a11y/aria-proptypes': 'error',
		'jsx-a11y/aria-unsupported-elements': 'error',
		'jsx-a11y/alt-text': [ 'error', {
			elements: [ 'img', 'object', 'area', 'input[type=\'image\']' ],
			img: [],
			object: [],
			area: [],
			'input[type=\'image\']': []
		} ],
		'jsx-a11y/img-redundant-alt': 'error',
		'jsx-a11y/label-has-for': [
			'error', {
				components: [ 'label' ],
				required: {
					every: [ 'id' ]
				}
			}
		],
		'jsx-a11y/mouse-events-have-key-events': 'error',
		'jsx-a11y/no-access-key': 'error',
		'jsx-a11y/no-onchange': 'off',
		'jsx-a11y/interactive-supports-focus': 'error',
		'jsx-a11y/role-has-required-aria-props': 'error',
		'jsx-a11y/role-supports-aria-props': 'error',
		'jsx-a11y/tabindex-no-positive': 'error',
		'jsx-a11y/heading-has-content': [ 'error', { components: [ '' ] } ],
		'jsx-a11y/html-has-lang': 'error',
		'jsx-a11y/lang': 'error',
		'jsx-a11y/no-distracting-elements': [ 'error', {
			elements: [ 'marquee', 'blink' ]
		} ],
		'jsx-a11y/scope': 'error',
		'jsx-a11y/click-events-have-key-events': 'error',
		'jsx-a11y/no-noninteractive-element-interactions': [ 'error', {
			handlers: [
				'onClick',
				'onMouseDown',
				'onMouseUp',
				'onKeyPress',
				'onKeyDown',
				'onKeyUp'
			]
		} ],
		'jsx-a11y/accessible-emoji': 'error',
		'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
		'jsx-a11y/iframe-has-title': 'error',
		'jsx-a11y/no-autofocus': [ 'error', { ignoreNonDOM: true } ],
		'jsx-a11y/no-redundant-roles': 'error',
		'jsx-a11y/media-has-caption': [ 'error', {
			audio: [],
			video: [],
			track: []
		} ],
		'jsx-a11y/no-interactive-element-to-noninteractive-role': [ 'error', {
			tr: [ 'none', 'presentation' ]
		} ],
		'jsx-a11y/no-noninteractive-element-to-interactive-role': [ 'error', {
			ul: [ 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid' ],
			ol: [ 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid' ],
			li: [ 'menuitem', 'option', 'row', 'tab', 'treeitem' ],
			table: [ 'grid' ],
			td: [ 'gridcell' ]
		} ],
		'jsx-a11y/no-noninteractive-tabindex': [ 'error', {
			tags: [],
			roles: [ 'tabpanel' ]
		} ],
		'jsx-a11y/anchor-is-valid': [ 'error', {
			components: [ 'Link' ],
			specialLink: [ 'to' ],
			aspects: [ 'noHref', 'invalidHref', 'preferButton' ]
		} ],

		// @eslint-react overrides
		'@eslint-react/no-array-index-key': 'off',
		'@eslint-react/dom-no-find-dom-node': 'off',
		'@eslint-react/no-missing-key': 'off',

		// jsx formatting
		'jsx-quotes': [ 'error', 'prefer-double' ],
		'@stylistic/jsx-indent-props': [ 'warn', 'tab' ],
		'@stylistic/indent': [ 'warn', 'tab', { SwitchCase: 1 } ],
		'@stylistic/jsx-closing-bracket-location': [ 'error', 'line-aligned' ],
		'@stylistic/jsx-closing-tag-location': 'error',
		'@stylistic/jsx-curly-spacing': [ 'error', 'never', { allowMultiline: true } ],
		'@stylistic/jsx-max-props-per-line': [ 'error', { maximum: 1, when: 'multiline' } ],
		'@stylistic/jsx-pascal-case': [ 'error', { allowAllCaps: true, ignore: [] } ],
		'@stylistic/jsx-sort-props': [ 'off', {
			ignoreCase: true,
			callbacksLast: false,
			shorthandFirst: false,
			shorthandLast: false,
			noSortAlphabetically: false,
			reservedFirst: true
		} ],
		'@stylistic/jsx-wrap-multilines': [ 'error', {
			declaration: true,
			assignment: true,
			return: true,
			arrow: true
		} ],
		'@stylistic/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],
		'@stylistic/jsx-equals-spacing': [ 'error', 'never' ],
		'@stylistic/jsx-tag-spacing': [ 'error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never'
		} ]
	}
});
