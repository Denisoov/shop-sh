<template>
  <v-app class="app">
    <Header />
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>

import Header from "@/components/Header"
export default {
  components: {
    Header
  }
}
</script>
<style scoped lang="scss">
  .app {
    background: #F6F8FA;
  }
</style>