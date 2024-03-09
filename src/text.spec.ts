import { describe, test, expect } from 'vitest'
import * as t from './text.ts'
import type { TestCase } from './types.ts'

describe('text functions', () => {
  const cases: TestCase[] = [
    {
      name: 'text.bold',
      input: 'text with style',
      expected: '\x1b[1mtext with style\x1b[22m',
      act: t.bold
    },
    {
      name: 'text.dim',
      input: 'text with style',
      expected: '\x1b[2mtext with style\x1b[22m',
      act: t.dim
    },
    {
      name: 'text.italic',
      input: 'text with style',
      expected: '\x1b[3mtext with style\x1b[23m',
      act: t.italic
    },
    {
      name: 'text.underline',
      input: 'text with style',
      expected: '\x1b[4mtext with style\x1b[24m',
      act: t.underline
    },
    {
      name: 'text.strike',
      input: 'text with style',
      expected: '\x1b[9mtext with style\x1b[29m',
      act: t.strike
    },
  ]

  test.each(cases)('$name', ({ act, input, expected  }) => {
    expect(act(input)).toBe(expected)
  })
})
