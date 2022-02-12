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
    name: 'WishListPage',
    component: () => import('../views/WishList.vue'),
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: () => import('../views/Order.vue'),
  },
  {
    path: '/orderComplete',
    name: 'OrderCompletePage',
    component: () => import('../components/OrderComplete.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
