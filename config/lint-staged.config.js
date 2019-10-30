const ESLINT_CONFIG = './config/.eslintrc.js'
const ESLINT_IGNORE = '.eslintignore'
const PRETTIER_IGNORE = '.prettierignore'

/**
 * @see https://github.com/okonet/lint-staged#readme
 * @type {Object<string, string[]>}
 */
const config = {
  '*.{js,jsx,ts,tsx}': [
    `eslint --config ${ESLINT_CONFIG} --ignore ${ESLINT_IGNORE} --fix`,
    'git add',
  ],
  '*.{css,gql,graphql,htm,html,json,less,md,mdx,s[ac]ss,toml,yaml,yml}': [
    `prettier --ignore ${PRETTIER_IGNORE} --write`,
    'git add',
  ],
}

module.exports = config
