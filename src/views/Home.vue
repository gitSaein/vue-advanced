<template>
  <div class="home">
    <FormBinding msg="Form Binding Example"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormBinding from '@/components/FormBinding.vue'

export default {
  name: 'home',
  components: {
    FormBinding
  }
}
</script>
