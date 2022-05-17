<template>
  <div class="page">
    <div class="wrapper">
      <section class="about" >
        <h2>О компании</h2>
        <article>
          <p>
            <strong>«SHOP»</strong> – ведущий российский ритейлер модной одежды. Компания управляет брендами befree, ZARINA, 
            LOVE REPUBLIC, SELA выполняя полностью весь цикл деятельности модного бизнеса от моделирования до распределения продаж и продвижения.
          </p>
          <p>
            Ежедневно в магазинах компании в России и за рубежом осуществляют покупки более 100 000 человек. 
            Melon Fashion Group успешно развивается и продолжает расширять географию присутствия.
          </p>
          <p>
           У каждого из представленных брендов есть собственная стратегия развития и своя целевая аудитория, 
           что позволяет эффективно представлять Melon Fashion Group в основных сегментах mass market.
          </p>
        </article>
        <article>
          <h2>Контакты</h2>
          <p>Телефон службы поддержки: 8-800-000-00-00</p>
          <p>Звонок по России бесплатный ежедневно с 00:00 до 23:59 по московскому времени.</p>
          <p>Электронная почта: zarina@lmexpress.ru</p>
          <p>PR-менеджер бренда Zarina, Севиль Аскерова: askerovasr@melonfashion.ru</p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style scoped lang="scss">
.page {
  width: 100%;
  max-width: calc(100% - 10%);
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  background-image: url("../assets/DRESSCODE.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center center;
  background-attachment: scroll;
}
.wrapper {
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
h2 {
  font-size: 34px;
  font-family: 'Montserrat-SemiBold', 'sans-serif';
  margin: 30px 0;
}
p {
  font-size: 18px;
  font-family: 'Montserrat-Medium', 'sans-serif';
  margin-bottom: 20px;
}
</style>
