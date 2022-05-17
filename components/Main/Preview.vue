<template>
  <section class="preview">
    <div class="preview__container">
      <div class="preview__title">
        <h1 class="preview__title-text">Эксклюзивная авторская вышивка на одежде, которая не оставит вас равнодушным</h1>
        <div class="preview__title-line"></div>
      </div>
      <div class="preview__factoid">

      </div>
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
      width: calc(100% - 10%);
      height: calc(100% - 50%);
      padding: 30px;
      margin-bottom: 10%;
      font-size: 32px;
      color: aliceblue;
      border-right: 6px dotted white;

    }

    &__title {
      width: 50%;
      text-shadow: 5px 5px #0c1925;

      &-line {
        width: 100%;
        margin-top: 20%;
        border-top: 6px dotted white;
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