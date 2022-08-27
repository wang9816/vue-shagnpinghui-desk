<template>
  <div>
    <a href="javascript:;" :title="title">
      <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
  </div>
</template>

<script>

export default {
  name:"",
  props:['title'],
  mounted() {
    //this.$attrs接收props,class之外的数据
    console.log(this.$attrs);
    //接收@XXX事件...父组件-->子组件的所有的自定义事件
    console.log(this.$listeners);
  }

}

</script>

<style scoped>

</style>