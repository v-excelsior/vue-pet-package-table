import { staticOptions as apiOptions } from '../../api/constatns'
import { transformToReadableText } from '@/utils/string'

export const tableHeaders = apiOptions.attributesToRetrieve.map(attr => ({
  text : transformToReadableText(attr),
  value: attr,
}))