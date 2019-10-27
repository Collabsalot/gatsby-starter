const ESLINT_CONFIG = './config/.eslintrc.js'
const ESLINT_IGNORE = '.eslintignore'
const PRETTIER_CONFIG = './config/.prettierrc.js'
const PRETTIER_IGNORE = '.prettierignore'

/**
 * @see https://github.com/okonet/lint-staged#readme
 * @todo Put this in ./config
 * @type {Object<string, string[]>}
 */
const config = {
  '*.{js,jsx,ts,tsx}': [
    `eslint --config ${ESLINT_CONFIG} --ignore ${ESLINT_IGNORE} --fix`,
    'git add',
  ],
  '*.{css,gql,graphql,html,json,md,mdx,sass,scss,toml,yaml,yml}': [
    `prettier --config ${PRETTIER_CONFIG} --ignore ${PRETTIER_IGNORE} --write`,
    'git add',
  ],
}

module.exports = config
