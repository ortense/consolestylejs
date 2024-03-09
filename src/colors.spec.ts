import { describe, test, expect } from 'vitest'
import * as c from './colors'
import type { TestCase } from './types'

describe('color functions', () => {
  const cases: TestCase[] = [
    {
      name: 'colors.red',
      input: 'text with color',
      expected: '\x1b[31mtext with color\x1b[39m',
      act: c.red,
    },
    {
      name: 'colors.green',
      input: 'text with color',
      expected: '\x1b[32mtext with color\x1b[39m',
      act: c.green,
    },
    {
      name: 'colors.yellow',
      input: 'text with color',
      expected: '\x1b[33mtext with color\x1b[39m',
      act: c.yellow,
    },
    {
      name: 'colors.blue',
      input: 'text with color',
      expected: '\x1b[34mtext with color\x1b[39m',
      act: c.blue,
    },
    {
      name: 'colors.magenta',
      input: 'text with color',
      expected: '\x1b[35mtext with color\x1b[39m',
      act: c.magenta,
    },
    {
      name: 'colors.cyan',
      input: 'text with color',
      expected: '\x1b[36mtext with color\x1b[39m',
      act: c.cyan,
    },
    {
      name: 'colors.bgRed',
      input: 'text with color',
      expected: '\x1b[41mtext with color\x1b[49m',
      act: c.bgRed,
    },
    {
      name: 'colors.bgGreen',
      input: 'text with color',
      expected: '\x1b[42mtext with color\x1b[49m',
      act: c.bgGreen,
    },
    {
      name: 'colors.bgYellow',
      input: 'text with color',
      expected: '\x1b[43mtext with color\x1b[49m',
      act: c.bgYellow,
    },
    {
      name: 'colors.bgBlue',
      input: 'text with color',
      expected: '\x1b[44mtext with color\x1b[49m',
      act: c.bgBlue,
    },
    {
      name: 'colors.bgMagenta',
      input: 'text with color',
      expected: '\x1b[45mtext with color\x1b[49m',
      act: c.bgMagenta,
    },
    {
      name: 'colors.bgCyan',
      input: 'text with color',
      expected: '\x1b[46mtext with color\x1b[49m',
      act: c.bgCyan,
    },
    {
      name: 'colors.inverse',
      input: 'text with color',
      expected: '\x1b[7mtext with color\x1b[27m',
      act: c.inverse,
    },
  ]

  test.each(cases)('$name', ({ act, input, expected  }) => {
    expect(act(input)).toBe(expected)
  })
})
