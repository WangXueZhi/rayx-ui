module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 11,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    camelcase: 0,
    'no-var': 0, // 禁用var，用let和const代替
    quotes: [1, 'single'], // 引号类型 `` "" ''
    '@typescript-eslint/no-var-requires': 0
  }
}
