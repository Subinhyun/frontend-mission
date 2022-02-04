import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(fas, far, fab);

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.component('fa', FontAwesomeIcon);

app.use(store).use(router);
app.mount('#app');
