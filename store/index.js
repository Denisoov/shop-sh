const defaultState = {
    snackbar: {
      isShowSnackbar: false,
      message: null,
    },
  }
  
  export const state = () => defaultState
  
  export const mutations = {
    OPEN_SNACKBAR({ snackbar }, data) {
      snackbar = Object.assign(snackbar, data)
    },
    CLOSE_SNACKBAR(state) {
      state.snackbar.isShowSnackbar = false
    },
  }
  
  export const actions = {}
  
  export const getters = {}
  