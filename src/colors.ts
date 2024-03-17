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

/** 
 * red - apply style to string
 * @param {string} s
 * @return {string} input string in red
 */
export function red (s: string): string {
  return `${redCode}${s}${defaultColorCode}`
}
/** 
 * green - apply style to string
 * @param {string} s
 * @return {string} input string in green
 */
export function green (s: string): string {
  return `${greenCode}${s}${defaultColorCode}`
}
/** 
 * yellow - apply style to string
 * @param {string} s
 * @return {string} input string in yellow
 */
export function yellow (s: string): string {
  return `${yellowCode}${s}${defaultColorCode}`
}
/** 
 * blue - apply style to string
 * @param {string} s
 * @return {string} input string in blue
 */
export function blue (s: string): string {
  return `${blueCode}${s}${defaultColorCode}`
}
/** 
 * magenta - apply style to string
 * @param {string} s
 * @return {string} input string in magenta
 */
export function magenta (s: string): string {
  return `${magentaCode}${s}${defaultColorCode}`
}
/** 
 * cyan - apply style to string
 * @param {string} s
 * @return {string} input string in cyan
 */
export function cyan (s: string): string {
  return `${cyanCode}${s}${defaultColorCode}`
}
/** 
 * bgRed - apply style to string
 * @param {string} s
 * @return {string} input string with red background
 */
export function bgRed (s: string): string {
  return `${bgRedCode}${s}${bgDefaultColor}`
}
/** 
 * bgGreen - apply style to string
 * @param {string} s
 * @return {string} input string with green background
 */
export function bgGreen (s: string): string {
  return `${bgGreenCode}${s}${bgDefaultColor}`
}
/** 
 * bgYellow - apply style to string
 * @param {string} s
 * @return {string} input string with yellow background
 */
export function bgYellow (s: string): string {
  return `${bgYellowCode}${s}${bgDefaultColor}`
}
/** 
 * bgBlue - apply style to string
 * @param {string} s
 * @return {string} input string with blue background
 */
export function bgBlue (s: string): string {
  return `${bgBlueCode}${s}${bgDefaultColor}`
}
/** 
 * bgMagenta - apply style to string
 * @param {string} s
 * @return {string} input string with magenta background
 */
export function bgMagenta (s: string): string {
  return `${bgMagentaCode}${s}${bgDefaultColor}`
}
/** 
 * bgCyan - apply style to string
 * @param {string} s
 * @return {string} input string with cyan background
 */
export function bgCyan (s: string): string {
  return `${bgCyanCode}${s}${bgDefaultColor}`
}
/** 
 * inverse - apply style to string
 * @param {string} s
 * @return {string} input string in inverted color
 */
export function inverse (s: string): string {
  return `${inverseCode}${s}${inverseResetCode}`
}
