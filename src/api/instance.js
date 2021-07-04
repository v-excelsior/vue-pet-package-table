import algoliasearch from 'algoliasearch/lite'

import { staticOptions } from './constatns'

const client = algoliasearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e');
const index = client.initIndex('npm-search')

export const search = async (queryString = '', page = 0) => {
  const options = { ...staticOptions, page }

  return await index.search(queryString, options).then(r => r.hits)
}