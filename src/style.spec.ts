import { describe, test, expect } from 'vitest'
import { style } from './style.ts'
import type { TestCase } from './types.ts'

describe('style functions', () => {
  style('Hello there! 👋').cyan().bold().underline()
    .newLine('Are u tired of boring console outputs? 🥱').bgMagenta().italic()
    .emptyLine()
    .newLine('Now u can easily create fun console messages! 🦄').magenta().underline()
    .toString()

  const cases: TestCase[] = [
    {
      name: 'style.red',
      input: 'text with style',
      expected: '\x1b[31mtext with style\x1b[39m',
      act: input => style(input).red().toString()
    },
    {
      name: 'style.green',
      input: 'text with style',
      expected: '\x1b[32mtext with style\x1b[39m',
      act: input => style(input).green().toString()
    },
    {
      name: 'style.yellow',
      input: 'text with style',
      expected: '\x1b[33mtext with style\x1b[39m',
      act: input => style(input).yellow().toString()
    },
    {
      name: 'style.blue',
      input: 'text with style',
      expected: '\x1b[34mtext with style\x1b[39m',
      act: input => style(input).blue().toString()
    },
    {
      name: 'style.magenta',
      input: 'text with style',
      expected: '\x1b[35mtext with style\x1b[39m',
      act: input => style(input).magenta().toString()
    },
    {
      name: 'style.cyan',
      input: 'text with style',
      expected: '\x1b[36mtext with style\x1b[39m',
      act: input => style(input).cyan().toString()
    },
    {
      name: 'style.bgRed',
      input: 'text with style',
      expected: '\x1b[41mtext with style\x1b[49m',
      act: input => style(input).bgRed().toString()
    },
    {
      name: 'style.bgGreen',
      input: 'text with style',
      expected: '\x1b[42mtext with style\x1b[49m',
      act: input => style(input).bgGreen().toString()
    },
    {
      name: 'style.bgYellow',
      input: 'text with style',
      expected: '\x1b[43mtext with style\x1b[49m',
      act: input => style(input).bgYellow().toString()
    },
    {
      name: 'style.bgBlue',
      input: 'text with style',
      expected: '\x1b[44mtext with style\x1b[49m',
      act: input => style(input).bgBlue().toString()
    },
    {
      name: 'style.bgMagenta',
      input: 'text with style',
      expected: '\x1b[45mtext with style\x1b[49m',
      act: input => style(input).bgMagenta().toString()
    },
    {
      name: 'style.bgCyan',
      input: 'text with style',
      expected: '\x1b[46mtext with style\x1b[49m',
      act: input => style(input).bgCyan().toString()
    },
    {
      name: 'style.inverse',
      input: 'text with style',
      expected: '\x1b[7mtext with style\x1b[27m',
      act: input => style(input).inverse().toString()
    },
    {
      name: 'style.bold',
      input: 'text with style',
      expected: '\x1b[1mtext with style\x1b[22m',
      act: input => style(input).bold().toString()
    },
    {
      name: 'style.dim',
      input: 'text with style',
      expected: '\x1b[2mtext with style\x1b[22m',
      act: input => style(input).dim().toString()
    },
    {
      name: 'style.italic',
      input: 'text with style',
      expected: '\x1b[3mtext with style\x1b[23m',
      act: input => style(input).italic().toString()
    },
    {
      name: 'style.underline',
      input: 'text with style',
      expected: '\x1b[4mtext with style\x1b[24m',
      act: input => style(input).underline().toString()
    },
    {
      name: 'style.strike',
      input: 'text with style',
      expected: '\x1b[9mtext with style\x1b[29m',
      act: input => style(input).strike().toString()
    },
    {
      name: 'style.newLine',
      input: 'text with style',
      expected: 'text with style\nnew line',
      act: input => style(input).newLine('new line').toString()
    },
    {
      name: 'style.emptyLine',
      input: 'text with style',
      expected: 'text with style\n',
      act: input => style(input).emptyLine().toString()
    },
  ]
  test.each(cases)('$name', ({ act, input, expected }) => {
    expect(act(input)).toBe(expected)
  })
})
