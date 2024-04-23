/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next"],
  root: true,
  ignorePatterns: [
    "node_modules",
    ".next",
    ".turbo",
    "out",
    "build",
    "dist",
    "public",
  ],
};
