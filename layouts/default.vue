<template>
  <v-app class="app">
    <app-loading v-if="isLoadingMainPage || isLoadingCatalogPage" />
    <div v-else>
      <Header />
      <app-snackbar />

      <div class="layout">
        <Nuxt />
      </div>
      <Footer />
    </div>
    <widjet-basket v-if="$route.name === 'catalog' || $route.name === 'catalog-catalog'" />
  </v-app>
</template>

<script>

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AppLoading from "@/components/AppLoading"
import WidjetBasket from "@/components/WidjetBasket.vue"
import AppSnackbar from '@/components/base/AppSnackbar'


export default {
  components: {
    Header,
    Footer,
    AppLoading,
    WidjetBasket,
    AppSnackbar
  },
  computed: {
    isLoadingMainPage() {
      return this.$store.state.isLoadingMainPage
    },
    isLoadingCatalogPage() {
      return this.$store.state.isLoadingCatalogPage
    }
  }
}
</script>
<style scoped lang="scss">
  .app {
    height: 100%;
    background: #F6F8FA;
    position: relative;
  }
  .layout {
    min-height: 100vh;
    height: 100%;
  }
</style>