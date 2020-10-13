require('./bootstrap');

import ViewRouter from 'vue-router';
import Index from './index.vue';
import router from './routes';

window.Vue = require('vue');
Vue.use(ViewRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        'index': Index
    }
});
