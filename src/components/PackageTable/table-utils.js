import { staticOptions as apiOptions } from '../../api/constatns'
import { capitalizeSentence,breakCamelCase } from "@/utils/string";

const transformToHeader = text => capitalizeSentence(breakCamelCase(text))

export const tableHeaders = apiOptions.attributesToRetrieve.map(attr => ({
  text : transformToHeader(attr),
  value: attr
}))