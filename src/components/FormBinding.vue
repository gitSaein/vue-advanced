<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>{{ checkedNames }}</span>
    <br>
    <select v-model="selected">
      <option disabled value="">select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>{{ selected }}</span>
    <br>
    <h4>props emit</h4>
    <child-span message='하나'></child-span>
    <child-span message='둘'></child-span>
  
  </div>
</template>

<script>
import ChildSpan from './Span'
export default {
  name: 'HelloWorld',
  components:{
    ChildSpan
  },
  props: {
    msg: String
  },
  data:function() { 
    return {
      checkedNames: [],
      selected: ""
    }
  }
}
</script>
