import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/Index.vue')
    },
    {
        path: '/items',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/item/ItemIndex.vue')
    },
    {
        path: '/items/create',
        // name: 'items.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/item/ItemCreate.vue')
    },
    {
        path: '/items/show/:id_item',
        name: 'items.show',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/item/ItemShow.vue')
    },
    {
        path: '/items/edit/:id_item',
        // name: 'items.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/item/ItemEdit.vue')
    },

    {
        path: '/customers',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/customer/CustomerIndex.vue')
    },
    {
        path: '/customers/create',
        // name: 'items.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/customer/CustomerCreate.vue')
    },
    {
        path: '/customers/edit/:id_item',
        // name: 'items.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/customer/CustomerEdit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router