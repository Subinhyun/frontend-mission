import { mount } from '@vue/test-utils';
import WishInfoPage from '@/views/WishList.vue';

describe('WishHeaderPage', () => {
  it('redners WishHeaderPage', () => {
    const wrapper = mount(WishInfoPage);

    expect(wrapper.find('.wish-list-header').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-title"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-title"]').text()).toEqual('My shopping mall');
  });
});