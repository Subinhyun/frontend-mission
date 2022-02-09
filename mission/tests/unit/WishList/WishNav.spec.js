import { mount, shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import WishNav from '@/components/WishList/WishNav.vue';
import WishList from '@/views/WishList.vue';

describe('WishListNav', () => {
  it('redners ItemListNav', () => {
    const wrapper = mount(WishNav);

    expect(wrapper.find('.wish-list-nav').exists()).toBe(true);
  });
});

describe('WishListNav', () => {

    let wrapper;
  
    beforeEach(() => {
      wrapper = mount(WishNav);
    });

    it('renders button', () => {
        expect(wrapper.find('[data-test="home"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="heart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="cart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="myPage"]').exists()).toBe(true);
    });
});

describe("Wish List Nav Route", () => {
    it("renders a username from query string", () => {
        const username = "home";
        const wrapper = shallowMount(WishNav);
      
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

  const wrapper = mount(WishNav, {
    global: {
      plugins: [router]
    }
  })
  
  await wrapper.find('a').trigger('click');
  expect(wrapper.html()).toContain('찜');
});
