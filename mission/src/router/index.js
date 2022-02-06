import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/item/:id',
    name: 'ItemInfoPage',
    component: () => import('../views/ItemInfo.vue'),
  },
  {
    path: '/wish',
    name: 'HeartListPage',
    component: () => import('../views/HeartList.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
