/*
* Contains the request functions of all interfaces of the application
* */
import ajax from "@/api/ajax";
import mockAjax from "@/api/mockAjax";

/*
* Home three-level list:
* /api/product/getBaseCategoryList
* get
* */
export function reqCategoryList() {
    /* return ajax.get('/product/getBaseCategoryList')*/
    return ajax({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

/*
* Homepage carousel
* api/cms/banner get
* */
export function reqBannerList() {
    return ajax({
        url: '/cms/banner',
        method: 'get'
    })
}

export function reqRecommends() {
    return mockAjax({
        url: '/recommends',
        method: 'get'
    })
}

export function reqFloors() {
    return mockAjax({
        url: '/floors',
        method: 'get'
    })


}

/*Search
* /api/list
* POST
* */
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

/*get detailed data
* /api/item/{ skuId }
* get
* */
export const reqDetailInfo = (skuId) => {
    return ajax({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

/*
* add shopping cart and fix num
*  /api/cart/addToCart/{ skuId }/{ skuNum }
* post
* */
export const reqAddOrUpdateCart = (skuId, skuNum) => {
    return ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}

/*get shopcart list
* /api/cart/cartList
* get
* */
export const reqCartList = () => {
    return ajax({
        url: '/cart/cartList',
        method: 'get'
    })
}

/*
*change cart checked
* /api/cart/checkCart/{skuID}/{isChecked}
* get
* */
export const reqUpdateCartListChecked = (skuId, isChecked) => {
    return ajax({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}

export const reqCheckCartItems = (skuIdList, isChecked) => ajax.post(`/cart/batchCheckCart/${isChecked}`,skuIdList)

/*
del cart
* /api/cart/deleteCart/{skuId}
* DELETE
* */
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)
export const reqDeleteCartItems = (skuIdList) => ajax.delete(`/cart/batchDeleteCart`,{
    data:skuIdList
})




/*
  Register
* /api/user/passport/register
*POST
* */
export const reqUserRegister = (userInfo) => {
    return ajax({
        url:'/user/passport/register',
        method:'post',
        data:userInfo
    })
}

/*
Register verification code
* /api/user/passport/sendCode/{phone}
* get
* */
export const reqGetVerificationCode = phone=>{
    return ajax({
        url:`/user/passport/sendCode/${phone}`,
        method:'get'
    })
}

/*
login
* /api/user/passport/login
* post
* */
export const reqUserLogin = (data) => {
    return ajax({
        url:`/user/passport/login`,
        method:'post',
        data:data
    })
}
/*
*Obtain user information Carry the token to request user information from the server
* /api/user/passport/auth/getUserInfo
* get
* */
export const reqUserInfo = () => ajax('/user/passport/auth/getUserInfo')

/*
logout
* api/user/passport/logout
* get
* */
export const reqUserLogout = () => {
    return ajax({
        url:'/user/passport/logout',
        method:'get'
    })
}

/*
* Get order transaction page information
* /api/order/auth/trade
* get
* */
export const reqTradeInfo=() => {
    return ajax({
        url:'/order/auth/trade',
        method:'get'
    })
}

/*
* submit order
* /api/order/auth/submitOrder?tradeNo={tradeNo}
* post
* */
export const reqSubmitOrder = (tradeNo,tradeData) => {
    return ajax({
        url:`/order/auth/submitOrder`,
        method:'post',
        params: {tradeNo},
        data:tradeData
    })
}

/*
* Get order payment information
* /api/payment/weixin/createNative/{orderId}
* get
* */
export const reqPayInfo = (orderId) =>{
    return ajax({
        url:`/payment/weixin/createNative/${orderId}`,
        method:'get'
    })
}

/*
* check order payment status
* /api/payment/weixin/queryPayStatus/{orderId}
* get
* */
export const reqOrderPaymentStatus = (orderId) =>{
    return ajax({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'get'
    })
}

/*
*view order letter tabbed list
* /api/order/auth/{page}/{limit}
* */
export const reqMyOrderInfo = (page,limit) => {
    return ajax({
        url:`/order/auth/${page}/${limit}`,
        method:'get'
    })
}
