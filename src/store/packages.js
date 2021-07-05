import API from '../api'

export default {
  namespaced: true,

  state     : {
    currentPackageName: '',
    packageInfo       : {},
  },

  mutations : {
    setCurrentPackageName(state, packageName) {
      state.currentPackageName = packageName
    },

    setPackageInfo(state, packageInfo) {
      state.packageInfo = packageInfo
    },
  },

  actions   : {
    async loadPackageInfo({commit }, packageName){
      const packageInfo  = await API.getPackageInfo(packageName)

      commit('setPackageInfo', packageInfo)
    },
  },
}
