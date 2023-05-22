import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

const files = ['**/*.{js,jsx,mjs,cjs,ts,tsx}']

//? https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules:
export const reactRules = [
  {
    files,
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
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
