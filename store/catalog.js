const defaultState = {
    catalog: [],
  };
  
  export const state = () => defaultState;
  
  export const mutations = {
    SET_CATALOG(state, catalog) {
      state.catalog = catalog;
    },
  };
  
  export const actions = {
    async getAllCatalog({ commit }) {
      await commit(
        'SET_LOADING', {
          typeLoading: 'isLoadingCatalogPage',
          status: true
      }, { root: true })
      const { data } = await this.$api.get('group/show')

      const catalog = data.filter((item) => item.products.length > 0)

      await commit('SET_CATALOG', catalog)
  
      await commit(
        'SET_LOADING', {
          typeLoading: 'isLoadingCatalogPage',
          status: false
      }, { root: true })
    }
  };
  
  export const getters = {};
  