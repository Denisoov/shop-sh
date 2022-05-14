<template>
    <v-card class="auth">
      <h4>Авторизация</h4>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="dataForm.email"
          :rules="emailRules"
          label="Логин"
          required
        ></v-text-field>

        <v-text-field
          v-model="dataForm.password"
          :rules="passRules"
          label="Пароль"
          required
        ></v-text-field>
        <div class="control">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mt-5"
            @click="signInAdmin"
          >
            Войти
          </v-btn>
        </div>
      </v-form>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      dataForm: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'Поле обязательное',
        v => /.+@.+\..+/.test(v) || 'Почта должна быть валидной',
      ],
      passRules: [
        v => !!v || 'Поле обязательное',
      ],
    }),
    methods: {
      signInAdmin () {
        if (!this.$refs.form.validate()) return

        this.$store.dispatch('admin/signIn', this.dataForm)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .auth {
    padding: 20px;
  }
  form.v-form {
    width: 400px;

    .control {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>