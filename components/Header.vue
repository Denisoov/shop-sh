<template>
  <header class="header">
    <div class="header__body">
        <span class="header__logotype">shop</span>
        <nav class="header__links">
          <nuxt-link 
            class="header__links-link" 
            data-item='Главная' 
            to="/"
          >Главная</nuxt-link>
          <nuxt-link 
            class="header__links-link" 
            data-item='Каталог' 
            to="/catalog"
          >Каталог</nuxt-link>
          <nuxt-link 
            class="header__links-link" 
            to="/contacts"
            data-item='Контакты' 
          >Контакты</nuxt-link>
        </nav>
    </div>
  </header>
</template>

<script>

import IconBasket from "@/components/icons/IconBasket";
export default {
  components: {
    IconBasket
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  &__body {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 10px;
    background: #041A31;
  }

  &__links {
    display: flex;
    align-items: center;
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    color: #545B75;

    a {
      display: inline-block;
      margin-right: 90px;
      font-size: 18px;
      color: #545B75;
      text-decoration: none;
      transition: all 0.5s ease-in-out;
      position: relative;

      &::before {
          content: attr(data-item);
          transition: 0.5s;
          color: #FB4184;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          overflow: hidden;
      }
      &:hover {
          &::before {
            width: 100%;
            transition: all 0.5s ease-in-out;
          }
      }
    }
  }

  &__logotype {
    margin-left: 30px;
    font-size: 28px;
    font-family:'Montserrat-Bold', 'sans-serif';
    color: #545B75;
  }

  &__basket {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #545B75;
    font-family: 'Montserrat-SemiBold', 'sans-serif';

  &-text {
    font-size: 18px;
    margin-left: 10px;
  }
}
}
</style>
