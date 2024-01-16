import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router'
import builder from'./plugins/builder-io.js';

const app = createApp(App);

app.use(router);
app.use(builder);

app.mount('#app');
