<script>
import IconClose from "@/components/icons/IconClose";
import PictureInput from "vue-picture-input";

export default {
  data: () => ({
    product: {
      name: null,
      price: 0,
      article: null,
      size: null,
      in_stock: false,
      image: null,
      parameters: []
    },
    newImage: null,
    valid: true,
    nameRules: [
      (v) => !!v || "*Обязательное поле",
      (v) => (v && v.length >= 3) || "Не меньше 3 символов",
    ],
    priceRules: [(v) => !!v || "*Обязательное поле"],
    articleRules: [(v) => !!v || "*Обязательное поле"],
    sizeRules: [(v) => !!v || "*Обязательное поле"],
  }),
  components: {
    IconClose,
    PictureInput,
  },
  computed: {
    remakeProduct() {
      return this.$store.state.admin.remakeProduct
    },
  },
  mounted() {
    this.getProductForRemake()
  },
  methods: {
    async getProductForRemake() {
      try {
        const { data } = await this.$api.get(`product/showDetail/${this.remakeProduct.idProduct}`)
        this.product = data
      } catch (error) {}
    },
    async createNewCollection() {
      await this.$store.dispatch("admin/createNewProduct", {
        formData: this.product,
        idCollection: this.$route.params.admCollections,
      });

      await this.$emit("closeDialog");
    },

    async deleteParamsOfProduct(idParameter) {
      await this.$api.delete(`parameter/delete/${idParameter}`)
      await this.getProductForRemake()
    },

    onChangeImage(image) {
      if (image) this.newImage = image;
    },

    async addSizeInProduct() {
      const params = { in_stock: true, size:"XS"}

      this.product.parameters.push(params)

      await this.$api.post(`parameter/create/${this.remakeProduct.idProduct}`, params)
      await this.getProductForRemake()
    },
    async updateProduct() {
      try {
       this.newImage
        ? this.product.images[0].image = this.newImage
        : this.product.images[0].image = `data:image/png;base64, ${this.product.images[0].image}`

        await this.$api.patch(`product/update/${this.product.id}`, this.product)
        await this.$emit('closeDialog', false)

        await this.$store.dispatch('admin/getProductsOfCollection', this.product.group_id)

      } catch (error) {
        await this.$emit('closeDialog', false)
        await this.$store.dispatch('admin/getProductsOfCollection', this.product.group_id)
      }
    }
  },
};
</script>

<template>
  <div v-if="product">
    <h3>Редактировать продукт</h3>
    <div class="form">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <div class="images">
                <img 
                  v-for="(image, index) in product.images" 
                  :key="index" 
                  class="images__image"
                  :src="`data:image/png;base64, ${image.image}`" 
                  alt="Продукт"
                >
                <div class="images__description" >заменить на</div>
                <picture-input
                  @change="onChangeImage"
                  ref="pictureInput"
                  width="100"
                  height="120"
                  buttonClass="add-image"
                  :change="'Изменить'"
                  accept="image/jpeg,image/png"
                  size="10"
                  :custom-strings="{
                    drag: 'Добавить изображение',
                  }"
                  >
                </picture-input>
              </div>
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

            <v-col class="params" cols="12" md="12"
              v-for="(parameters, index) in product.parameters"
              :key="index"
            >
              <v-col cols="6" md="6">
                <v-text-field
                  v-model="parameters.size"
                  label="Размер"
                  :rules="sizeRules"
                  placeholder="Например: XS"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col cols="6" md="3">
                <v-checkbox
                  off-icon="$check"
                  on-icon="$checked"
                  v-model="parameters.in_stock"
                  label="В наличии"
                ></v-checkbox>
              </v-col>
              <v-col cols="6" md="2">
                <v-btn @click="deleteParamsOfProduct(parameters.id)" icon>
                    <v-icon>$clear</v-icon>
                </v-btn>
              </v-col>
            </v-col>

            <v-col cols="12" md="6">
              <v-btn 
                v-if="product.parameters.length < 6"
                color="primary"
                text
                @click="addSizeInProduct"
              >добавить размер</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <div class="control">
      <v-btn
        :disabled="!valid"
        @click="updateProduct"
        class="btn-add"
        color="deep-purple accent-4"
        >Сохранить
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss">
.v-input {
  width: 100%;
  max-width: 100%;
}
.form {
  margin-top: 20px;
  font-family: "Montserrat-Regular", "sans-serif";
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
.images {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__image {
    border: 1px solid #d9d9d9;
    margin-right: 4px;
    width: 100px;
    height: 120px;
    object-fit: contain;
  }

  &__description {
    height: 120px;
    width: inherit;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.add-image {
  font-size: 12px;
  margin: 0;
}
.params {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
