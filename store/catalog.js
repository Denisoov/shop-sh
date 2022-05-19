const defaultState = {
    catalog: [],
    detailProduct: {}
  };
  
  export const state = () => defaultState;
  
  export const mutations = {
    SET_CATALOG(state, catalog) {
      state.catalog = catalog;
    },
    SET_DETAIL_PRODUCT(state, detailProduct) {
      state.detailProduct = detailProduct
    }
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
    },

    async getDetailProduct({ commit }, idProduct) {
      try {
        await commit(
          'SET_LOADING', {
            typeLoading: 'isLoadingCatalogPage',
            status: true
        }, { root: true })

        const { data } = await this.$api.get(`product/showDetail/${idProduct}`)

        commit('SET_DETAIL_PRODUCT', data)

        await commit(
          'SET_LOADING', {
            typeLoading: 'isLoadingCatalogPage',
            status: false
        }, { root: true })
      } catch (error) {
        
      }
    }
  };
  
  export const getters = {};
  