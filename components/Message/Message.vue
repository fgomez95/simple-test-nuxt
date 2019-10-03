<template>
  <div v-show="showComponent">
    <p>{{ text }}</p>
    <button @click="dismissMessage">X</button>
  </div>
</template>

<script>
import { EventBusMessage } from './EventBusMessage'
export default {
  data() {
    return {
      text: null
    }
  },
  computed: {
    showComponent() {
      return !!this.text
    }
  },
  created() {
    console.log('created')
    EventBusMessage.$on('setMessageBus', (message) => {
      this.setMessage(message)
    })
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    setMessage(message) {
      this.text = message
    },
    dismissMessage() {
      this.text = null
    }
  }
}
</script>
