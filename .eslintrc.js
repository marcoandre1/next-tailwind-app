/* eslint-disable no-undef */
module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // "plugin:jsx-a11y/recommended",
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
    // "plugin:prettier/react",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }], // Use our .prettierrc file as source
  },
};
