/**
 * @interface Stringifiable
 * @description represents any object that implements the toString() method
 */
export interface Stringifiable {
  toString(): string
}

/**
 * @interface ConsoleStyle
 * @description Represent a builder for styled strings
 */
export interface ConsoleStyle extends Stringifiable {
  /** Apply red text color to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  red: () => ConsoleStyle
  /** Apply green text color to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  green: () => ConsoleStyle
  /** Apply yellow text color to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  yellow: () => ConsoleStyle
  /** Apply blue text color to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  blue: () => ConsoleStyle
  /** Apply magenta text color to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  magenta: () => ConsoleStyle
  /** Apply cyan text color to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  cyan: () => ConsoleStyle
  /** Apply red background style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  bgRed: () => ConsoleStyle
  /** Apply green background style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  bgGreen: () => ConsoleStyle
  /** Apply yellow background style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  bgYellow: () => ConsoleStyle
  /** Apply blue background style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  bgBlue: () => ConsoleStyle
  /** Apply mageta background style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  bgMagenta: () => ConsoleStyle
  /** Apply cyan background style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  bgCyan: () => ConsoleStyle
  /** Adds inverted colo style to current liner
   * @method
   * @returns {ConsoleStyle}
   */
  inverse: () => ConsoleStyle
  /** Adds bold text style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  bold: () => ConsoleStyle
  /** Apply text in "dim" style style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  dim: () => ConsoleStyle
  /** Apply italic text style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  italic: () => ConsoleStyle
  /** Apply underlined text style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  underline: () => ConsoleStyle
  /** Apply strikethrough text style to current line.
   * @method
   * @returns {ConsoleStyle}
   */
  strike: () => ConsoleStyle
  /** Apply a new line with the provided text.
   * @method
   * @returns {ConsoleStyle}
   * @param {Stringifiable} s - The text to be added as a new line.
   */
  newLine: (s: Stringifiable) => ConsoleStyle
  /** Adds an empty line.
   * @method
   * @returns {ConsoleStyle}
   * @returns {Pick<ConsoleStyle, 'newLine' | 'emptyLine' | 'toString'>} A ConsoleStyle without color/style methods.
   */
  emptyLine: () => Pick<ConsoleStyle, 'newLine' | 'emptyLine' | 'toString'>
  /** Parse to string
   * @method
   * @returns {string} - The styled string
   */
  toString: () => string
}

export type Context = {
  value: string
  lines: string[]
}

export type TestCase = {
  name: string
  input: string
  expected: string
  act: (input: string) => string
}

