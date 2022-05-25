<template>
  <v-app class="app">
    <v-card>
      <v-toolbar
        color="deep-purple accent-4"
        dark
        flat
        v-if="authorization"
      >
        <v-toolbar-title>Административная панель</v-toolbar-title>
        <nav class="links">
          <nuxt-link to="/admin/adm-banners">Баннеры</nuxt-link>
          <nuxt-link to="/admin/adm-collections">Коллекции</nuxt-link>
        </nav>

        <v-spacer></v-spacer>

        <v-btn @click="exit" text>
          Выйти
        </v-btn>

      </v-toolbar>

        <div class="content"><nuxt /></div>
    </v-card>
    <app-snackbar />
  </v-app>
</template>

<script>

import AppSnackbar from '@/components/base/AppSnackbar'

export default {
  components: {
    AppSnackbar
  },
  computed: {
    authorization() {
      return this.$store.state.admin.token
    },
  },
  data: () => ({
    currentTab: 0,
    items: [
      {
        tab: 0,
        title: 'Баннеры',
        slug: '/admin/banners'
      },
      {
        tab: 1,
        title: 'Коллекции',
        slug: '/admin/collections'
      }
    ],
  }),
  methods: {
    // переход на вкладку в админке
    goRouteTab(slug) {
      this.$router.push(`${slug}`)
    },
    // выход из админки
    exit() {
      this.$store.dispatch('admin/exit')

      window.location.reload();
    }
  },
}
</script>
<style scoped lang="scss">
.v-application--wrap {
  min-height: 100vh !important;
}
  .app {
    height: 100%;
    min-height: 100vh;
    background: #F6F8FA;
  }
  .wrapper {
    min-height: 100vh;
  }
  .v-card {
    min-height: 100vh;
  }
  .links {
    margin-left: 60px;
    display: flex;
    justify-content: space-around;
    width: 250px;
  }
  .auth {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a.nuxt-link-active {
    font-weight: bold;
    color: white;
    text-decoration: none;

  }
  .v-application a {
    color: white;
  }
  /* exact link will show the primary color for only the exact matching link */
  a.nuxt-link-exact-active {
    color: white;
  }
</style>