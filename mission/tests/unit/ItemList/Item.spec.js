import { mount, shallowMount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';
import ItemListPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  it('redners ItemListItem', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });
});

describe('ItemInfoPage', () => {

  let wrapper;

  const imgUrl = 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg';

  beforeEach(() => {
    wrapper = mount(ItemInfoPage, {
      propsData: {
        product: [
          {
            id: 0,
            title: '슈퍼스타',
            color: ['white', 'black'],
            content: 'Born in France',
            sale: 34,
            price: 79200,
            original_price: 120000,
            img: imgUrl,
          }
        ],
      }
    });
  });

  it('renders product information', () => {
      expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-title"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-description"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="product-img"]').find('img').attributes('src')).toBe(imgUrl);
  });

  it('renders price', async () => {
    expect(wrapper.find('[data-test="product-sale"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="product-sale"]').text()).toBe('34%');
    expect(wrapper.get('[data-test="price"]').text()).toBe('79,200원');
    expect(wrapper.get('[data-test="product-price"]').text()).toBe('289,000원');
  });
});