import { mount } from '@vue/test-utils';
import ItemListPage from '@/components/ItemList/Item.vue';

const props = {
  name: 'product 1', price: 13400, description: 'description 1',
};
const testDisplayPrice = '13,400원';

describe('ItemListPage', () => {
  it('redners ItemListItem', () => {
    const wrapper = mount(ItemListPage);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  it('renders product information', () => {
    const wrapper = mount(ItemListPage);
      expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-name"]').exists()).toBe(true);
      // expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-description"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
  });

  it('renders discount rate when current price is lower than original price', () => {
    const originalPrice = 15000;
    const testDiscountRate = '11%';
    const mergedProps = { original_price: originalPrice, ...props };
    const wrapper = mount(ItemListPage, {
      props: {
        ...mergedProps,
      },
    });

    expect(wrapper.find('[data-test="product-sale"]').text()).toBe(testDiscountRate);
  });
});