import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "logs/**",
      "allure-results/**",
      "allure-report/**",
      "src/config/wdio.conf.js",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      sourceType: "module", // 🔥 тут зміна
      globals: {
        ...globals.node,
        ...globals.mocha,
        $: "readonly",
        $$: "readonly",
        browser: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "class-methods-use-this": "off",
      "arrow-parens": "off",
      "prefer-arrow-callback": "off",
      "func-names": "off",
      "object-curly-newline": "off",
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
]);
