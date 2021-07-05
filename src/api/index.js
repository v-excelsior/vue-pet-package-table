import JSD from './instance/jsdelivr'
import AS from './instance/algoliasearch'

import { staticOptions, extendedAttributes } from './constatns'

import { preparePackageInfo } from '@/utils/responce'

const API = {
  findPackages: async (queryString = '', page = 0) => {
    const options = { ...staticOptions, page }

    return await AS.search(queryString, options).then(r => r.hits)
  },

  findPackage: async packageName => {
    const options = {
      ...staticOptions,
      attributesToRetrieve: extendedAttributes,
      hitsPerPage: 1,
    }

    const result = await AS.search(packageName, options).then(r => r.hits[0])

    return preparePackageInfo(result)
  },

  getPackageJSDInfo: packageName => {
    return JSD.get(packageName).then(r => r.data)
  },
}

export default API