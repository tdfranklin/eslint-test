import eslintImport from 'eslint-plugin-import'
import importSort from 'eslint-plugin-simple-import-sort'

//? IMPORT RULES - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules:
//? SIMPLE-IMPORT-SORT RULES - https://github.com/lydell/eslint-plugin-simple-import-sort/
export const importRules = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      import: eslintImport,
      'simple-import-sort': importSort,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...eslintImport.configs.recommended.rules,
      // "import/extensions": ["error", "never"],
      // "import/first": "error",
      // "import/named": "error",
      // "import/order": [
      //   "error",
      //   { "groups": ["builtin", "external", "internal", "type", ["sibling", "parent"], "index", "object"] }
      // ],
      // "import/prefer-default-export": "off",
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
]
