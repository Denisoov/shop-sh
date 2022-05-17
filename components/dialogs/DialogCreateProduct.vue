<script>

import IconClose from '@/components/icons/IconClose'
import PictureInput from 'vue-picture-input'

export default {
  data: () => ({ 
    product: {
      name: null,
      price: 0,
      article: null,
      size: null,
      in_stock: false,
      image: null
    },
    valid: true,
    nameRules: [
        v => !!v || '*Обязательное поле',
        v => (v && v.length >= 3) || 'Не меньше 3 символов',
    ],
    priceRules: [
        v => !!v || '*Обязательное поле',
    ],
    articleRules: [
      v => !!v || '*Обязательное поле',
    ],
    sizeRules: [
      v => !!v || '*Обязательное поле',
    ]
  }),
  components: {
    IconClose,
    PictureInput
  },
  methods: {
    async createNewCollection() {
      await this.$store.dispatch("admin/createNewProduct", {
        formData: this.product,
        idCollection: this.$route.params.admCollections
      });

      await this.$emit("closeDialog");

      this.titleCollection = null;
    },
    onChangeImage (image) {
      if (image) this.product.image = image
    },
  },
};
</script>

<template>
  <div>
    <h3>Новый продукт</h3>
    <div class="form">
    <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <picture-input 
                @change="onChangeImage"
                ref="pictureInput"
                width="400" 
                height="400" 
                :change="'Изменить изображение'"
                accept="image/jpeg,image/png" 
                size="10" 
                :custom-strings="{
                  drag: 'Добавить изображение'
                }"
                >
              </picture-input>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="product.name"
                :rules="nameRules"
                label="Наименование"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-mask="'#######'"
                v-model="product.price"
                label="Стоимость в ₽"
                :rules="priceRules"
                placeholder="Например: 1999"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="product.article"
                label="Артикул"
                :rules="articleRules"
                placeholder="Например: SZ-322"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="product.size"
                label="Размер"
                :rules="sizeRules"
                placeholder="Например: XS"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-checkbox
                off-icon="$check"
                on-icon="$checked"
                v-model="product.in_stock"
                label="В наличии"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <div class="control">
      <v-btn
        :disabled="!valid"
        @click="createNewCollection"
        class="btn-add"
        color="deep-purple accent-4"
        >Добавить
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
  font-family: 'Montserrat-Regular', 'sans-serif';

}
.control {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .btn-add {
    margin-top: 20px;
    color: white;
  }
}
</style>
