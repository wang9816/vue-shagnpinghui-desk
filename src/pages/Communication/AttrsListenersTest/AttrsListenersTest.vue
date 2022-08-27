<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
<!--    本质就是父组件中给
子组件传递的所有属性组成的对象及自定义事件方法组成的对象-->
<!--    <el-button type="primary" icon="el-icon-plus" size="mini"></el-button>
    <el-button type="warning" icon="el-icon-edit"></el-button>-->
    <HintButton type="danger" icon="el-icon-plus" title="添加" @xxx="testx"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from "@/pages/Communication/AttrsListenersTest/HintButton";
  export default {
    name: 'AttrsListenersTest',
    components:{
      HintButton
    },
    methods: {
      testx(){

        console.log(1111111111111111)
      }
    },
  }
</script>
