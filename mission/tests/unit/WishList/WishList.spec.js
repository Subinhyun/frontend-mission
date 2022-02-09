import { mount } from '@vue/test-utils';
import WishListPage from '@/views/WishList.vue';

describe('WishListPage', () => {
  it('redners WishListPage', () => {
    const wrapper = mount(WishListPage);

    expect(wrapper.find('#wish-list-page').exists()).toBe(true);
  });
});
