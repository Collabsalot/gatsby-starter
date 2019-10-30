/**
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = {
  name: 'Steve Austin',
}

module.exports = {
  plugins: require('./gatsby/gatsby-config-plugins'),
  siteMetadata,
}
