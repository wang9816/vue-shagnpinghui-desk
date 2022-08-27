<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="msg">
    <span>
      {{msg}}
    </span>
    <br>
    <br>
    <br>
<!--    v-model常用在表单累的元素,也可以用于组件标签:
        1.父组件>子组件
-->
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <span>
      {{msg}}
    </span>
<!--    <CustomInput :value="msg" @input="msg = $event"></CustomInput>-->
    <CustomInput v-model="msg"></CustomInput>
    <el-input  v-model="msg"></el-input>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data(){
      return{
        msg:'MODEL'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
