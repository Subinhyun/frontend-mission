import { mount } from '@vue/test-utils';
import ItemHeaderPage from '@/components/ItemList/ItemHeader.vue';

describe('ItemHeaderPage', () => {
  it('redners ItemHeaderPage', () => {
    const wrapper = mount(ItemHeaderPage);

    expect(wrapper.find('.item-list-header').exists()).toBe(true);
    expect(wrapper.find('[data-test="shop-name"]').exists()).toBe(true);
  });
});

describe('lifecycle hook scroll event', () => {
  
  let wrapper;
  
    beforeEach(() => {
      wrapper = mount(ItemHeaderPage);
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