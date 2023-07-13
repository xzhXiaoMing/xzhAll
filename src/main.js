// main.js  是vue的入口文件，里面调用了vue插件，组件等，项目的入口文件
// 引入vue插件
import Vue from "vue";
// 引入App组件
import App from "./App.vue";
// 关闭Vue提示
Vue.config.productionTip = false;

// 引入router路由组件
import router from "./router/index";

// 引入store组件
import Store from "./vuex/store";

// 创建vue的实例对象 vm
new Vue({
  // 引入App
  el: "#App",
  // 将App组件放入容器中
  render: (h) => h(App),
  // 创建vuex
  store: Store,
  // 创建路由
  router,
});

// 封装一个request模块 axios
import {request} from './network/request'

request({
  url: '/home/multidata',
  method:'get',
})
.then(res=>{
  console.log(res)
})
.catch(err=>{
  console.log(err)
});