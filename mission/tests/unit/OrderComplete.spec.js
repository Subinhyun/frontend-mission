import { mount } from '@vue/test-utils';
import ItemOrderCompletePage from '@/components/OrderComplete.vue';

describe('ItemOrderCompletePage', () => {
  it('redners ItemOrderCompletePage', () => {
    const wrapper = mount(ItemOrderCompletePage);

    expect(wrapper.find('#item-order-complete').exists()).toBe(true);
    expect(wrapper.find('[data-test="home-btn"]').exists()).toBe(true);
  });
});
