const redCode = '\x1b[31m'
const greenCode = '\x1b[32m'
const yellowCode = '\x1b[33m'
const blueCode = '\x1b[34m'
const magentaCode = '\x1b[35m'
const cyanCode = '\x1b[36m'
const defaultColorCode = '\x1b[39m'
const bgRedCode = '\x1b[41m'
const bgGreenCode = '\x1b[42m'
const bgYellowCode = '\x1b[43m'
const bgBlueCode = '\x1b[44m'
const bgMagentaCode = '\x1b[45m'
const bgCyanCode = '\x1b[46m'
const bgDefaultColor = '\x1b[49m'
const inverseCode = '\x1b[7m'
const inverseResetCode = '\x1b[27m'

export const red = (s: string) => `${redCode}${s}${defaultColorCode}`
export const green = (s: string) => `${greenCode}${s}${defaultColorCode}`
export const yellow = (s: string) => `${yellowCode}${s}${defaultColorCode}`
export const blue = (s: string) => `${blueCode}${s}${defaultColorCode}`
export const magenta = (s: string) => `${magentaCode}${s}${defaultColorCode}`
export const cyan = (s: string) => `${cyanCode}${s}${defaultColorCode}`
export const bgRed = (s: string) => `${bgRedCode}${s}${bgDefaultColor}`
export const bgGreen = (s: string) => `${bgGreenCode}${s}${bgDefaultColor}`
export const bgYellow = (s: string) => `${bgYellowCode}${s}${bgDefaultColor}`
export const bgBlue = (s: string) => `${bgBlueCode}${s}${bgDefaultColor}`
export const bgMagenta = (s: string) => `${bgMagentaCode}${s}${bgDefaultColor}`
export const bgCyan = (s: string) => `${bgCyanCode}${s}${bgDefaultColor}`
export const inverse = (s: string) => `${inverseCode}${s}${inverseResetCode}`
