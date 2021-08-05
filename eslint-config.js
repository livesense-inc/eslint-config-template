"use strict";
module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.js"],
      extends: ["./lib/eslint-config/common.js"],
    },
    {
      files: ["*.jsx"],
      extends: [
        "./lib/eslint-config/common.js",
        "./lib/eslint-config/react.js",
      ],
    },
    {
      files: ["*.ts"],
      extends: [
        "./lib/eslint-config/common.js",
        "./lib/eslint-config/typescript.js",
      ],
    },
    {
      files: ["*.tsx"],
      extends: [
        "./lib/eslint-config/common.js",
        "./lib/eslint-config/react.js",
        "./lib/eslint-config/typescript.js",
      ],
    },
  ],
};
