import BookableComponent from './components/Bookables/Bookables.vue';
import Bookable from './components/Bookable/Bookable.vue';
import VueRouter from 'vue-router';

const routes = [
    { 
        path: '/', 
        component: BookableComponent,
        name: 'home'
    },
    { 
        path: '/bookable/:id', 
        component: Bookable,
        name: 'bookable'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;