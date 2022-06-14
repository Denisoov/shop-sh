<script>

export default {
  methods: {
    async createNewProduct() {
      try {
        let allOrder = await this.order

        let products = await this.basket.map((item) => {
          return {
            count: item.count,
            id: item.id,
            size: item.size
          }
        })

        allOrder.products = await products

        await this.$api.post('order/create', allOrder)

        await this.$cookies.set('basket', [])
        await this.$store.commit('basket/CLEAR_BASKET')

      } catch (error) {
        this.$store.commit('OPEN_SNACKBAR', {
          isShowSnackbar: true,
          message: 'Не удалось оформить заказ',
        })
      }

      await this.$emit("closeDialog");
    }
  },
  computed: {
    totalPrice() {
      return this.$store.getters['basket/totalPrice']
    },
    basket() {
      return this.$store.state.basket.basket
    },
  },
  data: () => ({
    order: {
      fio: null,
      phone: null,
      address: null,
    },
    valid: true,
    fioRules: [(v) => !!v || "*Обязательное поле"],
    phoneRules: [(v) => !!v || "*Обязательное поле"],
    addressRules: [(v) => !!v || "*Обязательное поле"],
  })
}

</script>

<template>
  <div>
    <h3>Оформление заказа</h3>
    <div class="form">
    <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="order.fio"
                label="Ф.И.О"
                :rules="fioRules"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-mask="'+7 (###)-###-##-##'"
                v-model="order.phone"
                label="Номер телефона"
                :rules="phoneRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="order.address"
                label="Например: г. Ханты-Мансийск ул. Чкалово 12"
                placeholder="Адрес доставки"
                required
                :rules="addressRules"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <div class="control">
      <div class="control__total"><h4>Итоговая цена: {{totalPrice}}</h4></div>
      <v-btn
        :disabled="!valid"
        @click="createNewProduct"
        class="btn-add"
        >Оформить
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-input {
    width: 100%;
    max-width: 100%;
}
.form {
  margin-top: 20px;
}
.control {
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  &__total {
    margin-left: 10px;
  }
  .btn-add {
  margin-top: 20px;
  color: black;
}
}
</style>
