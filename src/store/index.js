import Vue from 'vue'
import Vuex from 'vuex'

import packages from './packages'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,

  state: {
    isModalVisible: false,
  },

  mutations: {
    toggleModalVisibility(state) {
      state.isModalVisible = !state.isModalVisible
    },
  },

  actions: {},

  modules: { packages },
})
