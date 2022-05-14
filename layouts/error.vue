<template>
  <v-app class="app" dark>
    <div class="containter-error">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <v-btn text @click="$router.go(-1)">
        Вернуться
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Страница не найдена',
      otherError: 'Произошла ошибка'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.app {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.containter-error {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
