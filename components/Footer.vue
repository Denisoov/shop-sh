<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__factoid">
        <div class="footer__factoid-image"></div>
        <p class="footer__factoid-text">У нас лучшее качество одежды</p>
      </div>

      <div class="contacts" >
        <h4 class="contacts__title">Адрес</h4>
        <p class="contacts__address">г. Ханты-Мансийск, ул. Калинина 22А</p>
        <p class="contacts__address">GamerShop</p>
        <p class="contacts__address">@2022 ИП Шалагин А.Е.</p>
      </div>

      <div class="links" >
        <h4 class="links__title">Навигация</h4>
        <nuxt-link class="links__link" to="/">Главная</nuxt-link>
        <nuxt-link class="links__link" to="/catalog">Каталог</nuxt-link>
        <nuxt-link class="links__link" to="/contacts">Контакты</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    background: url('@/assets/background-footer.png') no-repeat bottom;
    background-size: cover;
    margin-top: 120px;

    &__container {
      display: grid; 
      grid-template-columns: 1fr 1fr 1fr; 
      gap: 70px; 
      width: calc(100% - 10%);
      height: calc(100% - 40%);
      padding: 30px;
      margin-top: 6%;
      font-size: 32px;
      color: aliceblue;
    }
  
    &__factoid {
        width: 272px;

      &-image {
        width: 272px;
        height: 272px;
        border-radius: 8px;
        background:  url("@/assets/factoid-footer.png") no-repeat top;
        background-size: contain;
      }

      &-text {
        width: 100%;
        font-size: 16px;
        text-align: center;
        margin-top: 20px;
        color: #ffffff;
        background-image: linear-gradient(94.12deg, #34b0db 15.25%, #87ec58 60.99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .contacts {
      width: 100%;
      height: 300px;

      &__title {
        font-size: 20px;
        background-color: #fff;
        background-image: linear-gradient(94.12deg, #63afff 15.25%, #ffffff 60.99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 20px;
      }

      &__address {
        font-family: 'Montserrat-Regular';
        letter-spacing: 1.04fr;
        margin-bottom: 18px;
      }
    }
    .links {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 20px;
        background-color: #fff;
        background-image: linear-gradient(94.12deg, #63afff 15.25%, #ffffff 60.99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 20px;
      }

      &__link {
        color: white;
        font-family: 'Montserrat-Regular';
        font-size: 15px;
        letter-spacing: 1.04fr;
        margin-bottom: 18px;
      }
    }
  }
</style>