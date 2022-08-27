import {
    reqAddOrUpdateCart,
    reqCheckCartItems,
    reqDeleteCart,
    reqDeleteCartItem,
    reqDeleteCartItems,
    reqUpdateCartListChecked
} from "@/api";
import {reqCartList} from "@/api";

const state = {
    /*预防控制台输出error*/
    shopCartList:[
        {cartInfoList:[]}
    ]


}
const mutations = {
    RECEIVE_SHOPCART_LIST(state,shopCartList){
        state.shopCartList = shopCartList

    }
}
const actions = {
   async addOrUpdateCart({commit},{skuId,skuNum}){

       const result = await reqAddOrUpdateCart(skuId,skuNum)
       if(result.code===200){
           return 'ok'
       }else {
           return Promise.reject(new Error('failed'))
       }
   },

    async getCartList({commit}){
       const result = await reqCartList()
        if(result.code === 200){
            let shopCartList = result.data
            commit('RECEIVE_SHOPCART_LIST',shopCartList)
        }
    },
    async updateCartCartChecked({commit},{skuId,isChecked}){
       const result = await reqUpdateCartListChecked(skuId,isChecked)
        if(result.code===200){

            return 'ok'
        }else {
            return Promise.reject(new Error('faild'))
        }

    },
    async updateCartAllChecked({state,dispatch},isCheck){
        // 确定最新的状态值
        const isChecked = isCheck ? 1 : 0
        // 得到所有选中购物项的skuId的数组
        const skuIdList = []
        state.shopCartList.forEach(item => {
            item.cartInfoList.forEach(cItem => {
                if (cItem.isChecked !== isChecked) {
                    skuIdList.push(cItem.skuId)
                }
                console.log('skuIdList', skuIdList)

            })
        })
        const result = await reqCheckCartItems(skuIdList, isChecked)
        if (result.code!==200) {
            throw new Error('切换购物项状态失败')
        } else {
            dispatch('getCartList')
        }
    },
    async deleteCartItem({dispatch,commit},skuId){
        const result = await reqDeleteCartItem(skuId)
       if(result.code===200 ){
           dispatch('getCartList')
            return 'ok'
       }else {
         return Promise.reject(new Error('删除失败'))
       }
    },
    async cartDeleteSelectedItems({state,dispatch}){
        const skuIdList = []
        state.shopCartList.forEach((item) => {
            item.cartInfoList.forEach(CItem=>{
                if(CItem.isChecked===1){
                    skuIdList.push(CItem.skuId)
                }
            })
        })
        const result = await reqDeleteCartItems(skuIdList)
        if(result.code===200){
            dispatch('getCartList')
        }else {
            return Promise.reject(new Error('删除失败'))
        }
    },
    async cartDeleteSelectedItemScenario2({commit,dispatch,state}){
       let promises = []
        state.shopCartList.forEach((item) => {
            item.cartInfoList.forEach(CItem=>{
                if(CItem.isChecked===1){
                   let promise = dispatch('deleteCartItem',CItem.skuId)
                    promises.push(promise)
                }else {return}

            })
        })
        return Promise.all(promises)
    }
}

const getters = {


}

export default {
    state,
    mutations,
    actions,
    getters
}
