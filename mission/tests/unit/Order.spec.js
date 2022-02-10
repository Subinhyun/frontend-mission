import { mount } from '@vue/test-utils';
import ItemOrderPage from '@/views/Order.vue';

describe('ItemBuyPage', () => {
  it('redners ItemOrderPage', () => {
    const wrapper = mount(ItemOrderPage);

    expect(wrapper.find('#item-order-page').exists()).toBe(true);
  });

  it('redners ItemOrderPage information', () => {
    const wrapper = mount(ItemBuyPage);

    expect(wrapper.find('[data-test="input-name"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="input-number"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="input-address"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="delivery-btn"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="card-btn"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="account-btn"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="order-btn"]').exists()).toBe(true);
  });

});
