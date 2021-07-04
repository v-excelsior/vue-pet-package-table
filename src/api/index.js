import JSD from './instance/jsdelivr'
import AS from './instance/algoliasearch'

import { staticOptions } from './constatns'

const API = {
  findPackages: async (queryString = '', page = 0) => {
    const options = { ...staticOptions, page }

    return await AS.search(queryString, options).then(r => r.hits)
  },

  getPackageInfo: packageName => {
    return JSD.get(packageName).then(r => r.data)
  }
}

export default API