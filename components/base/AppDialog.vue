<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    maxWidth: {
      type: Number,
    }
  },
  methods: {
    closeDialog() {
      this.$emit('input', false)
    },
  },
})
</script>
<template>
  <v-dialog
    ref="dialog"
    v-bind="$attrs"
    :max-width="maxWidth"
    :value="value"
    v-on="$listeners"
    @keydown.esc="closeDialog"
  >
    <v-card class="dialog-card">
      <slot 
        @closeDialog="closeDialog" 
        name="content" 
      />
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .dialog-card {
    padding: 20px;
  }
</style>
