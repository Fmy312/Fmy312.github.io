import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
/* 懒加载 */
const Home =()=>import ('../views/home/Home')
const Category =()=>import ('../views/category/Category')
const Profile =()=>import ('../views/profile/Profile')
const Cart =()=>import ('../views/cart/Cart.vue')
const Detail =()=>import ('../views/detail/Detail.vue')
const router=new VueRouter({
    mode:'history',
    routes:[

        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,

        },
        {
            path:'/category',
            component:Category
        },{
            path:'/profile',
            component:Profile
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/detail/:id',
            component:Detail
        }
    ]
})
export default router
