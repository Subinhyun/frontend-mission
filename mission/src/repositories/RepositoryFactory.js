import ItemRepository from '@/repositories/ItemRepository';
import HeartRepository from '@/repositories/HeartRepository';

const repositories = {
  'items': ItemRepository,
  'wish': HeartRepository,
};

export default {
  get: (name) => repositories[name],
};
