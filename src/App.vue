<template>
  <div>
    <Header></Header>

      <router-view></router-view>


    <Footer v-show="!$route.meta.isHideFooter" ></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"



export default {
  name: "App",
  mounted() {
    /*reqCategoreryList().then((result) => {
      console.log(result);
    })*/

    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')


  },
  components: {
    Footer,
    Header
  }
}
</script>
