import js from '@eslint/js'

//? https://eslint.org/docs/latest/rules:
export const eslintRules = [
  js.configs.recommended,
  {
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
