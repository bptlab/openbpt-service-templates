import js from "@eslint/js";

export default [
  js.configs.recommended, // Equivalent to "extends": "eslint:recommended"
  {
    languageOptions: {
      ecmaVersion: 2021, // Allows modern JavaScript features
      sourceType: "module", // Enables ES Modules (import/export)
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
