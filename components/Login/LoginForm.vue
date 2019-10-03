<template>
  <div>
    <form @submit.prevent="handleFormSubmit">
      <input id="username" v-model="username" type="text" required />
      <input id="password" v-model="password" type="password" />
      <input id="submit" type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  props: ['handleFormSubmit'],
  data() {
    return {
      username: null,
      password: null
    }
  },
  computed: {
    isFormValid() {
      return ![this.username, this.password].some((el) => !el)
    }
  }
}
</script>
