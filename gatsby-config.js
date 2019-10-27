const siteMetadata = {
  name: 'Steve Austin',
}

const plugins = [
  /**
   * @see https://www.gatsbyjs.org/packages/gatsby-plugin-ts/
   * @see https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/
   */
  {
    resolve: 'gatsby-plugin-ts',
    options: {
      /**
       * This cannot be in `src` or it will cause an infinite loop.
       */
      fileName: './@types/graphql.ts',

      /**
       * @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options
       */
      forkTsCheckerPlugin: {
        eslint: true,
      },

      /**
       * @see https://github.com/TypeStrong/ts-loader#options
       */
      tsLoader: {},
    },
  },
]

/**
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = {
  plugins,
  siteMetadata,
}

module.exports = config
