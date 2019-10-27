/**
 * @see https://www.gatsbyjs.org/docs/babel/
 * @see https://babeljs.io/docs/en/configuration
 * @see https://babeljs.io/docs/en/config-files
 */
const config = (api) => {
  api.cache.using(() => process.env.NODE_ENV === 'development')

  return {
    /**
     * @see https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
     * @see https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
     */
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
    ],

    /**
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/babel-preset-gatsby
     * @see https://www.gatsbyjs.org/docs/browser-support/
     */
    presets: ['babel-preset-gatsby'],
  }
}

module.exports = config
