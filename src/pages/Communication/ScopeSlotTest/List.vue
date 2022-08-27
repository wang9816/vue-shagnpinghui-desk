<template>
  <ul>
<!--
    <li v-for="(item, index) in todos" :key="index" :class="{isComplete:item.isComplete}">{{item.text}}</li>
-->
<!--    <li v-for="(item, index) in todos" :key="index" :class="{isComplete:index%2===0}">{{item.text}}</li>-->
    <li v-for="(item, index) in todos" :key="index" :style="{color:index%2===0?'blue':'pink'}">{{item.text}}</li>
  </ul>
</template>

<script>
export default {
  name:'List',
  props: {
    todos: Array
  }
}
</script>
<style lang="less" scoped>
.isComplete{
  color: #cb2727;
}
ul{
  font-size: 20px;
}
</style>