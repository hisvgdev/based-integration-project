import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
	{
		ignores: ['dist'],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			parser: tsParser,
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'jsx-a11y': jsxA11y,
			prettier: prettier,
			import: importPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'prettier/prettier': [
				'warn',
				{
					singleQuote: true,
					parser: 'flow',
				},
			],
			...jsxA11y.configs.recommended.rules,
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						['internal', 'parent', 'sibling', 'index'],
					],
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
					'newlines-between': 'always',
				},
			],
		},
	},
];
