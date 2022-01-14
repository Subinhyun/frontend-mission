import { mount, shallowMount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
  })
  afterEach(() => {
    jest.restoreAllMocks()
  });

  it('redners ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('show product image', () => {
    expect(wrapper.find('[data-test="main-Image"]').exists()).toBe(true);
  });

});

describe('Seller information', () => {
  it('show seller information', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      seller: {
        name: 'name',
        tag: ['tag'],
      }
    });

    expect(wrapper.find('[data-test="seller-image"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="seller-name"]').text()).toEqual('name');
    expect(wrapper.find('[data-test="seller-tag"]').text()).toEqual('#tag');
  })
});
