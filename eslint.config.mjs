import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import unicorn from 'eslint-plugin-unicorn'
import nodePlugin from 'eslint-plugin-n'
import globals from 'globals'

const customRules = {
	'no-useless-constructor': 'warn',
	'prefer-object-spread': 'warn',
	'no-template-curly-in-string': 'off',
	'newline-before-return': 'off',
	'padding-line-between-statements': 'off',
	'quote-props': ['error', 'consistent'],
	'capitalized-comments': 'off',
	'arrow-body-style': 'off',
	'comma-dangle': 'off',
	'complexity': 'off',
	'max-depth': 'off',
	'object-shorthand': 'off',
	'operator-linebreak': 'off',
	'object-curly-spacing': 'off',
	'unicorn/prevent-abbreviations': 'off',
	'unicorn/empty-brace-spaces': 'off',
	'unicorn/no-this-assignment': 'off',
	'unicorn/prefer-ternary': 'off',
	'unicorn/no-array-for-each': 'warn',
	'unicorn/prefer-logical-operator-over-ternary': 'off',
	'unicorn/prefer-module': 'off',
	'unicorn/prefer-node-protocol': 'off',
	'unicorn/prefer-spread': 'off',
	'unicorn/switch-case-braces': 'off',
	'unicorn/no-null': 'off',
	'unicorn/text-encoding-identifier-case': 'off',
	'unicorn/no-instanceof-builtins': 'off',
	'unicorn/prefer-at': 'off',
	'unicorn/prefer-switch': 'off',
	'unicorn/no-immediate-mutation': 'off',
	'unicorn/no-useless-undefined': 'off',
	'unicorn/consistent-existence-index-check': 'off'
}

const styleRules = {
	indent: ['error', 'tab', {SwitchCase: 1}],
	semi: ['error', 'never'],
	quotes: ['error', 'single', {avoidEscape: true}],
	'no-unexpected-multiline': 'error'
}

const tsCustomRules = {
	'@typescript-eslint/consistent-indexed-object-style': 'off',
	'@typescript-eslint/consistent-type-definitions': 'off',
	'@typescript-eslint/consistent-type-imports': 'off',
	'@typescript-eslint/naming-convention': 'off',
	'@typescript-eslint/no-explicit-any': 'off'
}

export default tseslint.config(
	{
		ignores: [
			'coverage/**',
			'docs/**',
			'docsrc/**',
			'scripts/**',
			'node_modules/**'
		]
	},
	js.configs.recommended,
	unicorn.configs.recommended,
	{
		files: ['**/*.js'],
		...nodePlugin.configs['flat/recommended-script'],
		languageOptions: {
			sourceType: 'commonjs',
			globals: {
				...globals.node
			}
		},
		rules: {
			...nodePlugin.configs['flat/recommended-script'].rules,
			...styleRules,
			...customRules,
			'n/file-extension-in-import': 'off',
			'n/prefer-global/process': 'off',
			// Allow `_`-prefixed identifiers as intentional throwaways (e.g. `_ => {}`).
			'no-unused-vars': ['error', {
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_'
			}]
		}
	},
	{
		files: ['**/*.ts'],
		extends: [tseslint.configs.recommended],
		rules: {
			...styleRules,
			...customRules,
			...tsCustomRules
		}
	},
	{
		files: ['test/**/*.{js,ts}', 'config/jest.setup.js'],
		languageOptions: {
			globals: {
				...globals.jest
			}
		}
	}
)
