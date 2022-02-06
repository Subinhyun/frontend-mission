import ItemRepository from '@/repositories/ItemRepository';
import WishRepository from '@/repositories/WishRepository';

const repositories = {
  items: ItemRepository,
  wishs: WishRepository,
};

export default {
  get: (name) => repositories[name],
};
