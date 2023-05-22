module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier', 'import', 'jsx-a11y', '@typescript-eslint', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        paths: './tsconfig.json',
        alwaysTryTypes: true,
      },
    },
    linkComponents: [
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
      { name: 'Link', linkAttribute: 'href' },
      { name: 'Button', linkAttribute: 'href' },
      { name: 'Typography', linkAttribute: 'href' },
    ],
  },
  globals: {
    React: true,
    JSX: true,
    __APP_VERSION__: true,
  },
  rules: {
    //? IMPORT RULES - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules:
    'import/extensions': ['error', 'never'],
    'import/first': 'error',
    'import/named': 'error',
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'internal', 'type', ['sibling', 'parent'], 'index', 'object'] },
    ],
    'import/prefer-default-export': 'off',
    //? SIMPLE-IMPORT-SORT RULES - https://github.com/lydell/eslint-plugin-simple-import-sort/
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    // // 'import/first': 'error',
    // 'import/newline-after-import': 'error',
    // 'import/no-duplicates': 'error',
    //? @TYPESCRIPT-ESLINT RULES - https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules:
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    // "@typescript-eslint/consistent-type-exports": "error",
    // "@typescript-eslint/consistent-type-imports": "error",
    //? JSX-A11Y RULES - https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules:
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      { handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'] },
    ],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
        allowExpressionValues: true,
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
        allowExpressionValues: true,
      },
    ],
    //? REACT RULES - https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules:
    'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.tsx'] }],
    'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true }],
    'react/no-unescaped-entities': 'off',
    'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never', propElementValues: 'always' }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/no-deprecated': 'error',
    'react/prop-types': 'error',
    //? ESLINT RULES - https://eslint.org/docs/latest/rules:
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
}

// import rules from './future/index.js'

// export default rules
