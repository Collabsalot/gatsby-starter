const scripts = (...arr) => arr.join(` && `)

/**
 * @see https://github.com/typicode/husky#readme
 * @type {Object<string, string>}
 */
const hooks = {
  'pre-commit': scripts(
    `yarn type-check`,
    `lint-staged`,
    `sort-package-json`,
  ),
}

module.exports = { hooks }
