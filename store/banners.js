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
    const { data } = await this.$api.get('banner/show')

    commit('SET_BANNERS', data)
  }
};

export const getters = {};
