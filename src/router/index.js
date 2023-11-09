import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';

const routes = [
  {
    path: '/',
    component:  MainLayout,
    redirect:{name:'HomePage'},
    children: [
      { path: '/home-page', name: 'HomePage', component: () => import('../pages/HomePage.vue') },
    ],
  },

  // <========================= 404 😂 =========================>
  { path: '/:catchAll(.*)*', name: '404', component: () => import('../pages/404.vue') },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
