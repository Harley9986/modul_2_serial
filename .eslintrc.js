module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: [2, "always"],
    "no-console": "warn",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "comma-dangle": ["warn", "always-multiline"],
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" },
    ],
    "import/no-duplicates": ["warn"],
    "react/prop-types": [1],
  },
};
