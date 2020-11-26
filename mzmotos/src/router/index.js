import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/motorcycle',
        name: 'Motorcycle',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Motorcycle.vue')
    },
    {
        path: '/partlist',
        name: 'Partlist',
        component: () =>
            import ( /* webpackChunkName: "" */ '../views/Parts.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router