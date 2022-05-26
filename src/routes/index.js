import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
const Login = () => import('@/views/login/Login.vue');
const routes = [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login
    }
]
export default createRouter({
    history: createWebHistory(),
    // @ts-ignore
    routes
})