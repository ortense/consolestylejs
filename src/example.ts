import {style} from './index.ts'

const message = style('Hey there! 👋').cyan().italic()
  .emptyLine()
  .newLine('Are u tired of boring console outputs?').inverse()
  .emptyLine()
  .newLine('✨ Now u can easily create fun console messages! 🦄').magenta().bold()

console.log(message.toString())
