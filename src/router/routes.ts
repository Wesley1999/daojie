import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

// 注意这里的Promise不要改
const routes: Array<RouteRecordRaw> = [
    { path: '/login', component: () => import('~/views/P1_首页.vue') },
    { path: '/p1', component: () => import('~/views/P1_首页.vue') },
    { path: '/p2', component: () => import('~/views/P2_行情分析.vue') },
    { path: '/p3', component: () => import('~/views/P3_行业分析.vue') },
    { path: '/p4', component: () => import('~/views/P4_智能选股.vue') },
    { path: '/p5', component: () => import('~/views/P5_公司分析.vue') },
    { path: '/p6', component: () => import('~/views/P6_持仓组合.vue') },
    { path: '/p7', component: () => import('~/views/P7_监控预警.vue') },
    { path: '/p8', component: () => import('~/views/P8_每月推荐.vue') },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

export default router
