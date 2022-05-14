<template>
  <div class="page">
    <v-btn 
      class="ml-4 mt-4"
      color="primary"
      @click="openDialogCreateBanner"
    >
      Создать коллекцию
    </v-btn>
  </div>
</template>

<script>
export default {
    asyncData({redirect, $cookies, store}) {
    if ($cookies.get('jwt_token')) {
      store.commit('admin/SET_JWT_TOKEN', $cookies.get('jwt_token'))

      store.dispatch('admin/getAllBanners')
    }
    else redirect(`/admin`)
  },
  layout: 'adm',
  components: {},
  
};
</script>
<style>

</style>
