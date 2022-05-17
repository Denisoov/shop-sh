<template>
  <div class="page">
    <preview />
    <about />
    <collections v-if="banners.length > 0" :banners="banners" />
  </div>
</template>

<script>

import AppLoading from "@/components/AppLoading"
import Preview from "@/components/Main/Preview"
import About from "@/components/Main/About"
import Collections from "@/components/Main/Collections"

export default {
  asyncData({store}) {
    store.dispatch('banners/getAllBanners')
  },
  components: {
    AppLoading,
    Preview,
    About,
    Collections
  },
  computed: {
    banners() {
      return this.$store.state.banners.banners
    },
  },
}
</script>
<style scoped lang="scss">
 
  .v-window__next {
    background: rgb(255 255 255 / 76%);
  }
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
    object-fit: fill;
  }
  .content {
    width: 100%;
    height: 100%;
    padding-top: 60px;
    margin: 0 auto;
    min-height: 700px;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .wrapper {
      width: 100%;
      height: 100%;
      max-width: calc(100% - 10%);
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__products {
        padding: 60px 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between; 
      }
      
      &__title {
        // font-family: 'Montserrat-Bold', 'sans-serif';
        width: 100%;
        text-align: left;
        font-size: 42px;
      }
    }
  }
  .v-image {
    height: 800px;
  }
</style>