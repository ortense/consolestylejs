![consolestyle demo gif](https://raw.githubusercontent.com/ortense/consolestyle/main/media/consolestyle.jpg)

# @ortense/consolestyle

[![install size](https://packagephobia.com/badge?p=@ortense/consolestyle)](https://packagephobia.com/result?p=@ortense/consolestyle) [![Coverage Status](https://coveralls.io/repos/github/ortense/consolestyle/badge.svg?branch=github-actions)](https://coveralls.io/github/ortense/consolestyle?branch=github-actions)

ConsoleStyle is a lightweight package that allows you to style your console output with ease, adding colors, backgrounds, and various text styles to enhance your command-line experience.


## Install

Pick your favorite package manager.

```sh
npm install @ortense/consolestyle  # npm
yarn add  @ortense/consolestyle    # yarn
pnpm add @ortense/consolestyle     # pnpm
bun add @ortense/consolestyle      # bun
```

## Usage

You can use the fluent api of `style` function.

```ts
import {style} from '@ortense/consolestyle'

const message = style('Hello there! 👋').cyan().italic()
  .emptyLine()
  .newLine('Are u tired of boring console outputs?').inverse()
  .emptyLine()
  .newLine('✨ Now u can easily create fun console messages! 🦄').magenta().bold()

console.log(message.toString())
```

Alternatively, you can choose specific functions to apply styles to your console output.

```ts
import {green, underline} from '@ortense/consolestyle'

const message = underline(green('Simplicity is sophistication 🍃'))

console.log(message)
```

## Key Features

- Easily style your console output with a fluent API.
- Apply a wide range of text colors, backgrounds, and styles.
- Enhance your command-line interface with vibrant and visually appealing messages.

### Available styles

- `red()`: Apply red text color.
- `green()`: Apply green text color.
- `yellow()`: Apply yellow text color.
- `blue()`: Apply blue text color.
- `magenta()`: Apply magenta text color.
- `cyan()`: Apply cyan text color.
- `bgRed()`: Apply red background color.
- `bgGreen()`: Apply green background color.
- `bgYellow()`: Apply yellow background color.
- `bgBlue()`: Apply blue background color.
- `bgMagenta()`: Apply magenta background color.
- `bgCyan()`: Apply cyan background color.
- `inverse()`: Apply inverted colors
- `bold()`: Apply bold text style.
- `dim()`: Apply dim text style.
- `italic()`: Apply italic text style.
- `underline()`: Apply underline text style.
- `strike()`: Apply strike-through text style.


## License

This package is licensed under the MIT License. See the LICENSE file for details.
