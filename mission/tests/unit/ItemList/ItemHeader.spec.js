import { mount, render } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';
// import ItemHeaderPage from '@/components/ItemList/ItemHeader.vue';

describe('ItemHeaderPage', () => {
  it('redners ItemHeaderPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('.item-list-header').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-title"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-title"]').text()).toEqual('My shopping mall');
  });
});

describe('lifecycle hook scroll event', () => {
  
  let wrapper;
  
    beforeEach(() => {
      wrapper = mount(ItemInfoPage);
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it('class component debounce', async () => {
      const onScroll = jest.fn()
      const { getByRole } = render(<ComponentClass onScroll={onScroll} />)
      const one = getByRole('')
    
      fireEvent.scroll(one)
    
      wait(() => {
        expect(onScroll).toHaveBeenCalled()
      }, 0)
    })
});