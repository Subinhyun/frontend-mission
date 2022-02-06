import { mount, shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ItemNav from '@/components/ItemList/ItemNav.vue';
import ItemListPage from '@/views/ItemList.vue';
import WishList from '@/views/WishList.vue';

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
        expect(wrapper.find('[data-test="heart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="cart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="myPage"]').exists()).toBe(true);
    });
});

describe("Item List Nav Route", () => {
    it("renders a username from query string", () => {
        const username = "home";
        const wrapper = shallowMount(ItemNav);
      
        expect(wrapper.find('[data-test="home"]').text()).toBe('홈');
        expect(wrapper.find('[data-test="heart"]').text()).toBe('찜');
        expect(wrapper.find('[data-test="cart"]').text()).toBe('장바구니');
        expect(wrapper.find('[data-test="myPage"]').text()).toBe('마이페이지');
    });
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ItemListPage
    },
    {
      path: '/wish',
      name: 'WishListPage',
      component: WishList
    }
  ]
});

test('routing', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(ItemNav, {
    global: {
      plugins: [router]
    }
  })
  
  await wrapper.find('a').trigger('click');
  expect(wrapper.html()).toContain('홈');
});
