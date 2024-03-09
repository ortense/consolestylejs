import * as c from './colors.ts'
import * as t from './text.ts'
import type { Context, ConsoleStyle, Stringifiable } from './types.ts'

const EMPTY = ''

const join = (lines: string[]) => lines.join('\n')

const withStyle = ({ value, lines }: Context) => ({
  red: () => combine(c.red(value), lines),
  green: () => combine(c.green(value), lines),
  yellow: () => combine(c.yellow(value), lines),
  blue: () => combine(c.blue(value), lines),
  magenta: () => combine(c.magenta(value), lines),
  cyan: () => combine(c.cyan(value), lines),
  bgRed: () => combine(c.bgRed(value), lines),
  bgGreen: () => combine(c.bgGreen(value), lines),
  bgYellow: () => combine(c.bgYellow(value), lines),
  bgBlue: () => combine(c.bgBlue(value), lines),
  bgMagenta: () => combine(c.bgMagenta(value), lines),
  bgCyan: () => combine(c.bgCyan(value), lines),
  inverse: () => combine(c.inverse(value), lines),
  bold: () => combine(t.bold(value), lines),
  dim: () => combine(t.dim(value), lines),
  italic: () => combine(t.italic(value), lines),
  underline: () => combine(t.underline(value), lines),
  strike: () => combine(t.strike(value), lines),
})

const withLines = ({ value, lines }: Context) => ({
  newLine: (s: Stringifiable) => combine(s, [...lines, value]),
  emptyLine: () => withLines({ value: EMPTY, lines: [...lines, value] }),
  toString: () => join([...lines, value]),
})

const combine = (val: Stringifiable, lines: string[]): ConsoleStyle => {
  const value = val.toString()
  const  target = {}

  return Object.freeze(
    Object.assign(
      target,
      withLines({ value, lines }),
      withStyle({ value, lines }),
    ),
  )
}

/**
 * Creates a styled string builder
 * @function style
 * @param {Stringifiable} value - any object that implements the tostring() method including ConsoleStyle
 * @returns {ConsoleStyle} - A builder for styled strings.
 * @example
 * ```typescript
 * const message = style('Hello there! 👋').cyan().bold()
 * console.log(message.toString())
 * ```
 */
export const style = (value: Stringifiable): ConsoleStyle => combine(value, [])
