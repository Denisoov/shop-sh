const defaultState = {
    token: null,
    banners: [],
    collections: [],
    detailOfCollection: [],
    remakeProduct: {
      idProduct: null,
      idCollection: null
    }
  }
  
  export const state = () => defaultState
  
  export const mutations = {
    SET_JWT_TOKEN(state, data) {
      state.token = data
    },
    SET_BANNERS(state, banners) {
      state.banners = banners;
    },
    SET_COLLECTIONS(state, collections) {
      state.collections = collections
    },
    SET_DETAIL_COLLECTION(state, collections) {
      state.detailOfCollection = collections
    },
    SET_REMAKE_PRODUCT(state, product) {
      state.remakeProduct.idProduct = product.id
      state.remakeProduct.idCollection = product.group_id
    }
  }
  
  export const actions = {
    // авторизация в админку
    async signIn({ commit }, dataForm) {
      try {
        const { data } = await this.$api.post('getToken', dataForm)

        this.$cookies.set('jwt_token', data.token)
  
        commit('SET_JWT_TOKEN', data.token)
      } catch (error) {
        console.log(error)
      }
    },
    
    // выход из админки
    exit() {
      try {
        this.$api.delete('user/dropToken')
        this.$cookies.remove('jwt_token')
  
      } catch (error) {
        console.log(error)
      }
    },

    // Получение всех баннеров
    async getAllBanners({ commit }) {
      try {
        
        const { data } = await this.$api.get('banner/show')

        commit('SET_BANNERS', data)

      } catch (error) {
        console.log(error)
      }
    },

    // Добавление нового баннера
    async loadNewBanner({ dispatch }, image) {
      try {
        await this.$api.post('banner/create', image)

        dispatch('getAllBanners')
      } catch (error) {
      }
    },

    // Удаление выбранного банера
    async deleteBanner({ dispatch }, idBanner) {
      try {
        await this.$api.delete(`banner/delete/${idBanner}`)
  
        dispatch('getAllBanners')
      } catch (error) {
        
      }
    },

    // Получение всех коллекций
    async getAllCollection({ commit }) {
      try {
        
        const { data } = await this.$api.get('group/show')

        commit('SET_COLLECTIONS', data)

      } catch (error) {
        console.log(error)
      }
    },

    // Создание коллекции
    async createNewCollection({ dispatch }, titleCollection) {
      try {
        await this.$api.post('group/create', titleCollection)

        dispatch('getAllCollection')
        
      } catch (error) {
        
      }
    },

    // удаление коллекции
    async deleteCollections({ dispatch }, idCollection) {
      try {
        await this.$api.delete(`group/delete/${idCollection}`)
  
        dispatch('getAllCollection')
      } catch (error) {
        
      }
    },

    // создание нового продукта
    async createNewProduct({ dispatch }, { formData, idCollection }) {
      try {
        await this.$api.post(`product/create/${idCollection}`, formData)
  
        dispatch('getProductsOfCollection', idCollection)
      } catch (error) {
        
      }
    },
    // получаем продукты конкретной коллекции
    async getProductsOfCollection({ commit }, idCollection) {
      try {
        
        const { data } = await this.$api.get(`group/showDetail/${idCollection}`)

        commit('SET_DETAIL_COLLECTION', data)

      } catch (error) {
        console.log(error)
      }
    },
    // удаляем выбранный продукт
    async deleteProduct({ dispatch }, { idProduct, idCollection}) {
      try {
        await this.$api.delete(`product/delete/${idProduct}`)
  
        dispatch('getProductsOfCollection', idCollection)
      } catch (error) {
        
      }
    },
  }
  
  