const LINT_STAGED_CONFIG = './config/lint-staged.config.js'

const scripts = (...arr) => arr.join(' && ')

/**
 * @see https://github.com/typicode/husky#readme
 * @type {Object<string, string>}
 */
const hooks = {
  'pre-commit': scripts(
    'yarn type-check',
    `lint-staged --config ${LINT_STAGED_CONFIG}`,
  ),
}

module.exports = { hooks }
