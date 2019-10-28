/**
 * Not using `gatsby-plugin-eslint`, as it's outdated and doesn't really
 * accomplish anything that hasn't been taken care of already. Feel free to look
 * into it for yourself: https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/
 *
 * @see https://eslint.org/docs/user-guide/configuring
 */
const config = {
  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-environments
   * @type {Object.<string, boolean>}
   */
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  /**
   * Keep the `prettier` ones in order, after everything else.
   *
   * @see https://eslint.org/docs/user-guide/configuring#extending-configuration-files
   * @see https://github.com/prettier/eslint-config-prettier
   * @see https://github.com/standard/eslint-config-standard-react
   * @see https://github.com/standard/eslint-config-standard-with-typescript
   * @see https://github.com/benmosher/eslint-plugin-import
   * @see https://github.com/evcohen/eslint-plugin-jsx-a11y
   * @see https://github.com/prettier/eslint-plugin-prettier
   * @type {string[]}
   */
  extends: [
    'standard-react',
    'standard-with-typescript',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/react',
    // 'prettier/standard',
  ],

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-globals
   * @type {Object.<string, any>}
   */
  globals: {
    __PATH_PREFIX__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-parser
   * @see https://github.com/babel/babel-eslint
   * @type {string}
   */
  parser: 'babel-eslint',

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-parser-options
   */
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.json',
    sourceType: 'module',
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#configuring-plugins
   * @see https://github.com/evcohen/eslint-plugin-jsx-a11y
   * @see https://github.com/prettier/eslint-plugin-prettier
   * @see https://github.com/yannickcr/eslint-plugin-react
   * @see https://github.com/standard/eslint-plugin-standard
   * @type {string[]}
   */
  plugins: ['jsx-a11y', 'react'],

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    // 'prettier/prettier': ['error', require('.prettierrc.js')],
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#adding-shared-settings
   */
  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      /**
       * @type {string[]}
       */
      files: ['*.ts', '*.tsx'],

      /**
       * @see https://eslint.org/docs/user-guide/configuring#extending-configuration-files
       * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
       * @see https://github.com/prettier/eslint-config-prettier
       * @type {string[]}
       */
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // 'prettier/@typescript-eslint',
      ],

      /**
       * @see https://eslint.org/docs/user-guide/configuring#specifying-parser
       * @see https://www.npmjs.com/package/@typescript-eslint/parser
       * @type {string}
       */
      parser: '@typescript-eslint/parser',

      /**
       * @see https://eslint.org/docs/user-guide/configuring#configuring-plugins
       * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
       * @type {string[]}
       */
      plugins: ['@typescript-eslint'],

      /**
       * @see https://eslint.org/docs/user-guide/configuring#configuring-rules
       * @see https://github.com/yannickcr/eslint-plugin-react
       * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
       * @type {Object.<string, any>}
       */
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
      },
    },
  ],
}

module.exports = config
