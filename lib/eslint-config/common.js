"use strict";

const OFF = 0;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
  rules: {
    // common rules
  },
};
