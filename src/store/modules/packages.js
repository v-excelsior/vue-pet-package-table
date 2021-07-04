export default {
  namespaced: true,

  state     : {
    currentPackageName: '',
    packageInfo       : {},
  },

  mutations : {
    setPackageName(state, packageName) {
      state.currentPackageName = packageName
    },

    deleteRecipe(state, recipeToDelete) {
      state.recipes = state.recipes.filter(
        recipe => recipe.key !== recipeToDelete.key
      )
    },
  },

  actions   : {
    async fetchRecipes({ commit }) {
      commit('changeLoadingState', true, { root: true })
      let recipes = await recipesService.fetchAllRecipes()
      commit('updateRecipes', recipes)
      commit('changeLoadingState', false, { root: true })
    },
    async restoreRecipes({ dispatch }) {
      await recipesService.restoreRecipes()
      await dispatch('fetchRecipes')
    },
  },
  //Now that getter no needed
  getters: {
    getRecipeByName: state => name => {
      return state.recipes.find(recipes => recipes.name === name)
    },
  },
}
