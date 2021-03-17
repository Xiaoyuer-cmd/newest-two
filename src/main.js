/*
#****基础配置****
*/
// 初始化
import './style/Publickstyle-pc.css'
// import './style/Publickstyle-app.css'
import './style/main.css'
import './style/main.less'
import './style/main.scss'
/* ############## */
import Vue from 'vue';
import App from './App.vue';
/* ############## */
import router from './router/router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* ############## */
import store from './store/store.js'
import Vuex from 'vuex';
Vue.use(Vuex)
/* ############## */
import axios from 'axios'
import qs from 'axios'
import api from './axios/api.js'
Vue.prototype.$axios = api
Vue.prototype.$qs = qs
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
/* ############## */
var vm = new Vue({
    el: '#app',
    render(createElements) {
        return createElements(App)
    },
    router,
    store,
    axios,
})