import { createRouter, createWebHistory } from 'vue-router';

import Ex01 from '../views/Ex01.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'Home', component: Ex01 }],
});

export default router;
