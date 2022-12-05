import { createRouter, createWebHistory } from 'vue-router';

// static pages for eager loading
import C01 from '../views/C01.vue';
import C03 from '../views/C03.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: C01 }, // eager loading
    { path: '/C01', name: 'C01', component: C01 },
    { path: '/C02', name: 'C02', component: () => import('@/views/C02.vue') }, // lazy loading
    { path: '/C03', name: 'C03', component: C03 },
    { path: '/C04', name: 'C04', component: () => import('@/views/C04.vue') },
    { path: '/C05', name: 'C05', component: () => import('@/views/C05.vue') },
    { path: '/C06', name: 'C06', component: () => import('@/views/C06.vue') },
    { path: '/C07', name: 'C07', component: () => import('@/views/C07.vue') },
    { path: '/C08', name: 'C08', component: () => import('@/views/C08.vue') },
    { path: '/C09', name: 'C09', component: () => import('@/views/C09.vue') },
    { path: '/C10', name: 'C10', component: () => import('@/views/C10.vue') },
    { path: '/C11', name: 'C11', component: () => import('@/views/C11.vue') },
    { path: '/C12', name: 'C12', component: () => import('@/views/C12.vue') },
    { path: '/C13', name: 'C13', component: () => import('@/views/C13.vue') },
    { path: '/C14', name: 'C14', component: () => import('@/views/C14.vue') },
  ],
});

export default router;
