import API from '../../api'

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
      const packageInfo  = await API.getPackageInfo(state.currentPackageName)

      commit('setPackageInfo', packageInfo)
    },
  },
}
