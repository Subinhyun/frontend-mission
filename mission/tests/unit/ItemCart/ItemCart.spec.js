import { mount } from '@vue/test-utils';
import ItemCartPage from '@/views/Cart.vue';

describe('ItemCartPage', () => {
  it('redners ItemCartPage', () => {
    const wrapper = mount(ItemCartPage);

    expect(wrapper.find('#item-cart-page').exists()).toBe(true);
  });

  it('redners ItemCartPage', () => {
    const wrapper = mount(ItemCartPage);

    expect(wrapper.find('[data-test="buy-btn"]').exists()).toBe(true);
  });
});
