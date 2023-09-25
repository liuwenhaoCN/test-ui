import { createApp } from 'vue';
import App from './app.vue';

import test from '@test/components';

const app = createApp(App);
app.use(test);
app.mount('#app');
