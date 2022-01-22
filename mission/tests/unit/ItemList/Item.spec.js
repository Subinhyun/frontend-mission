import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';
// import ItemListPage from '@/components/ItemList/Item.vue';

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

  it('render price', async () => {
    // await wrapper.setData({
    //   product: {
    //     sale: 34,
    //     price: 79200,
    //     original_price: 289000,
    //   }
    // });

    expect(wrapper.get('[data-test="product-sale"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="price"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="product-price"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="product-sale"]').text()).toBe('34%');
    expect(wrapper.get('[data-test="price"]').text()).toBe('79,200원');
    expect(wrapper.get('[data-test="product-price"]').text()).toBe('289,000원');
});
});