## 笔记
## ref属性
    1.被用来给元素或子组件注册引用信息 (id的替代者)
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象 (vc)
    3.使用方式:
        打标识: <h1 ref="xxx">.....</h1> 或<School ref="xxx"x</School>
        获取: this.$refs.xxx



## 配置项props
    功能:让组件接收外部传过来的数据
    (1).传递数据:
        <Demo name="xxx"/>
    (2).接收数据:
        第一种方式(只接收) :
            props:['name']

        第二种方式(限制类型) :
            props:{  name: Nunber  }
                    
        第三种方式(限制类型、限制必要性、指定默认值) :
            props:{
                name :{
                type:String，//类型
                required;true，//必要性
                default:老王' //默认值
                }
            }
    备注: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

## mixin(混入)
    功能:可以把多个组件共用的配置提取成一个混入对象
    使用方式:
        第一步定义混合，例如:
            {
                data(){....}
                methods:{...}
                ...
            }
    第二步使用混入，例如:
        (1).全局混入: Vue.mixin(xxx)
        (2).局部混入: mixins:['xxx']

## 插件
    功能: 用于增强Vue
    本质:包含install方法的一个对象，install的第一个参数是vue，第二个以后的参数是插件使用者传递的数据。

    定义插件:
    对象 install = function (Vue, options) {
        // 1。添加全局过滤器
        Vue.filter(....)

        // 2。添加全局指令
        Vue.directive(....)

        // 3。配置全局混入(合)
        Vue.mixin(....)

        // 4。添加实例方法
        Vue.prototype.$myMethod = function () [...]
        Vue.prototype.$myProperty = xxxx
    }
    
    使用插件: Vue.use()

## scoped样式
    作用：让样式再局部生效，防止冲突
    写法：<style scoped>

## 总结TodoList案例
    1.组件化编码流程
        (1).拆分静态组件:组件要按照功能点拆分，命名不要与html元素冲突
        (2).实现动态组件:考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
            1.一个组件在用: 放在组件自身即可。
            2.一些组件在用: 放在他们共同的父组件上(状态提升)(3).实现交互:从绑定事件开始

    2.props适用于
        (1)父组件==>子组件通信
        (2).子组件 ==>父组件 通信(要求先给子一个函数)

    3.使用v-model时要切记: v-model绑定的值不能是props传过来的值，因为props是不可以修改的!
    
    4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## 插槽
    作用域插槽
        1.理解:数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。(a数据在bs组件中，但使用数据所遍历出来的结构由App组件决定)

## 路由 vue-router
    一、vue的一个插件库，专门实现SPA应用。
        插件： npm i vue-router安装路由
    二、对spa应用的理解
        1、单页web应用（single page web application,SPA）。
        2、整个应用只有一个完整的页面
        3、点击页面中的导航链接 不会刷新 页面，只会做页面的  局部更新。
        4、数据需要通过 ajax 请求获取
    三、路由
        1、一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理。
        2、前端路由：key是路径，value是组件
    四、基本使用
        1、安装vue-router，命令 npm i vue-router@《跟1，2，3，4版本号》
        2、应用插件：Vue.use(VueRouter)
        3、编写配置项
            //引入VueRouter
            import VueRouter from 'vue-router'
            //引入路由组件
            import xxx from '../components/xx'

            //创建router实例对象，去管理一组一组的路由规则
            const router = new VueRouter({
                routes:[
                    {
                        path:'/xx',
                        component:xx
                    },
                ]
            })

            //暴漏
            export default router
        4、实现切换
            <router-link to='/xx'>你你你</router-link>
        5、指定展示位置
            <router-view></router-view>
    
    五、几个注意点
        1、路由组件通常放在pages文件夹里，一般组件通常放在components文件夹
        2、通过切换，‘隐藏’了的路由组件，默认是被销毁了，需要的时候再去挂在
        3、每个组件都有自己的$route属性，里面存储自己的路由信息
        4、整个应用只有一个router，可以通过组建的$router属性获取到。

##