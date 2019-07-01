import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMOdalTor from 'vue-modaltor'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App }
  ]
});

Vue.use(VueMOdalTor);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
