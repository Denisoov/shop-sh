<template>
  <section class="preview">
    <div class="preview__container">
      <div class="preview__title">
        <h1 class="preview__title-text">Эксклюзивная авторская <span style="color: #c32929" >вышивка</span> на одежде, которая не оставит вас равнодушным</h1>
        <p class="preview__title-reference">коллекция на ваш вкус</p>
        <nuxt-link class="preview__title-link" to="/catalog">
          <span>&#8594;</span>
          В каталог
        </nuxt-link>
        <div class="preview__title-line" />
      </div>
      <div class="preview__factoid" />
    </div>
  </section>
</template>

<style scoped lang="scss">
 .preview {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 880px;
    background: url('@/assets/background-preview.png') no-repeat top;
    background-size: cover;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(100% - 10%);
      height: calc(100% - 50%);
      padding: 0 30px 30px 30px;
      margin-bottom: 10%;
      font-size: 32px;
      color: aliceblue;
      border-right: 6px dotted white;

    }

    &__title {
      width: 50%;

      &-text {
        text-shadow: 5px 5px #0c1925;
        line-height: 2em;
      }

      &-line {
        width: 100%;
        margin-top: 8%;
        border-top: 6px dotted white;
      }
      
      &-reference {
        font-size: 18px;
        font-family: "Montserrat-Medium";
        margin-top: 30px;
        margin-bottom: 20px;
      }
      &-link {
        text-decoration: none;
        color: white;
        background: linear-gradient(94.12deg, #34b0db 15.25%, #582ed9 60.99%);
        padding: 8px 12px;
        box-shadow: 2px 2px 0px #582ed9;
      }
    }

    &__factoid {
      width: 400px;
      height: 400px;
      border-radius: 8px;
      background:#c32929 url('@/assets/factoid.png') no-repeat top;
      background-size: contain;
      border: 1px solid;
      box-shadow: 9px 9px 0px rgb(195 41 41);
    }
    
}
</style>