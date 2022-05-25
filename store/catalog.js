const defaultState = {
    catalog: [],
    detailProduct: {},
    recommendationProducts: [],
    filter: {
      name: 'Все',
      id: 'all',
    }
  };
  
  export const state = () => defaultState;
  
  export const mutations = {
    SET_CATALOG(state, catalog) {
      state.catalog = catalog;
    },
    SET_DETAIL_PRODUCT(state, detailProduct) {
      state.detailProduct = detailProduct
    },
    SET_RECOMMENDATION_PRODUCTS(state, products) {
      state.recommendationProducts = products
    },
    SET_FILTER(state, filter) {
      state.filter = filter
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

    async getDetailProduct({ commit, dispatch }, idProduct) {
      try {
        await commit(
          'SET_LOADING', {
            typeLoading: 'isLoadingCatalogPage',
            status: true
        }, { root: true })

        const { data } = await this.$api.get(`product/showDetail/${idProduct}`)
        await commit('SET_DETAIL_PRODUCT', data)

        await dispatch('getRecommendationProducts', idProduct)

        await commit(
          'SET_LOADING', {
            typeLoading: 'isLoadingCatalogPage',
            status: false
        }, { root: true })
      } catch (error) {
        
      }
    },
    async getRecommendationProducts({ commit }, idProduct) {
      try {
        const { data } = await this.$api.get(`product/showGroupByProduct/${idProduct}`)

        commit('SET_RECOMMENDATION_PRODUCTS', data.products)
      } catch (error) {}
    },
  };
  
  export const getters = {
    filterCatalog: (state) => {
      if (state.filter.id === 'all') {
        let result = []

        state.catalog.forEach(element => {
          result = result.concat(element.products)
        });

        return result
      }
      else {
        let result = []

        result = state.catalog.find(
          (item) => item.id === state.filter.id)

        return result.products
      }
    }
  };
  