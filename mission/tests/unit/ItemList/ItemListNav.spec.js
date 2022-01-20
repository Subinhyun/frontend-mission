import { mount, shallowMount } from '@vue/test-utils';
import ItemListNav from '@/components/ItemList/ItemListNav.vue';

describe('ItemListNav', () => {
  it('redners ItemListNav', () => {
    const wrapper = mount(ItemListNav);

    expect(wrapper.find('.item-list-nav').exists()).toBe(true);
  });
});

describe('ItemListNav', () => {

    let wrapper;
  
    beforeEach(() => {
      wrapper = mount(ItemListNav);
    });
  
    it('renders ItemInfoPage', () => {
      expect(wrapper.find('#item-info-page').exists()).toBe(true);
    });

    it('renders button', () => {
        expect(wrapper.find('[data-test="home"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="heart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="cart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="myPage"]').exists()).toBe(true);
    });
});

describe("Item List Nav Route", () => {
    it("renders a username from query string", () => {
        const username = "home";
        const wrapper = shallowMount(ItemListNav, {
          mocks: {
            $route: {
              params: { username }
            }
          }
        });
      
        expect(wrapper.find('[data-test="home"]').text()).toBe('홈');
        expect(wrapper.find('[data-test="heart"]').text()).toBe('찜');
        expect(wrapper.find('[data-test="cart"]').text()).toBe('장바구니');
        expect(wrapper.find('[data-test="myPage"]').text()).toBe('마이페이지');
    });
});

