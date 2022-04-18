/*
 * @Autor: GeekMzy
 * @Date: 2022-04-14 13:58:57
 * @LastEditors: GeekMzy
 * @LastEditTime: 2022-04-14 13:58:57
 * @FilePath: \vite_vue3_ts\.prettier.js
 * @Author: desktop-1llkr2o
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}
