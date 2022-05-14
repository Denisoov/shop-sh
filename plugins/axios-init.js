export default ({ $axios, redirect, store, $cookies }, inject) => {

    const api = $axios.create()
    api.setBaseURL('http://127.0.0.1:8000/api/')


    api.onRequest(config => {
      if (config.url === 'getToken') return

      config.headers.Authorization = `Bearer ${$cookies.get('jwt_token')}`
    })

    api.onError(error => {
      if (error.response) {
      const { data } = error.response
      
      store.commit('OPEN_SNACKBAR', {
          isShowSnackbar: true,
          message: data.error,
      })
      }
  })

    inject('api', api)
}