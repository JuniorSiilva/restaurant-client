<template>
  <q-input
    v-model="password"
    filled
    :type="isPwd ? 'password' : 'text'"
    label="Senha"
    :error-message="errors[0]"
    :error="!!errors[0]"
  >
    <template v-slot:append>
      <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    value: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
})
export default class Password extends Vue {
  isPwd = true

  value!: string

  get password() {
    return this.value
  }

  set password(val) {
    this.$emit('input', val)
  }
}
</script>

<style></style>
