/**
 * @see https://github.com/Collabsalot/gatsby-plugin-react-helmet-async
 */
const pluginReactHelmetAsync = {
  resolve: 'gatsby-plugin-react-helmet-async',
}

/**
 * This plugin also includes `gatsby-plugin-graphql-codegen`.
 *
 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-ts/
 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/
 */
const pluginTs = {
  resolve: 'gatsby-plugin-ts',
  options: {
    /** This cannot be in `src/` or it will cause an infinite loop. */
    fileName: '@types/graphql.ts',

    /** @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options */
    forkTsCheckerPlugin: {
      eslint: true,
    },

    /** @see https://github.com/TypeStrong/ts-loader#options */
    tsLoader: {},
  },
}

/**
 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
 * @see https://developers.google.com/web/fundamentals/web-app-manifest/
 * @see https://developer.mozilla.org/en-US/docs/Web/Manifest
 */
const pluginManifest = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: 'gatsby-starter',
    short_name: 'starter',
    description: 'The bestest websitiest starter',
    categories: ['music', 'lifestyle'],
    // App appearance
    start_url: '/',
    background_color: '#ffffff',
    theme_color: '#f6c957',
    display: 'standalone',
    icon: 'src/assets/icon.png', // Relative to the root of the site
    // Language
    lang: 'en',
    dir: 'auto',
    localize: [],
  },
}

/**
 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-offline/
 * @see https://gatsby.dev/offline
 */
const pluginOffline = {
  resolve: 'gatsby-plugin-offline',
  options: {},
}

/**
 * Be careful changing the order of plugins in the array, as it is sometimes
 * important. If plugins are in a sub-array, the order *is* important.
 *
 * @see https://www.gatsbyjs.org/docs/plugins
 */
const plugins = [
  pluginReactHelmetAsync,
  pluginTs,
  ...[pluginManifest, pluginOffline],
]

module.exports = plugins
