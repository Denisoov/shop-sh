<template>
  <div class="footer">
    <div class="footer__container">

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
      display: flex;
      justify-content: space-between;
      width: calc(100% - 10%);
      height: calc(100% - 40%);
      padding: 30px;
      margin-top: 6%;
      font-size: 32px;
      color: aliceblue;
      border: 2px solid green;
    }
  }
</style>