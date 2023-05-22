import prettier from 'eslint-plugin-prettier'

//? PRETTIER RULES -
//?
//?
export const prettierRules = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      prettier,
    },
    rules: {
      ...prettier.configs.recommended.rules,
    },
  },
]
