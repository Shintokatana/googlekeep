import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Swatch from 'vue-swatches'

Vue.component('color-picker', Swatch);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app');
