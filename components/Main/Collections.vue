<script>

import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  props: ['banners'],
  components: {
    Carousel3d,
    Slide,
  },
};
</script>

<template>
  <section class="present">
    <h1 class="present__title">Наши коллекции</h1>
    <div class="present__container">
        <carousel-3d 
          width="900" 
          height="450" 
          :autoplay="true"
          :autoplayTimeout="5000"
        >
          <slide 
            v-for="(banner, index) in banners" 
            :key="index" 
            :index="index"
          >
            <img 
              class="present__image"
              :src="`data:image/png;base64, ${banner.image}`" 
              alt="Изображение"
            >
          </slide>
        </carousel-3d>
    
    </div>
  </section>
</template>

<style scoped lang="scss">
.present {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 10%);
  height: initial;
  margin: 0 120px;
  color: black;

  &__title {
    font-family: 'Montserrat-SemiBold';
    width: 100%;
    color: #041A31;
    margin-bottom: 40px;
    font-size: 42px;
    text-align: center;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 10%);
    height: calc(100% - 50%);
    padding: 30px;
    font-size: 32px;
    color: aliceblue;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
