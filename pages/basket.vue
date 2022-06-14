
<script>

import IconClose from '@/components/icons/IconClose.vue';



export default {
  asyncData({store, $cookies}) {

    let basket = $cookies.get('basket')

    if (basket !== undefined) store.commit('basket/INIT_BASKET', basket)
  },
  components: {
    IconClose,
    AppDialog: () => import("@/components/base/AppDialog"),
    DialogCreateOrder: () =>
        import("@/components/dialogs/DialogCreateOrder"),
  },
  computed: {
    basket() {
      return this.$store.state.basket.basket
    },
    totalPrice() {
      return this.$store.getters['basket/totalPrice']
    }
  },
  data: () => ({
    isDialogCreateOrder: false,
  }),
  methods: {
    deleteProductInBasket(item) {
      this.$store.commit('basket/DELETE_PRODUCT_IN_BASKET', item)
    },
    closeDialogCreateOrder() {
      this.isDialogCreateOrder = false;
    },
    openDialogCreateOrder() {
      this.isDialogCreateOrder = true;
    },
  }
};
</script>

<template>
  <div class="page">
    <div class="wrapper">
      <section class="baske" >
        <h2>Корзина</h2>
        <div v-if="basket.length > 0">
          <hr>
          <div class="basket-item" v-for="(item, index) in basket" :key="index">
            <div class="basket-item__left">
              <h4 class="basket-item__name">{{ item.name }}</h4>
              <p class="basket-item__articul">Артикул: {{ item.article }}</p>
              <p class="basket-item__size">Размер: {{ item.size }}</p>
              <p>Кол-во: {{ item.count }}</p>

            </div>
            <div class="basket-item__right">
              <v-btn icon @click="deleteProductInBasket(item)">
                <icon-close />
              </v-btn>
              <p class="basket-item__price">Стоимость: {{ item.count * item.price }} ₽</p>
            </div>
          </div>
          <hr />
          <div class="basket-panel">
            <h3>Итого: {{ totalPrice }} ₽</h3>
            <v-btn @click="openDialogCreateOrder" >Оформить</v-btn>
          </div>
        </div>
        <div v-if="basket.length === 0">
          Корзина пуста
        </div>
      </section>
    </div>
    <app-dialog
      v-if="isDialogCreateOrder"
      ref="dialog"
      :max-width="680"
      :value="isDialogCreateOrder"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogCreateOrder"
    >
      <template #content>
        <dialog-create-order
          v-click-outside="closeDialogCreateOrder"
          @closeDialog="closeDialogCreateOrder"
        />
      </template>
    </app-dialog>
  </div>
</template>
>
<style scoped lang="scss">
.page {
  width: 100%;
  max-width: calc(100% - 20%);
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  background-image: url("../assets/DRESSCODE.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center center;
  background-attachment: scroll;
}
.wrapper {
  padding-top: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
h2 {
  font-size: 34px;
  font-family: 'Montserrat-SemiBold', 'sans-serif';
  margin: 30px 0;
}
p {
  font-size: 18px;
  font-family: 'Montserrat-Medium', 'sans-serif';
  margin-bottom: 20px;
}
.basket-panel {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
}
.basket-item {
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  margin-top: 20px;
  border-radius: 7px;
  padding: 30px;
  background: #f6f8fa;
  box-shadow: -5px 0px 22px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  &__left {
    width: 50%;
  }
  &__right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__name {
    font-size: 20px;
  }
  &__price {
    margin-bottom: 0;
  }
  &__articul {
    margin-top: 10px;
    font-family: 'Montserrat-Regular', 'sans-serif';
  }
}
</style>
