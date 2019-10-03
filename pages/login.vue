<template>
  <div>
    <h1 id="title">login</h1>
    <login-form :handle-form-submit="postLogin" />
  </div>
</template>

<script>
import LoginForm from '~/components/Login/LoginForm'
import { EventBusMessage } from '~/components/Message/EventBusMessage'

export default {
  components: {
    LoginForm
  },
  created() {
    console.log(this.$store.state)
  },
  props: ['raiseAlert'],
  methods: {
    postLogin() {
      const randomBoolean = Math.random() >= 0.5
      if (randomBoolean) {
        EventBusMessage.$emit('setMessageBus', 'logged in!')
      } else {
        EventBusMessage.$emit('setMessageBus', 'failed to login')
      }
    }
  }
}
</script>
