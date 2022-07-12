<template>
  <div>
    <h2>
      Search组件
    </h2>
    <h3>
      {{ $route.params.keyword }}<br>
      {{ $route.query.keyword }}
    </h3>
    <h4>

    </h4>
  </div>
</template>

<script>

export default {
  name:"Search",
  components:{},
  mounted() {},
  data(){
    return {}
  },
  methods:{},
  watch:{}
}

</script>

<style scoped>

</style>