const defaultState = {
    snackbar: {
      isShowSnackbar: false,
      message: null,
    },
    isLoadingMainPage: false,
    isLoadingCatalogPage: false
  }
  
  export const state = () => defaultState
  
  export const mutations = {
    OPEN_SNACKBAR({ snackbar }, data) {
      snackbar = Object.assign(snackbar, data)
    },
    CLOSE_SNACKBAR(state) {
      state.snackbar.isShowSnackbar = false
    },
    SET_LOADING(state, { typeLoading, status }) {
      state[typeLoading] = status
    }
  }
  
  export const actions = {}
  
  export const getters = {}
  