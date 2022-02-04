import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ItemInfoPage from '@/views/ItemList.vue';
import axios from 'axios';

describe('ItemListPage', () => {
  it('redners ItemListPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });
});
