<template>
  <div class="page">
    <section v-if="banners" class="banner">
      <v-carousel 
        hide-delimiters 
        :interval="3000"
        v-model="model"
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(banner, i) in banners"
          :key="i"
        >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <img class="banner-image" :src="banner.image" />
            </v-row>
        </v-carousel-item>
      </v-carousel>
  </section>
  <div class="content">
    <h1>ХИТ ПРОДАЖ</h1>
    <section  class="products">
      <card-product v-for="(product, i) in 3" :key="i" />
    </section>
  </div>
  </div>
</template>

<script>

import AppLoading from "@/components/AppLoading"
import CardProduct from "@/components/CardProduct"
export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    store.dispatch('banners/getAllBanners')
  },
  components: {
    AppLoading,
    CardProduct
  },
  computed: {
    banners() {
      return this.$store.state.banners.banners
    }
  },
   data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    })
}
</script>
<style scoped lang="scss">
  .page {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('../assets/DRESSCODE.png');
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center center;
    background-attachment: scroll;
  }
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .products {
    margin: 0 auto;
    padding: 60px 0;
    max-width: calc(100% - 120px);
    height: 100%;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 20px 20px; 
  }
  .content {
    max-width: calc(100% - 120px);
    width: 100%;
    height: 100%;
    margin: 0 auto;
    min-height: 700px;
  }
</style>