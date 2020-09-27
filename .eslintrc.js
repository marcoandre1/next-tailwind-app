module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use our .prettierrc file as source
  },
};
