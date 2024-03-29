module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier', 'react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  overrides: [
    {
      files: ['src/stories/**/*.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off'
      }
    }
  ]
}
