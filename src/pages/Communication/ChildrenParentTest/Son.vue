<template>
  <div style="background: #ccc; height: 50px;">
    <h3>儿子小明: 有存款: {{money}}</h3>
    <button @click="moneyOut(50)">给BABA钱: 50</button>
  </div>
</template>

<script>
import mymixin from "@/pages/Communication/ChildrenParentTest/mymixin";
export default {
  //不带''
  mixins:[mymixin],
  name:'Son',
  data () {
    return {
      money: 30000
    }
  },


}
</script>
