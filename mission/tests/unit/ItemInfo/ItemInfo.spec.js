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

  it('renders buy button', () => {
    expect(wrapper.find('[data-test="buy-btn"]').exists()).toBe(true);
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

describe('Product information', () => {
  it('show product information', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      product: {
        title: 'title',
        sale: 34,
        price: 20000,
      }
    });

    expect(wrapper.find('[data-test="product-name"]').text()).toEqual('title');
    expect(wrapper.find('[data-test="product-sale"]').text()).toEqual('34%');
  })
});

describe('review', () => {
  it('show review', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      review: [
        {
          id: 'review',
          date: 'date',
          title: 'title',
          content: 'content'
        },
      ],
    });

    expect(wrapper.find('[data-test="review-id"]').text()).toEqual('review');
    expect(wrapper.find('[data-test="review-date"]').text()).toEqual('date');
    expect(wrapper.find('[data-test="review-title"]').text()).toEqual('title');
    expect(wrapper.find('[data-test="review-content"]').text()).toEqual('content');
  })
});