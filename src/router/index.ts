import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router";
import homeViewVue from "@/views/home/homeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/01',
        
        children: [
            {
                path: '/01',
                component: () => import('@/components/music/musicOne.vue')
            },
            {
                path: '/02',
                component: () => import('@/components/music/musicTwo.vue')
            },
            {
                path: '/03',
                component: () => import('@/components/music/musicThree.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;
