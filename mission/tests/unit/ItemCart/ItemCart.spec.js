import { mount } from '@vue/test-utils';
import ItemCartPage from '@/views/ItemCart.vue';

describe('ItemCartPage', () => {
  it('redners ItemCartPage', () => {
    const wrapper = mount(ItemCartPage);

    expect(wrapper.find('#item-cart-page').exists()).toBe(true);
  });
});
