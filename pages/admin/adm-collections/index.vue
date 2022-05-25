<template>
  <div class="page">
    <v-btn
      class="ml-4 mt-4"
      color="primary"
      @click="openDialogCreateCollection"
    >
      Добавить тип продукции
    </v-btn>
    <section v-if="collections.length > 0" class="collections">
      <article
        v-for="(item, index) in collections"
        :key="index"
        class="collection"
      >
        <h4>
          Тип: 
          <span class="collection__title">{{ item.name }}</span>
        </h4>
        <p 
          class="collection__of-things"
        >Продукций: {{ item.products.length }}
        </p>
        <div class="collection__control">
          <button 
            class="collection__control-delete"
            @click="deleteCollections(item.id)"
          >Удалить</button>
          <button
            @click="goToDetailCategory(item.id)"
          >Изменить</button>
        </div>
      </article>
    </section>
    <h4 v-else class="no-match">Нет ни одной коллекции</h4>
    <app-dialog
      v-if="isDialogCreateCollection"
      ref="dialog"
      :max-width="680"
      :value="isDialogCreateCollection"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogCreateCollection"
    >
      <template #content>
        <dialog-create-collection
          v-click-outside="closeDialogCreateCollection"
          @closeDialog="closeDialogCreateCollection"
        />
      </template>
    </app-dialog>
  </div>
</template>

<script>

export default {
  asyncData({ redirect, $cookies, store }) {
    if ($cookies.get("jwt_token")) {
      store.commit("admin/SET_JWT_TOKEN", $cookies.get("jwt_token"));

      store.dispatch("admin/getAllCollection");
    } else redirect(`/admin`);
  },
  layout: "adm",
  components: {
    AppDialog: () => import("@/components/base/AppDialog"),
    DialogCreateCollection: () =>
      import("@/components/dialogs/DialogCreateCollection"),
  },
  computed: {
    collections() {
      return this.$store.state.admin.collections;
    },
  },
  data: () => ({
    isDialogCreateCollection: false,
  }),
  methods: {
    goToDetailCategory(idCollection) {
      this.$router.push(`/admin/adm-collections/${idCollection}`)
    },
    closeDialogCreateCollection() {
      this.isDialogCreateCollection = false;
    },
    openDialogCreateCollection() {
      this.isDialogCreateCollection = true;
    },
    deleteCollections(idCollection) {
      this.$store.dispatch('admin/deleteCollections', idCollection)
    }
  },
};
</script>
<style lang="scss" scoped>
.collections {
  max-width: calc(100% - 30px);
  margin: 60px auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  .collection {
    width: 300px;
    min-height: 130px;
    height: initial;
    box-shadow: 0px 4px 10px #e5e5e5;
    border-radius: 8px;
    margin-right: 30px;
    padding: 20px;
    transition: all 250ms ease-in-out;

    &:hover {
      transition: all 250ms ease-in-out;
      transform: translateY(-8px);
    }

    &__title {
      color: blueviolet;
    }
    
    &__of-things {
      margin-top: 10px;
    }
    
    &__control {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;

      &-delete {
        color: red;
        margin-right: 15px;
      }
    }
  }
}
  .no-match {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 30px;
    margin-left: 20px;
  }
  
</style>
