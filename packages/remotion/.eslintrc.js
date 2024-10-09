module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: "./",
  },
};
