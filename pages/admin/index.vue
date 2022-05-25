<template>
  <div  class="page">
    <div v-if="authorization" class="wrapper">
        Добро пожаловать в Административную панель
    </div>
    <sign-in-admin v-else />
  </div>
</template>

<script>

import SignInAdmin from '@/components/SignInAdmin'

export default {
  // проверка на наличие JWT-токена для авторизации
  asyncData({$cookies, store}) {
    if ($cookies.get('jwt_token')) {
      store.commit('admin/SET_JWT_TOKEN', $cookies.get('jwt_token'))
    }
  },
  layout: 'adm',
  components: { SignInAdmin },
  computed: {
    authorization() {
      return this.$store.state.admin.token
    },
  },
};
</script>
<style scoped>
.page {
  width: 100%;
  height: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
