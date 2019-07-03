import Vue from 'vue'
import App from './App.vue'
import VueModalTor from 'vue-modaltor'
import store from './store'
import router from './router'

Vue.use(VueModalTor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
