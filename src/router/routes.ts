import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

// 注意这里的Promise不要改
let Page1 = () => import('~/views/Page1.vue');
let Page2 = () => import('~/views/Page2.vue');
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home', // 注意这里面的name不能重名
        component: Page1
    }, {
        path: '/page1',
        name: 'Page1',
        component: Page1
    }, {
        path: '/page2',
        name: 'Page2',
        component: Page2
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
