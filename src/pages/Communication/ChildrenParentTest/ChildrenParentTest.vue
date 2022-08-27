<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowMoneyM(100)">找小明借钱100</button><br>
    <button @click="borrowMoneyH(150)">找小红借钱150</button><br>
    <button @click="borrowMoneyAll(200)">找所有孩子借钱200</button><br>
    
    <br>
    <Son ref="son" />

    <br>
    <Daughter ref="dau" />
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'
import mymixin from "@/pages/Communication/ChildrenParentTest/mymixin";
export default {
  mixins:[mymixin],
  name:'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrowMoneyM(money){
      this.money+=money
      this.$refs.son.money-=money
    },
    borrowMoneyH(money){
      this.money+=money
      this.$refs.dau.money-=money
    },
    borrowMoneyAll(money){
      this.money+= money*2
      /*this.$refs.son.money-=money
      this.$refs.dau.money-=money*/
      //慎用 $children 不用于子元素的单个修改
      this.$children.forEach(item=>item.money-=200)
      },
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
