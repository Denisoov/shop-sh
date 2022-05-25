<script>

import CatalogProducts from '@/components/CatalogProducts'

export default {
  // получение каталога товаров
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
    filter: {
      get() {
        return this.$store.state.catalog.filter
      },
      set(value) {
        this.$store.commit('catalog/SET_FILTER', value)
      }
    },
    filterCatalog() {
      return this.$store.getters['catalog/filterCatalog']
    }
  },
  data: () => ({
    filters: [],
  }),
  watch: {
    filter(val) {
    }
  },
  mounted() {
    this.filters = this.catalogs.map(
      (item) => {
        return {
          name: item.name,
          id: item.id
        }
      })

    this.filters.unshift({
      name: 'Все',
      id: 'all',
    })
  },
}
</script>

<template>
  <div class="page">
    <section class="control">
      <v-select
        v-model="filter"
        :items="filters"
        item-text="name"
        return-object
        label="Тип одежды"
        outlined
        :disabled="catalogs.length === 0"
      ></v-select>
    </section>
    <catalog-products 
      v-if="filterCatalog.length > 0"
      :catalog="filterCatalog" 
    />
    <div v-else class="message-no-match">
      <h3>К сожалению нет товаров</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
 .page {
    height: 100%;
    width: calc(100% - 10%);
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-image: url('@/assets/DRESSCODE.png');
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center center;
    background-attachment: scroll;
  }
  .control {
    margin-top: 60px;
    width: 100%;
    height: initial;
  }
  
</style>