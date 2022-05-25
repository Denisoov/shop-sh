export default ({ $axios, redirect, store, $cookies }, inject) => {

    const api = $axios.create()
    api.setBaseURL('http://127.0.0.1:8000/api/')

    // перехватываем запрос для добавления конфиги запросу
    api.onRequest(config => {
      if (config.url === 'getToken') return

      config.headers.Authorization = `Bearer ${$cookies.get('jwt_token')}`
    })
    // обработка ошибок запросов
    api.onError(error => {
      if (error.response) {
      const { data } = error.response
      
      // если ошибка, отображаем окно с ошибкой
      store.commit('OPEN_SNACKBAR', {
          isShowSnackbar: true,
          message: data.error,
      })
      }
  })
    // инжектим для доступа модуля во всех файлах
    inject('api', api)
}