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
    component: () => import('../views/About.vue'),
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
