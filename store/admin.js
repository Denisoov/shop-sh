const defaultState = {
    token: null,
    banners: [],
  }
  
  export const state = () => defaultState
  
  export const mutations = {
    SET_JWT_TOKEN(state, data) {
      state.token = data
    },
    SET_BANNERS(state, banners) {
      state.banners = banners;
    },
  }
  
  export const actions = {
    async signIn({ commit }, dataForm) {
      try {
        const { data } = await this.$api.post('getToken', dataForm)

        this.$cookies.set('jwt_token', data.token)
  
        commit('SET_JWT_TOKEN', data.token)
      } catch (error) {
        console.log(error)
      }
    },
    
    exit() {
      try {
        this.$api.delete('user/dropToken')
        this.$cookies.remove('jwt_token')
  
      } catch (error) {
        console.log(error)
      }
    },
    async getAllBanners({ commit }) {
      try {
        
        const { data } = await this.$api.get('banner/show')

        commit('SET_BANNERS', data)

      } catch (error) {
        console.log(error)
      }
    },

    async loadNewBanner({ dispatch }, image) {
      try {
        const formData = new FormData();
        formData.append('image', image)

        await this.$api.post('banner/create', formData, {
          headers: {
            'Content-Type': 'blob'
          } 
        })

        dispatch('getAllBanners')
      } catch (error) {
      }
    },

    async deleteBanner({ dispatch }, idBanner) {
      try {
        await this.$api.delete(`banner/delete/${idBanner}`)
  
        dispatch('getAllBanners')
      } catch (error) {
        
      }
    },
  }
  
  export const getters = {}
  