import

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
    async setPackageInfo({commit, state }){
      const packageInfo  = async getPackage(state.currentPackageName)

      commit('setPackageInfo', packageInfo)
    },
  },
}
