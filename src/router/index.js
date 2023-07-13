// 路由第一步引入组件
import VueRouter from 'vue-router'
// 调用组件
Vue.use(VueRouter)
// 引用vue组件
import Vue from 'vue'

// 引入要跳转的界面组件
import Home from '../pages/Home.vue'
import Test from '../pages/Test.vue'
import Homa from '../pages/Homa.vue'

const Urz = () => import ('../pages/Urz.vue')


// 创建变量routes
const routes = [
    {
        path:'',
        //没指定路径的话默认跳转到这里，redirect重定向
        redirect:'/test',
    },
    {
        path:'/home',
        name:'',
        component:Home,
       
    },
    {
        path:'/test',
        name:'',
        component:Test,
        Children: [],
    },
    {
        path:'/homa',
        component:Homa,
        children: [
            {
                path:'urz/:name1',
                component:Urz
            },
        ],
    },
    {
        // 懒加载的写法
        path:'/findcolleague',
        component:()=>import ('../pages/FindColleague.vue'),
    },
    {
        // 懒加载的写法
        path:'/enter',
        component:()=>import ('../pages/Enter.vue'),
    },
]

// 创建 VueRouter配置函数
const router = new VueRouter({
    // 引入变量routes
     routes: routes,
    //  指定路由的模式
     mode:'history',
})

// 暴漏
export default router