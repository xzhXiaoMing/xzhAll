// 引入vue，因为Vue.use(vuex)需要vue插件
import Vue from 'vue';

// 引入vuex
import Vuex from 'vuex';
//使用插件
Vue.use(Vuex)

const actions = {
};

const mutations = {
};

const state = {
    sumx:0,
    Personnel:[
        {name:'王学霖',label:'投行体系',interest:0,busin:'证券开发',positioning:'上海、南京',decla:'业务',eclarati:'IPO、再融资、并购重组、北交所上市',heads:require('@/assets/head.png'),id:'001'},
        {name:'小明',label:'财富委',interest:0,busin:'新能源汽车组',positioning:'美国',decla:'运营',eclarati:'IPO、再融资、并购重组、北交所上市',heads:require('@/assets/head.png'),id:'002'}
     ],
};


const getters = {
};





const store = new Vuex.Store({
    actions:actions,
    mutations,
    state,
    getters,
});

// 暴漏
export default store;