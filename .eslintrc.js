module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    /**
     * @info General
     */
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    /**
     * @info React
     */
    'airbnb',
    'airbnb/hooks',
    'plugin:testing-library/react',
    /**
     * @info Prettier
     */
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    /**
     * @info General eslint plugins
     */
    'jest',
    'jest-dom',
    'prettier',
    'promise',
    'unicorn',
    /**
     * @info React eslint plugins
     */
    'testing-library',
    'better-styled-components',
  ],
  rules: {
    /**
     * @info eslint-plugin-import
     */
    'import/prefer-default-export': 'off',
    /**
     * @info better-styled-components rules
     */
    'better-styled-components/sort-declarations-alphabetically': 'error',
    /**
     * @info fix errors
     */
    'testing-library/no-await-sync-events': 'off',
    /**
     * @info unicorn rules
     */
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        checkProperties: true,
      },
    ],
    /**
     * @info react rules
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
    jest: {
      version: 'detect',
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', '*.config.js'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ],
};
