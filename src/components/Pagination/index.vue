<template>
  <div class="pagination">
    <button :disabled="myCurrentPage===1"
    @click="setCurrentPage(myCurrentPage-1)"
    >上一页</button>

    <button v-if="CurrentPageAbout.start>1"
            @click="setCurrentPage(1)"
    >1</button>

    <button disabled v-if="CurrentPageAbout.start>=3">···</button>

    <button v-for="item in arrCurrentPageAbout"
            :class="{active: item===myCurrentPage}"
            @click="setCurrentPage(item)"
    >{{item}}</button>

    <button v-if="CurrentPageAbout.end<totalPages-1">···</button>

    <button v-if="CurrentPageAbout.end<totalPages"
            @click="setCurrentPage(totalPages)"
    >{{totalPages}}</button>
    <button
        @click="setCurrentPage(myCurrentPage+1)"
        :disabled="myCurrentPage===totalPages"
    >下一页</button>

    <button disabled style="margin-left: 30px">共 {{itemTotal}} 条</button>
  </div>
</template>

<script>
export default {
  name: "MyPagination",

  props: {
    currentPage:{
      type:Number,
      default:1
    },
    itemTotal:{
      type:Number,
      default:0
    },
    quantityPerPage:{
      type:Number,
      default:1
    },
    consecutivePageNumbers:{
      type:Number,
      default:5,
      validator(value) {
          return value%2===1
      }

    }


  },

  data () {
    return {
      myCurrentPage:this.currentPage || 1
    }
  },

  watch: {
      currentPage(value){
        this.myCurrentPage = value
      }
  },

  computed: {
    totalPages(){
      const {itemTotal,quantityPerPage} = this

      return Math.ceil(itemTotal/quantityPerPage)
    },
    arrCurrentPageAbout(){
      const {start,end} = this.CurrentPageAbout
      const arr = []
      for (let i = start; i <end+1 ; i++) {
        arr.push(i)
      }
      return arr
    },
    CurrentPageAbout(){
      const {myCurrentPage,totalPages,consecutivePageNumbers} = this
      let start,end
      start = myCurrentPage - Math.floor(consecutivePageNumbers/2)
      if(start<1){
          start=1
      }
      end = start+consecutivePageNumbers-1
      if(end>totalPages){
          end = totalPages
      }
      return{
        start,end
      }
    }

  },

  methods: {
    setCurrentPage(page){
      if(page===this.myCurrentPage) return
      this.myCurrentPage=page
      this.$emit('currentChange',page)
    }

  }

}
</script>

<style lang="less" scoped>
.pagination {
  width: 1200px;
  margin: 0 auto;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>