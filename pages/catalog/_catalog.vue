<script>
export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    store.dispatch('catalog/getDetailProduct', route.params.catalog)
  },
  computed: {
    detailProduct() {
      return this.$store.state.catalog.detailProduct
    }
  },
  data: () => ({
    countSize: 1,
  }),
  methods: {
    minusCount() {
      if (this.countSize > 1) {
        this.countSize--
      } 
    },
    plusCount() {
      if (this.countSize < 5) {
        this.countSize++
      } 
    }
  },
}
</script>

<template>
  <div class="page">
    <div class="content">
      <section class="images">
        <img 
          :src="`data:image/png;base64, ${detailProduct.images[0].image}`" 
          alt="Продукт"
        >
      </section>
      <section class="params">
        <h2 class="params__title" >{{ detailProduct.name }}</h2>
        <div class="params__articul">
          Артикул: 
          <span class="params__articul__text">{{ detailProduct.article }}</span>
        </div>
        <div class="params__sizes">
            <h4>Размеры</h4>
           <v-chip-group
            active-class="primary--text"
            column
          >
            <v-tooltip                   
              v-for="(size, index) in detailProduct.parameters"
              :key="index" 
              bottom
            >
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                v-on="on"
                :disabled="!size.in_stock" >
                  {{ size.size }}
                </v-chip>
              </template>
              <span> {{ size.in_stock ? size.size  : 'Нет в наличии' }}</span>
            </v-tooltip>
          </v-chip-group>
        </div>
        <div class="params__count">
          <h4>Колличество</h4>
          <div class="counter">
            <button @click="minusCount()">-</button>
            <input v-model="countSize" type="text">
            <button @click="countSize++" >+</button>
          </div>
        </div>
        <div class="params__control">
          <v-btn
            color="primary"
            class="mt-5"
          >
            Заказать
          </v-btn>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('../../assets/DRESSCODE.png');
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center center;
  background-attachment: scroll;
  padding: 120px 240px;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .params {
    width: 430px;
    height: 600px;
    padding: 30px;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 0px 0px 17px rgb(201 200 200 / 9%);
    background-color: white;
    border-radius: 12px;

    &__title {
      margin-bottom: 20px;
    }

    &__articul {
      font-family: 'Montserrat-Medium';

      &-text {
        color: brown;
      }
    }
    &__sizes {
      margin: 30px 0;
    }
    &__count {
      margin: 30px 0;

      h4 {
        margin-bottom: 20px;
      }
    }
    &__control {
      margin-top: 120px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
  .images {
    width: 800px;
    height: 600px;
    padding: 30px;
    background-color: white;
    box-shadow: 0px 0px 17px rgb(201 200 200 / 9%);
    border-radius: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  } 
}
.counter {
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 70px;
    height: 40px;
    display: flex;
    padding-left: 30px;
    background-color: rgb(241, 241, 241);

  }
  
  button {
    width: 60px;
    height: 40px;
    background-color: rgb(230, 230, 230);

  }
}
</style>