import * as c from './colors.ts'
import * as t from './text.ts'
import type { Context, ConsoleStyle, Stringifiable } from './types.ts'

const EMPTY = ''

const join = (lines: string[]): string => lines.join('\n')

const withStyle = ({ value, lines }: Context): Omit<ConsoleStyle, 'newLine' | 'emptyLine' | 'toString' > => ({
  red: (): ConsoleStyle => combine(c.red(value), lines),
  green: (): ConsoleStyle => combine(c.green(value), lines),
  yellow: (): ConsoleStyle => combine(c.yellow(value), lines),
  blue: (): ConsoleStyle => combine(c.blue(value), lines),
  magenta: (): ConsoleStyle => combine(c.magenta(value), lines),
  cyan: (): ConsoleStyle => combine(c.cyan(value), lines),
  bgRed: (): ConsoleStyle => combine(c.bgRed(value), lines),
  bgGreen: (): ConsoleStyle => combine(c.bgGreen(value), lines),
  bgYellow: (): ConsoleStyle => combine(c.bgYellow(value), lines),
  bgBlue: (): ConsoleStyle => combine(c.bgBlue(value), lines),
  bgMagenta: (): ConsoleStyle => combine(c.bgMagenta(value), lines),
  bgCyan: (): ConsoleStyle => combine(c.bgCyan(value), lines),
  inverse: (): ConsoleStyle => combine(c.inverse(value), lines),
  bold: (): ConsoleStyle => combine(t.bold(value), lines),
  dim: (): ConsoleStyle => combine(t.dim(value), lines),
  italic: (): ConsoleStyle => combine(t.italic(value), lines),
  underline: (): ConsoleStyle => combine(t.underline(value), lines),
  strike: (): ConsoleStyle => combine(t.strike(value), lines),
})

const withLines = ({ value, lines }: Context): Pick<ConsoleStyle, 'newLine' | 'emptyLine' | 'toString'> => ({
  newLine: (s: Stringifiable): ConsoleStyle => combine(s, [...lines, value]),
  emptyLine: (): Pick<ConsoleStyle, 'newLine' | 'emptyLine' | 'toString'> => 
    withLines({ value: EMPTY, lines: [...lines, value] }),
  toString: (): string => join([...lines, value]),
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
export function style (value: Stringifiable): ConsoleStyle {
  return combine(value, [])
}
