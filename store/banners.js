const defaultState = {
  banners: [],
};

export const state = () => defaultState;

export const mutations = {
  SET_BANNERS(state, banners) {
    state.banners = banners;
  },
};

export const actions = {
  async getAllBanners({ commit }) {
    await commit(
      'SET_LOADING', {
        typeLoading: 'isLoadingMainPage',
        status: true
    }, { root: true })
    const { data } = await this.$api.get('banner/show')

    await commit('SET_BANNERS', data)

    await commit(
      'SET_LOADING', {
        typeLoading: 'isLoadingMainPage',
        status: false
    }, { root: true })
  }
};

export const getters = {};
