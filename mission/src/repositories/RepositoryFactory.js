import ItemRepository from '@/repositories/ItemRepository';
import WishRepository from '@/repositories/WishRepository';
import CartRepository from '@/repositories/CartRepository';

const repositories = {
  items: ItemRepository,
  wishs: WishRepository,
  carts: CartRepository,
};

export default {
  get: (name) => repositories[name],
};
