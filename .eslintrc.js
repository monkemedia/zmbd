
module.exports = {
  root: true,
  env: {
    node: true,
    'jest': true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue'
  ],
  rules: {
    'space-before-function-paren': 'error',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
