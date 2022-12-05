import { createRouter, createWebHistory } from 'vue-router';

// static pages for eager loading
import C01 from '../views/C01.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: C01 }, // eager loading
    { path: '/C01', name: 'C01', component: C01 },
    { path: '/C02', name: 'C02', component: () => import('@/views/C02.vue') }, // lazy loading
  ],
});

export default router;
