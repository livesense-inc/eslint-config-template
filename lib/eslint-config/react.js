"use strict";

const OFF = 0;
const ERROR = 2;

module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: ["plugin:react/recommended", "prettier/react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // rules for react files
  },
};
