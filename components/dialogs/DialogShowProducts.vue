<script>

export default {
  props: {
    products: {
      type: Array
    }
  }
}

</script>

<template>
  <div>
    <hr style="width: 240px">
    <div v-for="(product, index) in products" :key="index">
      <h3>{{product.name}}</h3>
      <div>Артикул:<strong>{{product.article}}</strong></div>
      <p>Цена: {{ product.price}}</p>
      <hr style="width: 240px">
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
  justify-content: flex-end;
  .btn-add {
  margin-top: 20px;
  color: white;
}
}
</style>
