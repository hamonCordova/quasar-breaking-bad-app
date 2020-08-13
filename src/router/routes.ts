import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/characters', alias: '', component: () => import('pages/Characters.vue') },
      { path: '/quotes', component: () => import('pages/Quotes.vue') },
      { path: '/episodes', component: () => import('pages/Episodes.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
