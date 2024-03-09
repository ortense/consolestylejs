const boldCode = '\x1b[1m'
const dimCode = '\x1b[2m'
const italicCode = '\x1b[3m'
const underlineCode = '\x1b[4m'
const strikeCode  = '\x1b[9m'
const boldResetCode = '\x1b[22m'
const italicResetCode = '\x1b[23m'
const underlineResetCode = '\x1b[24m'
const strikeResetCode = '\x1b[29m'

export const bold = (s: string) => `${boldCode}${s}${boldResetCode}`
export const dim = (s: string) => `${dimCode}${s}${boldResetCode}`
export const italic = (s: string) => `${italicCode}${s}${italicResetCode}`
export const underline = (s: string) => `${underlineCode}${s}${underlineResetCode}`
export const strike = (s: string) => `${strikeCode}${s}${strikeResetCode}`
