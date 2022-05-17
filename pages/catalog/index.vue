<script>

import CatalogProducts from '@/components/CatalogProducts'

export default {
  asyncData({store}) {
    store.dispatch('catalog/getAllCatalog')
  },
  components: {
    CatalogProducts,
  },
  computed: {
    catalogs() {
      return this.$store.state.catalog.catalog
    },
  }
}
</script>

<template>
  <div class="page">
    <catalog-products 
      :catalogs="catalogs" 
    />
  </div>
</template>

<style scoped lang="scss">
 .page {
    height: 100%;
    width: calc(100% - 10%);
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-image: url('@/assets/DRESSCODE.png');
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center center;
    background-attachment: scroll;
  }
  
</style>