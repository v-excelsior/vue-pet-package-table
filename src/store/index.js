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
    toggleModalVisibility(state, forceValue) {
      console.log(state.isModalVisible)

      if (typeof forceValue !== 'undefined') {
        state.isModalVisible = forceValue
      } else {
        console.log('toggle')
        state.isModalVisible = !state.isModalVisible
      }
    },
  },

  actions: {},

  modules: { packages },
})
