<template>
  <section class="about">
    <div class="about__container">
      <div class="about__description">
        <h1 class="about__description-title">Добро пожаловать!</h1>
        <p class="about__description-text" >Привет! Я, Александр! Создатель магазина Shop Store.
          В 2022 году я начал работу с вышивкой.
          Всё началось с малого: работал обычными материалами, на простом оборудовании, в маленькой комнатке.
          А сейчас у нас уже целая команда ,цель которой, чтобы о Shop Store узнало как можно больше людей.</p>
        <p class="about__description-text">Уже более трех лет мы получаем положительные отзывы от наших заказчиков. 
          И видим, что с нашими изделиями все прекрасно спустя долгие годы. Ч
          тобы в этом убедиться, вам просто нужно один раз попробовать!
        </p>
      </div>
      <div class="about__line"></div>
      <div class="about__image"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: initial;
  margin: 120px 0;
  color: black;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 10%);
    height: calc(100% - 50%);
    padding: 30px;
    font-size: 32px;
    color: aliceblue;
  }

  &__description {
    width: 50%;
    color: black;

    &-title {
      font-family: 'Montserrat-SemiBold';
      width: 100%;
      color: #c32929;
      margin-bottom: 40px;
      text-shadow: 6px 6px #c3292921;

    }
    &-text {
      margin-bottom: 20px;
      font-size: 24px;
      font-family: 'Montserrat-Medium';
      color: #041A31;
    }
  }

  &__line {
    width: 1px;
    height: 100%;
    min-height: 400px;
    border-right: 6px dotted #041A31;
  }

  &__image {
    width: 400px;
    height: 400px;
    border-radius: 8px;
    background: url("@/assets/hello.png") no-repeat top;
    background-size: contain;
  }
}
</style>
