export default {
  methods:{
      moneyOut(money){

          console.log(1)
          this.money-=money
          this.$parent.money+=money
      }
  }
}