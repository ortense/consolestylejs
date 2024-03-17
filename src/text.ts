const boldCode = '\x1b[1m'
const dimCode = '\x1b[2m'
const italicCode = '\x1b[3m'
const underlineCode = '\x1b[4m'
const strikeCode  = '\x1b[9m'
const boldResetCode = '\x1b[22m'
const italicResetCode = '\x1b[23m'
const underlineResetCode = '\x1b[24m'
const strikeResetCode = '\x1b[29m'

/**
 * bold - apply style to string
 * @param {string} s 
 * @returns {string} inputed string with bold style
 */
export function bold (s: string): string {
  return `${boldCode}${s}${boldResetCode}`
}
/**
 * dim - apply style to string
 * @param {string} s 
 * @returns {string} inputed string with dim style
 */
export function dim (s: string): string {
  return `${dimCode}${s}${boldResetCode}`
}
/**
 * italic - apply style to string
 * @param {string} s 
 * @returns {string} inputed string with italic style
 */
export function italic (s: string): string {
  return `${italicCode}${s}${italicResetCode}`
}
/**
 * underline - apply style to string
 * @param {string} s 
 * @returns {string} inputed string with underline style
 */
export function underline (s: string): string {
  return `${underlineCode}${s}${underlineResetCode}`
}
/**
 * strike - apply style to string
 * @param {string} s 
 * @returns {string} inputed string with strike style
 */
export function strike (s: string): string {
  return `${strikeCode}${s}${strikeResetCode}`
}
