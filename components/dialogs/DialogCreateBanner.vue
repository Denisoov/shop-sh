<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'app',
  data: () => ({ image: null }),
  components: {
    PictureInput
  },
  methods: {
    onChangeImage (image) {
      if (image) this.image = image
    },
    async loadNewBanner() {
      await this.$store.dispatch('admin/loadNewBanner', {
        image: this.image
      })

      await this.$emit('closeDialog')

      this.image = null
    }
  }
}
</script>

<template>
  <div>
    <h3>Добавление нового баннера</h3>
    <div class="form">
      <picture-input 
        @change="onChangeImage"
        ref="pictureInput"
        width="880" 
        height="400" 
        :change="'Изменить изображение'"
        accept="image/jpeg,image/png" 
        size="10" 
        :custom-strings="{
          drag: 'Добавить баннер'
        }"
        >
      </picture-input>
    </div>
    <div class="control">
      <v-btn
        :disabled="!image"
        @click="loadNewBanner"
        class="btn-add"
        color="deep-purple accent-4"
      >Добавить</v-btn>
    </div>
  </div> 
</template>

<style scoped lang="scss">
.v-input {
    width: 100%;
    max-width: 100%;
}
.form {
  margin-top: 20px;
}
.control {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .btn-add {
  margin-top: 20px;
  color: white;
}
}
</style>
