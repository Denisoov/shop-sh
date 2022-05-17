<template>
  <div class="page">
    <v-btn 
      class="ml-4 mt-4 mb-4"
      color="primary"
      @click="openDialogCreateBanner"
    >
      Добавить баннер
    </v-btn>
    <v-simple-table v-if="banners.length > 0">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              №
            </th>
            <th class="text-left">
              Баннер
            </th>
            <th class="text-left">
              Управление
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(banner, index) in banners"
            :key="banner.id"
          >
            <td>
              {{ index + 1 }}
            </td>
            <td>
              <img 
                class="table-image" 
                :src="`data:image/png;base64, ${banner.image}`"
              >
            </td>
            <td>
              <v-btn @click="deleteBanner(banner.id)" color="error">Удалить</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h4 class="no-match" v-else>Нет ни одного баннера</h4>
    <app-dialog
      v-if="isDialogCreateBanner"
      ref="dialog"
      :max-width="880"
      :value="isDialogCreateBanner"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogCreateBanner"
    >
      <template #content>
        <dialog-create-banner
          v-click-outside="closeDialogCreateBanner"
          @closeDialog="closeDialogCreateBanner" 
        />
      </template>
    </app-dialog>
  </div>
</template>

<script>

export default {
  asyncData({$cookies, store, redirect}) {
    if ($cookies.get('jwt_token')) {
      store.commit('admin/SET_JWT_TOKEN', $cookies.get('jwt_token'))
      store.dispatch('admin/getAllBanners')
    }
    else redirect(`/admin`)
  },
  layout: 'adm',
  components: {
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogCreateBanner: () => (import('@/components/dialogs/DialogCreateBanner')),
  },
  computed: {
    banners() {
      return this.$store.state.admin.banners
    }
  },
  methods: {
    closeDialogCreateBanner() {
      this.isDialogCreateBanner = false
    },
    openDialogCreateBanner() {
      this.isDialogCreateBanner = true
    },
    async deleteBanner(idBanner) {
      await this.$store.dispatch('admin/deleteBanner', idBanner)
    }
  },
  data: () => ({
    isDialogCreateBanner: false
  })
};
</script>
<style scoped lang="scss">
  .table-image {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
  .no-match {
    margin-top: 30px;
    margin-left: 30px;
  }
</style>
