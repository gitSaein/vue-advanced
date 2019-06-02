<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal">+</button-counter>
  </div>
</template>
<script>
import ButtonCounter from '../components/ButtonCounter'
export default {
  components: {
    ButtonCounter
  },
  data: function() {
    return {
      total: 0
    }
  },
  methods: {
    incrementTotal: function() {
      this.total += 1
    }
  }
}
</script>