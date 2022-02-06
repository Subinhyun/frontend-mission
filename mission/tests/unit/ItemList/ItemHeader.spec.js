import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';

describe('ItemHeaderPage', () => {
  it('redners ItemHeaderPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('.item-list-header').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-title"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-title"]').text()).toEqual('My shopping mall');
  });
});