import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  it('redners ItemListItem', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });
});

describe('ItemInfoPage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
  });

  it('renders product information', () => {
      expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-title"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-description"]').exists()).toBe(true);
  });
});