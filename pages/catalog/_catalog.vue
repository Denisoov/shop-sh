<script>
import { get } from 'http'

export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    store.dispatch('catalog/getDetailProduct', route.params.catalog)
  },
  computed: {
    detailProduct() {
      return this.$store.state.catalog.detailProduct
    },
    recommendationProducts() {
      return this.$store.state.catalog.recommendationProducts
    },
    totalPrice() {
      return this.detailProduct.price * this.countSize
    }
  },
  data: () => ({
    countSize: 1,
    model: null,
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
    },
    goDetailProduct(id) {
      this.$router.push(`${id}`)
    }
  },
}
</script>

<template>
  <div class="page">
    <div class="content">
      <div class="wrapper">
        <section class="images">
          <img 
            v-for="(image, index) in detailProduct.images"
            :key="index"
            :src="image.image" 
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
              <input v-mask="'###'" v-model="countSize" type="text">
              <button @click="countSize++" >+</button>
            </div>
          </div>
          <section class="price">
            <h4>Итого:</h4>
            <h5>{{ `₽ ${totalPrice}` }}</h5>
          </section>
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
      <section v-if="recommendationProducts.length > 0" class="recommendation">
        <h1 class="recommendation__title">С этим товаром покупали</h1>
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(product, index) in recommendationProducts"
            :key="index"
            v-ripple
            v-slot="{ active }"
          >
            <article  @click="goDetailProduct(product.id)" class="product" >
              <div class="product__image">
                <img :src="product.images[0].image" alt="Футболка">
              </div>
              <div class="product__description">
                <h4 class="product__title">{{ product.name }}</h4>
              </div>
            </article>
          </v-slide-item>
        </v-slide-group>
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
  padding: 100px 60px;

  .content {
    width: 100%;
    height: initial;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .recommendation {
    width: calc(100% - 15%);
    height: initial;
    padding: 30px;
    border-radius: 12px;

    &__title {
      margin-top: 30px;
    }

  }
  .params {
    width: 430px;
    height: inherit;
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
      margin-top: 80px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
  .images {
    width: 1000px;
    min-height: 600px;
    height: initial;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 10px; 
    box-shadow: 0px 0px 17px rgb(201 200 200 / 9%);
    border-radius: 12px;

    img {
      background-color: white;
      padding: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
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
.product {
    position: relative;
    width:  260px;
    height: initial;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 4px 18px #c3cadc63;
    overflow: hidden;
    background: white;
    margin-right: 30px;
  
    &__description {
      cursor: pointer;
      width: 100%;
      padding: 30px;
    }

    &__image {
      width: 100%;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9897B9;
      transition: all 250ms ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 250ms ease-in-out;
        overflow: hidden;

      }
    }
    &__title {
      color: #5C627F;
      margin-bottom: 20px;
      white-space: pre-wrap;
    }
}
</style>