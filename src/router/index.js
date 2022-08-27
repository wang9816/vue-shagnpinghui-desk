import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";


Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }

})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

// forward navigation guard

router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    //carry token or not
    if (token) {
        // carry token to login page :refuse and to home page
        if (to.path === '/login') {
            next('/')

        } else {
            // carry token to page(not login)
            let hasUserInfo = !!store.state.user.userInfo.name
            //has userInfo list?
            if (hasUserInfo) {
                //greenLight
                next()


            } else {
                //don't has userInfo list :to get it
                try {
                    await store.dispatch('getUserInfo')
                    //succeed and greenLight
                    next()
                } catch (error) {
                    //get userInfo list failed :token is expired
                    alert('用户信息已过期,请重新登录')
                    //to login page
                    store.dispatch('userLogout')
                    next(`/login?redirect=${to.path}`)
                }
            }
        }
    } else {
        //about payment and trade
        if(to.path.indexOf('/trade')!==-1 || to.path.startsWith('/pay') || to.path.startsWith('/center')){
            next('/login?redirect='+to.path)

        }else {
            next()
        }




    }
})

export default router