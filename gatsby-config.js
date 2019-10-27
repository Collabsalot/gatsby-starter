/**
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = {
  plugins: [
    /**
     * @see https://babeljs.io/docs/en/babel-plugin-transform-typescript
     * @see https://babeljs.io/docs/en/babel-preset-typescript
     */
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        allExtensions: true,
        allowNamespaces: true,
        isTSX: true,
      },
    },
  ],
}

module.exports = config
