import {reqTradeInfo} from "@/api";

const state = {
    tradeInfo:{},
    userAddressList:[
        {userAddress:''}
    ]
}
const mutations = {
        RECEIVE_TRADEINFO(state,tradeInfo){
            state.tradeInfo = tradeInfo
        }
}
const actions = {
   async getTradeInfo({commit}){
       const result = await reqTradeInfo()
       if(result.code===200){
           commit('RECEIVE_TRADEINFO',result.data)
       }
   }

}
const getters = {
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state){
        return state.tradeInfo.userAddressList || []
    },
    tradeInfo(state){
        return state.tradeInfo || {}
    }

}
export default {
    state,
    mutations,
    actions,
    getters
}