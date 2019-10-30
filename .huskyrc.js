const scripts = (...arr) => arr.join(' && ')

/**
 * @see https://github.com/typicode/husky#readme
 * @type {Object<string, string>}
 */
const hooks = {
  'pre-commit': scripts(
    'yarn type-check',
    'lint-staged',
  ),
}

module.exports = { hooks }
