import { mount, shallowMount } from '@vue/test-utils';
import ItemNav from '@/components/ItemList/ItemNav.vue';
describe('ItemListNav', () => {
  it('redners ItemListNav', () => {
    const wrapper = mount(ItemNav);

    expect(wrapper.find('.item-list-nav').exists()).toBe(true);
  });
});

describe('ItemListNav', () => {

    let wrapper;
  
    beforeEach(() => {
      wrapper = mount(ItemNav);
    });

    it('renders button', () => {
        expect(wrapper.find('[data-test="home"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="wish"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="cart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="myPage"]').exists()).toBe(true);
    });
});

describe("Item List Nav Route", () => {
    it("renders a username from query string", () => {
        const username = "home";
        const wrapper = shallowMount(ItemNav);
      
        expect(wrapper.find('[data-test="home"]').text()).toBe('홈');
        expect(wrapper.find('[data-test="wish"]').text()).toBe('찜');
        expect(wrapper.find('[data-test="cart"]').text()).toBe('장바구니');
        expect(wrapper.find('[data-test="myPage"]').text()).toBe('마이페이지');
    });
});
