import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'home', component: () => import('../views/homePage.vue')},
    {path: '/:pathMatch(.*)',name: 'fnf',component: () => import('../views/notFoundView.vue'),meta: {keepAlive: false,noCache: true}},
]

const router = createRouter({history: createWebHistory(), routes});

export default router;