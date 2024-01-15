import {createRouter, createWebHistory} from 'vue-router'

import ProdutsList from './pages/ProductsList.vue'
import UserCart from './pages/UserCart.vue'
import ShopAdmin from './pages/ShopAdmin.vue'

const router= createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProdutsList},
        {path: '/cart', component: UserCart},
        {path: '/admin', component: ShopAdmin},
        
    ]
});

export default router;
