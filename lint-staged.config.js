/**
 * @see https://github.com/okonet/lint-staged#readme
 * @todo Put this in ./config
 * @type {Object<string, string[]>}
 */
const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'git add'],
  '*.{css,gql,graphql,html,json,md,mdx,sass,scss,toml,yaml,yml}': ['prettier --write', 'git add'],
}

module.exports = config
