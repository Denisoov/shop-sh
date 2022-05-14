<template>
    <v-snackbar
        absolute
        v-model="isShowSnackbar"
        top
    >
      {{ snackbar.message ? snackbar.message : 'Что-то пошло не так:('}}
    </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar
    },
    isShowSnackbar: {
      get() {
        return this.$store.state.snackbar.isShowSnackbar
      },
      set() {
        this.$store.commit('CLOSE_SNACKBAR')
      }
    }
  }
}
</script>