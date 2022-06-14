<script>

import IconBasket from '@/components/icons/IconBasket.vue'

export default {
  components: {
    IconBasket
  },
  data: () => ({
    countItems: null,
  }),
  methods: {
    goToBasket() {
      this.$router.push('/basket')
    },
  },
  computed: {
    countItemsInBasket() {
      return this.$store.getters['basket/countItemsInBasket']
    }
  }
}

</script>

<template>
  <div @click="goToBasket()" class="widjet">
    <icon-basket class="basket" :color="'white'" />
    <span v-if="countItemsInBasket > 0" class="count-items">{{ countItemsInBasket }}</span>
  </div>
</template>

<style lang="scss">
.widjet {
  position: fixed ;
  bottom: 50px;
  right: 50px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f86203;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 22px #f86203;
  cursor: pointer;

  .basket {
    margin-right: 4px;
  }
  .count-items {
    font-size: 10px;
    font-weight: 800;
    color: white;
  }
}
</style>