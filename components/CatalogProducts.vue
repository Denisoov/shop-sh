<script>
export default {
  props: ['catalogs']
}
</script>

<template>
  <div>
    <div v-for="(catalog, index) in catalogs" class="wrapper-catalog">
      <section 
        class="catalog"
        >
        <h3 class="catalog__title" >{{ catalog.name }}</h3>
        <section v-if="catalog.products.length >= 0" class="products">
          <article 
            v-for="(product, index) in catalog.products" 
            :key="index" 
            class="product" 
          >
            <div class="product__image">
              <img :src="`data:image/png;base64, ${product.images[0].image}`" alt="Футболка">
            </div>
            <div class="product__description">
              <h3 class="product__title">{{ product.name }}</h3>
              <div class="product__container">
                <p class="product__gender">Артикул: {{ product.article }}</p>
                <p class="product__price">{{ `₽ ${product.price}` }}</p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-catalog {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.catalog {
  width: 100%;
  margin: 40px 0;

  &__title {
    font-size: 42px;
    margin-bottom: 30px;
  }
}
.products {
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: auto; 
  gap: 20px; 
}
.product {
    position: relative;
    width:  100%;
    height: 575px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 4px 18px #c3cadc63;
    overflow: hidden;
    background: white;
  
    &__description {
      padding: 30px;
    }

    &__image {
      width: 100%;
      height: 460px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9897B9;
      transition: all 250ms ease-in-out;

      img {
        width: 305px;
        height: 260px;
        object-fit: contain;
        transition: all 250ms ease-in-out;
        overflow: hidden;

      }
    }
    &:hover &__image img {
        transform: scale(1.4);
        transition: all 250ms ease-in-out;
    }
    &__title {
      color: #5C627F;
      margin-bottom: 20px;
    }
    &__container{
      width: 100%;
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