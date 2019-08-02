import Router from 'vue-router'
import Vue from 'vue'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Singup from '../pages/Singup'
import NotFound from '../pages/notFound'
import SingleItemPage from '../components/single-item/singleItemModalView'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/',  name: 'home',  component: Home,
            children: [
                {
                    path: '/item/:id',
                    name: 'single',
                    component: SingleItemPage,
                    props: true,
                },
            ],
            meta: {
                requiresAuth: true
            }
        },
        { path: '/login', name: 'login', component: Login },
        { path: '/sing-up', name: 'singUp', component: Singup },
        { path: '/not-found',  component: NotFound },
        { path: '*',  redirect: '/not-found' }
    ]
});

export default router;
