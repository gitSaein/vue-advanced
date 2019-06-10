<template>
    <div class="watch">
      <p>{{message}}</p>
      <input type="text" v-model="watchedTest">
      {{watchedTest}}
    </div>
</template>

<script>
export default {
    name: 'watch',
    data: function(){
        return {
          message: 'before',
          watchedTest: 'initialize'
        }
    },
    watch:{
        'watchedTest': 'alertWatched'
    },
    methods: {
        alertWatched(){
            alert(this.watchedTest)
        }
    }
}
</script>

<style>

</style>
