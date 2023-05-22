import tscParser from '@typescript-eslint/parser'
import tsc from '@typescript-eslint/eslint-plugin'

const tscFiles = ['**/*.{ts,tsx}']

//? https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules:
export const typescriptRules = [
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
