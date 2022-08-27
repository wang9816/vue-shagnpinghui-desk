<template>
  <div>

    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend

    ></today-recommend>
    <Rank></Rank>
    <like></like>
    <floor
        v-for="floor in floors"
        :key="floor.id"
        :floor="floor"
    ></floor>

    <brand></brand>


  </div>
</template>

<script>
import {mapState} from "vuex";
import TypeNav from "@/components/TypeNav";
import ListContainer from "@/pages/Home/ListContainer"
import TodayRecommend from "@/pages/Home/TodayRecommend"
import Brand from "@/pages/Home/Brand"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor";
import Rank from "@/pages/Home/Rink"

export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Floor,
    Brand,
    Like,
    Rank,
    TypeNav

  },
  created() {
    this.$store.dispatch('getUserInfo')
  },
  mounted() {
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getRecommends')


  },
  computed: {
    ...mapState({
      floors: state => state.home.floors
    })
  },
  methods: {}


}

</script>

<style scoped>

</style>