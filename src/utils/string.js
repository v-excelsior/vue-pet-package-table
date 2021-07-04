export const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
export const capitalizeSentence = s => s.split(' ').map(capitalize).join(' ')

export const breakCamelCase = s => s.replace(/([A-Z])/g, ' $1').trim()
