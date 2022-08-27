import { removeToken,getToken, getUserTempId, setToken} from "@/utils/userabout"
import {reqGetVerificationCode, reqUserInfo, reqUserLogin, reqUserLogout, reqUserRegister} from "@/api";
const state = {
    userTempId:getUserTempId(),
    code:'',
    token:getToken(),//get token from localStorage
    userInfo:{},
}
const mutations = {
    GETVCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    RECEIVE_USER_INFO(state,userInfo){
        state.userInfo = userInfo
    },
    //reset userInfo and token
    RESET_USERINFO(state){
        state.userInfo = {}
        state.token = ''
    }



}
const actions = {
    async userLogout({commit}) {
        const result = await reqUserLogout()
        if(result.code===200){
            removeToken()
            commit('RESET_USERINFO')
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    async UserRegister({commit},userInfo) {
        const result = await reqUserRegister(userInfo)
        if(result.code===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async getVerificationCode({commit},phone){
        const result = await reqGetVerificationCode(phone)
        //console.log(result);
        if(result.code===200){
            commit('GETVCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async UserLogin({commit},data){
        const result = await reqUserLogin(data)

        if(result.code===200){
            commit('USERLOGIN',result.data.token)
            setToken(result.data.token)//important
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async getUserInfo ({commit}) {
       try {
           const result = await reqUserInfo()
           if (result.code===200) {
               const userInfo = result.data

               commit('RECEIVE_USER_INFO', userInfo)
               return 'ok'
           }
       }catch(error){
          alert('获取用户信息错误')
       }
    },
    async resetUserInfo({commit}){
        removeToken()
        commit('RESET_USERINFO')
    }


}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}