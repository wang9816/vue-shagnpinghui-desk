<template>
  <div>
    小明的爸爸现在有{{money}}元
    
    <h2>不使用sync修改符</h2>
<!--    父组件自定义 @update:XXX
        子组件emit

-->
<!--    <Child :money="money" @update:money="money=$event"></Child>-->
    <h2>使用sync修改符</h2>
<!--    上一写法的简写-->
<!--    <Child :money.sync="money" ></Child>-->
    <h2>使用v-model修改符</h2>
    <Child2 :value="money" @input="money = $event"></Child2>
    <Child2 v-model="money"></Child2>
    <hr>
    <el-button @click="test1" type="primary" icon="el-icon-edit">点击</el-button>
    <el-button @dbclick.native="test2($event)" type="primary" icon="el-icon-delete">点击</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    components: {
      Child,
      Child2
    },
    data(){
      return {
        money:1000
      }
    },
    methods:{
      test1(event){
        console.log(event);
      },
      test2(event){
        console.log(event);
      }
    }
  }
</script>
