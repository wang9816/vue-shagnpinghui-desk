import { v4 as uuidv4 } from 'uuid';
let TOKEN_KEY = 'TOKEN_KEY'
// uuid 获取唯一的标识:
//      first:localstorage  or new creat then to localstorage
function getUserTempId(){
    let userTempId = localStorage.getItem('USERTEMPID_KEY')

    if(!userTempId){
        userTempId = uuidv4()
        localStorage.setItem('USERTEMPID_KEY',userTempId)
        return userTempId

    }else {
        return userTempId
    }


}
function setToken(token){
    localStorage.setItem(TOKEN_KEY,token)

}
function getToken(){
    return  localStorage.getItem(TOKEN_KEY)

}
function removeToken(){
    localStorage.removeItem(TOKEN_KEY)

}
export {
    getUserTempId,
    setToken,
    getToken,
    removeToken

}