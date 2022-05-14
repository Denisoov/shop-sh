<template>
  <div class="product">
    <div class="product__image">
    </div>
    <div class="product__description">
      <h3 class="product__title">Худи Classic Moon</h3>
      <div class="product__container">
        <p class="product__gender">мужские</p>
        <p class="product__price">₽1999</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .product {
    position: relative;
    width:  390px;
    height: 530px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 4px 18px #c3cadc63;
    overflow: hidden;
    
    &__description {
      padding: 30px;
    }

    &__image {
      width: 390px;
      height: 386px;
      background-color: #9897B9;
    }
    &__title {
      color: #5C627F;
      margin-bottom: 30px;
    }
    &__container{
      display: flex;
      justify-content: space-between;
    }
    &__price {
      color: #2964af;
      font-family: 'Montserrat-SemiBold', 'sans-serif';
      font-size: 16px;
    }
  }
</style>