/**
 * @see https://github.com/typicode/husky#readme
 * @todo Put this in ./config
 * @type {Object<string, string>}
 */
const hooks = {
  'pre-commit': 'yarn type-check && lint-staged',
}

module.exports = { hooks }
