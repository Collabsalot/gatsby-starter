/**
 * This file only configures things that differ from the default settings in v1.
 *
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @todo Put this in ./config if you can get that working with eslint-prettier.
 */
const config = {
  /**
   * Minimizes diffs and futzing, though can look a bit cluttered.
   *
   * @see https://prettier.io/docs/en/options.html#arrow-function-parentheses
   * @todo If a future version of Prettier enables a different setting for
   *   inline arrow functions, switch to it.
   * @type {string}
   */
  arrowParens: 'always',

  /**
   * Saves bytes, prevents a mess.
   *
   * @see https://prettier.io/docs/en/options.html#end-of-line
   * @type {string}
   */
  endOfLine: 'lf',

  /**
   * Shorter lines are more readable, but breaking up lines in the middle all
   * the time isn't great either, so this is a compromise. Try to write docs
   * with a print width of 80 though.
   *
   * @see https://prettier.io/docs/en/options.html#print-width
   * @todo If a future version of Prettier enables a different setting for docs,
   *   switch to it.
   * @type {number}
   */
  printWidth: 100,

  /**
   * In theory, this is the worst option to avoid annoying diffs; but in
   * practice, any given object will use either kebab-case or camelCase, but not
   * both.
   *
   * @see https://prettier.io/docs/en/options.html#quote-props
   * @type {string}
   */
  quoteProps: 'consistent',

  /**
   * Semicolons are almost entirely unnecessary, and clutter the code. Let them
   * be added at the start of the line on the rare occasion it's needed.
   *
   * @see https://prettier.io/docs/en/options.html#semicolons
   * @type {boolean}
   */
  semi: false,

  /**
   * Doesn't matter, so follow StandardJS.
   *
   * @see https://prettier.io/docs/en/options.html#quotes
   * @todo If a future version of Prettier enables using template quotes
   *   whenever possible, switch to that.
   * @type {boolean}
   */
  singleQuote: true,

  /**
   * Minimizes diffs and futzing, with no real downsides.
   *
   * @see https://prettier.io/docs/en/options.html#trailing-commas
   * @type {string}
   */
  trailingComma: 'all',
}

module.exports = config
