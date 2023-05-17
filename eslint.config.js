import react from 'eslint-plugin-react'
import globals from 'globals'
import tscParser from '@typescript-eslint/parser'
import tsc from '@typescript-eslint/eslint-plugin'
import js from '@eslint/js'

const files = ['**/*.{js,jsx,mjs,cjs,ts,tsx}']
const tscFiles = ['**/*.{ts,tsx}']

//? Used to define any global variables that are predefined:
const globalRules = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
        __APP_VERSION__: true,
      },
    },
  },
]

//? https://eslint.org/docs/latest/rules:
const eslintRules = [
  js.configs.recommended,
  {
    files,
    rules: {
      'no-return-assign': ['error', 'except-parens'],
      'arrow-parens': ['error', 'as-needed'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['+', '-', '*', '/', '%', '**'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: false,
        },
      ],
      'no-redeclare': 'error',
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-var': 'error',
      'one-var': ['error', { initialized: 'never' }],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
        },
      ],
      'require-await': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
    },
  },
]

//? https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules:
const reactRules = [
  {
    files,
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/require-default-props': ['error', { functions: 'defaultArguments' }],
      'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.tsx'] }],
      'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true }],
      'react/no-unescaped-entities': 'off',
      'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never', propElementValues: 'always' }],
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-undef': ['error', { allowGlobals: true }],
      'react/no-deprecated': 'error',
      'react/prop-types': 'error',
    },
  },
]

//? https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules:
const tscRules = [
  {
    files: tscFiles,
    languageOptions: {
      parser: tscParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsc,
    },
    rules: {
      ...tsc.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
]

export default [
  ...globalRules,
  ...eslintRules,
  ...reactRules,
  ...tscRules,
]
