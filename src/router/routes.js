/*import Home from "@/pages/Home"
import Search from "@/pages/Search";*/
const Home = () => import('@/pages/Home')
const Search =() => import('@/pages/Search')
const Register = () => import("@/pages/Register")
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import addCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import PaySuccess from "@/pages/PaySuccess";
import Pay from "@/pages/Pay";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";
import localLivingOrder from "@/pages/Center/LocalLivingOrder";
import store from "@/store";
export default [
    {
        path:'/',
        component:Home,
        name:'home'
    },
 

    {
        path:'/Search/:keyword?',
        component:Search,
        name:"search",
        props(route){
            return {
                keyword:route.params.keyword,
                keyword1:route.query.keyword
            }
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }


    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/detail/:skuId',//注册 依据id搜索
        component:Detail,
        meta:{
            isHideFooter:true
        },
        //route exclusive guard
        beforeEnter: (to, from, next) => {
            let token = store.state.user.token
            if(token){
                next('/')
            }else {
                next()
            }
        }

    },
    {
        path:'/addcartsuccess',
        component:addCartSuccess,
        beforeEnter:(to,from,next) => {
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if(skuInfo && skuNum){
                next()
            }else {
                alert('非法操作,即将进入首页');
                next('/')
            }
        }

    },
    {
        path:'/shopcart',
        component:ShopCart,


    },
    {
        path:'/trade',
        component:Trade,
        beforeEnter:(to,from,next) => {
            if(from.path==='/shopcart'){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path:'/pay',
        component:Pay,
        beforeEnter:(to,from,next) => {
            if(from.path==='/trade'){
                next()
            }else{
                next('/')
            }
        }

    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        beforeEnter:(to,from,next) => {
            if(from.path==='/pay'){
                next()
            }else{
                next('/')
            }
        }

    },
    {
        path:'/center',
        component:Center,
        redirect:'/center/myorder',
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'locallivingorder',
                component:localLivingOrder
            },
           /* {
                path:'',
                redirect:'myorder'
            }*/
        ]

    },
    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
            {
                path: 'event',
                component: () => import('@/pages/Communication/EventTest/EventTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'model',
                component: () => import('@/pages/Communication/ModelTest/ModelTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'sync',
                component: () => import('@/pages/Communication/SyncTest/SyncTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'attrs-listeners',
                component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'children-parent',
                component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'scope-slot',
                component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
                meta: {
                    isHideFooter: true
                },
            }
        ],
    },

]