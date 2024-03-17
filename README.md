# @ortense/consolestyle

![consolestyle demo in vscode terminal](https://raw.githubusercontent.com/ortense/consolestylejs/main/media/banner.png)

[![Coverage Status](https://coveralls.io/repos/github/ortense/consolestylejs/badge.svg?branch=main)](https://coveralls.io/github/ortense/consolestylejs?branch=main) ![npm bundle size](https://img.shields.io/bundlephobia/min/%40ortense%2Fconsolestyle) [![GitHub License](https://img.shields.io/github/license/mashape/apistatus?branch=main&label=License&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)](https://github.com/ortense/consolestylejs/blob/main/LICENSE)


A lightweight package weighing just 18.8 kB that allows you to style your console output with ease, adding colors, backgrounds, and various text styles to enhance your command-line experience.


## Install

Pick your favorite package manager.

```sh
npm install @ortense/consolestyle  # npm
yarn add  @ortense/consolestyle    # yarn
pnpm add @ortense/consolestyle     # pnpm
bun add @ortense/consolestyle      # bun
deno add @ortense/consolestyle     # deno from jsr.io
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
More details in the [complete documentation](https://ortense.github.io/consolestylejs/).

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
