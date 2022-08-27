<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1($event)" style="width: 100px;height: 60px;background-color: #e1a9a9;color: #ffffff;">
      test1
    </button>
<!--    .native 作用于根元素之上,用到了事件的委派-->
    <Event1 @click.native="test2($event)"></Event1>

    <hr>
    <hr>
<!--     此自定义事件 添加于html标签上无意义-->
    <button @xxx="test3($event)">test3</button>
    <Event2 @click="test4($event)"></Event2>
    <Event2 @xxx="test4($event)"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
      test1(event){
        console.log(event.target.innerHTML);
      },
      test2(event){
        console.log(event.target.innerHTML);
      },
      test3(event){
        console.log(event);
      },
      test4(event){
        console.log(event);
      }
    }
  }
</script>
