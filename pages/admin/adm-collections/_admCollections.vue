<script>
  export default {
    asyncData({ redirect, $cookies, store, route }) {
      if ($cookies.get("jwt_token")) {
        store.commit("admin/SET_JWT_TOKEN", $cookies.get("jwt_token"));
        store.dispatch("admin/getProductsOfCollection", route.params.admCollections);
      } else redirect(`/admin`);
    },
    layout: "adm",
    components: {
      AppDialog: () => import("@/components/base/AppDialog"),
      DialogCreateProduct: () =>
        import("@/components/dialogs/DialogCreateProduct"),
      DialogRemakeProduct: () =>
        import("@/components/dialogs/DialogRemakeProduct"),
    },
    data: () => ({
      isDialogCreateProduct: false,
      isDialogRemakeProduct: false,
      headers: [
        { text: 'Изображение', value: 'images' },
        { text: 'Наименование', align: 'start', sortable: false, value: 'name',},
        { text: 'Артикул', value: 'article', sortable: false, },
        { text: 'Размеры', value: 'parameters', sortable: false, },
        // { text: 'В наличии', align: 'start', sortable: false, value: 'in_stock',},
        { text: 'Цена', value: 'price', sortable: false,},
        { text: 'Действия', value: 'actions', sortable: false,},
      ],
    }),
    computed: {
      products() {
        return this.$store.state.admin.detailOfCollection.products
      }
    },
    methods: {
      closeDialogCreateProduct() {
        this.isDialogCreateProduct = false;
      },
      openDialogCreateProduct() {
        this.isDialogCreateProduct = true;
      },
      closeDialogRemakeProduct() {
        this.isDialogRemakeProduct = false;
      },
      openDialogRemakeProduct(product) {
        this.$store.commit('admin/SET_REMAKE_PRODUCT', product)  
        this.isDialogRemakeProduct = true;
      },
      deleteItem (item) {
        this.$store.dispatch(
          'admin/deleteProduct', { 
            idProduct: item.id, 
            idCollection: this.$route.params.admCollections
        })
      },
    },
  }
</script>

<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="calories"
    >
      <template v-slot:top>
        <v-toolbar class="mb-4" flat>
          <v-toolbar-title>Управление данными</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn @click="openDialogCreateProduct" color="primary">Создать продукт</v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

      <template v-slot:no-data>Нет данных</template>
      <template v-slot:item.in_stock="{ item }">
        <v-icon v-if="item.parameters[0].in_stock">$checked</v-icon>
        <v-icon v-else >$check</v-icon>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon 
          middle 
          class="mr-2" 
          @click="openDialogRemakeProduct(item)"
        >
          $pen
        </v-icon>
        <v-icon
          middle
          @click="deleteItem(item)"
        >
          $clear
        </v-icon>
      </template>
      <template v-slot:item.images="{ item }">
        <img 
          class="product-image"
          :src="`data:image/png;base64, ${item.images[0].image}`" 
          alt="Продукт"
        >
      </template>
      <template v-slot:item.parameters="{ item }">
        <p>
          <span 
            v-for="(params, index) in item.parameters"
            :key="index"
          >
            {{ params.size }}
          </span>
        </p>
      </template>
      <template v-slot:item.price="{ item }">
        <p>{{ `₽ ${item.price}`}}</p>
      </template>
    </v-data-table>
    <app-dialog
      v-if="isDialogCreateProduct"
      ref="dialog"
      :max-width="680"
      :value="isDialogCreateProduct"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogCreateProduct"
    >
      <template #content>
        <dialog-create-product
          v-click-outside="closeDialogCreateProduct"
          @closeDialog="closeDialogCreateProduct"
        />
      </template>
    </app-dialog>
    <app-dialog
      v-if="isDialogRemakeProduct"
      ref="dialog"
      :max-width="680"
      :value="isDialogRemakeProduct"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogRemakeProduct"
    >
      <template #content>
        <dialog-remake-product
          v-click-outside="closeDialogRemakeProduct"
          @closeDialog="closeDialogRemakeProduct"
        />
      </template>
    </app-dialog>
  </div>
</template>

<style lang="scss">
.v-data-footer {
    display: none;
    opacity: 0;
}
.v-data-footer__select {
    display: none;
}
.product-image {
  margin-top: 6px;
  width: 100px;
  height: 82px;
  object-fit: contain;
}
.v-data-table {
  font-family: 'Montserrat-Medium', 'sans-serif';
}
</style>
