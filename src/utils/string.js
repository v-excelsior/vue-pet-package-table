export const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
export const capitalizeSentence = s => s.split(' ').map(capitalize).join(' ')

/* TODO: Not for production -> I know what you think - but that was funny :) */
export const breakCamelCase = s => s
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([0-9])([A-Z])/g, '$1 $2')
    .replace(/([a-z])([0-9])/g, '$1 $2')
    .trim()

export const replaceDotsWithSpaces = s => s.replace(/\./g, ' ')

export const isLink = s => typeof s === 'string' && s.startsWith('http')

export const transformToReadableText = text => capitalizeSentence(breakCamelCase(replaceDotsWithSpaces(text)))