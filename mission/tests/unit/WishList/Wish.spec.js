import { mount } from '@vue/test-utils';
import WishListPage from '@/components/WishList/Wish.vue';

const props = {
  name: 'product 1', price: 13400, description: 'description 1',
};
const testDisplayPrice = '13,400원';

describe('WishListPage', () => {
  it('redners WishListItem', () => {
    const wrapper = mount(WishListPage);

    expect(wrapper.find('.wish-list-item').exists()).toBe(true);
  });

  it('renders product information', () => {
    const wrapper = mount(WishListPage);
      expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-name"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-description"]').exists()).toBe(true);
  });

  it('renders discount rate when current price is lower than original price', () => {
    const originalPrice = 15000;
    const testDiscountRate = '11%';
    const mergedProps = { original_price: originalPrice, ...props };
    const wrapper = mount(WishListPage, {
      props: {
        ...mergedProps,
      },
    });

    expect(wrapper.find('[data-test="product-sale"]').text()).toBe(testDiscountRate);
  });
});