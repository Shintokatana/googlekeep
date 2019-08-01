import Router from 'vue-router'
import Vue from 'vue'
import Home from '../pages/Home'
import NotFound from '../pages/404'
import SingleItemPage from '../components/single-item/singleItemModalView'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/',  name: 'home',  component: Home,
        children: [
            {
                path: '/item/:id',
                name: 'single',
                component: SingleItemPage,
                props: true
            },
        ]},
        { path: '/404',  component: NotFound },
        { path: '*',  redirect: '/404' }
    ]
})
