<template>
    <div class="watch">
      <p>{{message}}</p>
      <input type="number" min="1" max="10000000" v-model="watchedTest">
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
            this.addCommas(this.watchedTest)
        },
        addCommas(x) {
            this.watchedTest =  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>

<style>

</style>
