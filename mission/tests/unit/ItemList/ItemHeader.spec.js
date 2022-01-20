import { mount } from '@vue/test-utils';
import ItemHeaderPage from '@/components/ItemList/ItemHeader.vue';

describe('ItemHeaderPage', () => {
  it('redners ItemHeaderPage', () => {
    const wrapper = mount(ItemHeaderPage);

    expect(wrapper.find('.item-list-header').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-name"]').exists()).toBe(true);
  });
});
