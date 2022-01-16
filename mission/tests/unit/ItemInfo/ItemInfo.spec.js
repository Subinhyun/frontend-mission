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

  it('show seller information', async () => {
    await wrapper.setData({
      seller: {
        name: 'name',
        tag: ['tag'],
      }
    });

    expect(wrapper.find('[data-test="seller-image"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="seller-name"]').text()).toEqual('name');
    expect(wrapper.find('[data-test="seller-tag"]').text()).toEqual('#tag');
  });

  it('click star', async () => {
    await wrapper.setData({
      star: true,
    });
  
    expect(wrapper.get('[data-test="star"]').find('font-awesome-icon').isVisible()).toBe(true);
  });

  it('click nostar', async () => {
    await wrapper.setData({
      star: false,
    });
  
    expect(wrapper.get('[data-test="nostar"]').find('font-awesome-icon').isVisible()).toBe(true);
  });

  it('show product information', async () => {
    await wrapper.setData({
      product: {
        title: 'title',
        sale: 34,
        price: 120000,
        color: ['white', 'black']
      }
    });

    expect(wrapper.find('[data-test="product-name"]').text()).toEqual('title');
    expect(wrapper.find('[data-test="product-sale"]').text()).toEqual('34%');
    expect(wrapper.find('[data-test="discount-price"]').text()).toEqual('79,200원');
    expect(wrapper.find('[data-test="product-price"]').text()).toEqual('120,000원');
  });

  it('show review', async () => {
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

    expect(wrapper.find('[data-test="review-id"]').text()).toEqual('re***');
    expect(wrapper.find('[data-test="review-date"]').text()).toEqual('date');
    expect(wrapper.find('[data-test="review-title"]').text()).toEqual('title');
    expect(wrapper.find('[data-test="review-content"]').text()).toEqual('content');
  });

  it('show buy button', async () => {
    await wrapper.setData({
      product: {
        sale: 34,
        price: 120000
      }
    });
    expect(wrapper.find('[data-test="buy-btn"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="buy-btn"]').text()).toEqual('79,200원 구매');
  });

  it('show buy button', async () => {
    await wrapper.setData({
      select: false
    });
    expect(wrapper.find('[data-test="now-buy"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="cart"]').exists()).toBe(true);
  });

  it('seleted color', async () => {
    await wrapper.setData({
      select: false
    });

    expect(wrapper.get('[data-test="select-color"]').find('select').isVisible()).toBe(true);
  });

});
