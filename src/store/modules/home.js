//home moudel

import {reqCategoryList, reqBannerList, reqRecommends, reqFloors} from "@/api";
const state = {
    categoryList:[],
    bannerList:[],
    recommends:[],
    floors:[]


}
const mutations = {
    //category list
  RECEIVE_CATEGORY_LIST(state,categoryList){
     state.categoryList = categoryList
  },
    //banner list
    RECEIVE_BANNER_LIST(state,bannerList){
      state.bannerList = bannerList
    },

    /*mock test*/
    RECEIVE_RECOMMENDS_LIST(state,recommends){
        state.recommends = recommends
    },
    RECEIVE_FLOORS_LIST(state,floors){
        state.floors = floors
    }
}
const actions = {
    async getCategoryList({commit}) {
        const result = await reqCategoryList()

        if(result.code===200){
            const categoryList = result.data.splice(0,15)
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }

    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code===200){
            const bannerList = result.data

            commit('RECEIVE_BANNER_LIST',bannerList)
        }
    },

    async getRecommends({commit}) {
        const result = await reqRecommends()

        if(result.code===200){
            const recommends = result.data

            commit('RECEIVE_RECOMMENDS_LIST',recommends)
        }

    },
    async getFloors({commit}) {
        const result = await reqFloors()

        if(result.code===200){
            const floors = result.data

            commit('RECEIVE_FLOORS_LIST',floors)
        }

    },


}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}