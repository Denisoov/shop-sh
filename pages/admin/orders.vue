<script>

export default {
  // запрашиваем все баннеры
  asyncData({$cookies, store, redirect}) {
    if ($cookies.get('jwt_token')) {
      store.commit('admin/SET_JWT_TOKEN', $cookies.get('jwt_token'))
      store.dispatch('admin/getAllOrders')
    }
    else redirect(`/admin`)
  },
  layout: 'adm',
  components: {
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogShowProducts: () => (import('@/components/dialogs/DialogShowProducts')),
  },
  computed: {
    orders() {
      return this.$store.state.admin.orders
    }
  },
  methods: {
    closeDialogShowProduct() {
      this.isDialogShowProduct = false
    },
    openDialogShowProduct(order) {
      this.isDialogShowProduct= true

      this.dialogProducts = order.products
    },
  },
  data: () => ({
    isDialogShowProduct: false,
    dialogProducts: []
  })
};
</script>

<template>
  <div class="page">
    <v-simple-table v-if="orders.length > 0">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              №
            </th>
            <th class="text-left">
              Адрес
            </th>
            <th class="text-left">
              Ф.И.О.
            </th>
            <th class="text-left">
              Телефон
            </th>
            <th class="text-left">
              Итоговая стоимость
            </th>
            <th class="text-left">
              Продукты
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in orders"
            :key="order.id"
          >
            <td>
              {{ index + 1 }}
            </td>
            <td>
              {{ order.address }}
            </td>
            <td>
              {{ order.fio }}
            </td>
            <td>
              {{ order.phone }}
            </td>
            <td>
              {{ order.total }} ₽
            </td>
            <td>
              <v-btn @click="openDialogShowProduct(order)">Посмотреть</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h4 class="no-match" v-else>Нет ни одного заказа</h4>
    <app-dialog
      v-if="isDialogShowProduct"
      ref="dialog"
      :max-width="480"
      :value="isDialogShowProduct"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogShowProduct"
    >
      <template #content>
        <dialog-show-products
          v-click-outside="closeDialogShowProduct"
          @closeDialog="closeDialogShowProduct"
          :products="dialogProducts"
        />
      </template>
    </app-dialog>
  </div>
</template>

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
