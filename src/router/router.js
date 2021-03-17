import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
        path: '/',
        component: () => import( /******** */ '../view/homeentry/homeentry.vue'),
        meta: {
            title: '自述文件'
        },
    }]
})