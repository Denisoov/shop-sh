<script>

export default {
  data: () => ({ titleCollection: null }),
  methods: {
    async createNewCollection() {
      await this.$store.dispatch("admin/createNewCollection", {
        name: this.titleCollection,
      });

      await this.$emit("closeDialog");

      this.titleCollection = null;
    },
  },
};
</script>

<template>
  <div>
    <h3>Добавление нового баннера</h3>
    <div class="form">
      <v-text-field 
        v-model="titleCollection"
        placeholder="Наименование колекции"
      />
    </div>
    <div class="control">
      <v-btn
        :disabled="!titleCollection"
        @click="createNewCollection"
        class="btn-add"
        color="deep-purple accent-4"
        >Добавить
      </v-btn>
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
