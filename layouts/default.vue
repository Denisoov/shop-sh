<template>
  <v-app class="app">
    <app-loading v-if="isLoadingMainPage || isLoadingCatalogPage" />
    <div v-else>
      <Header />
      <div class="layout">
        <Nuxt />
      </div>
      <Footer />
    </div>
  </v-app>
</template>

<script>

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AppLoading from "@/components/AppLoading"

export default {
  components: {
    Header,
    Footer,
    AppLoading
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
  }
  .layout {
    min-height: 100vh;
    height: 100%;
  }
</style>