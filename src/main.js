import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Swatch from 'vue-swatches'
import VueLodash from 'vue-lodash'
import ImageUploader from 'vue-image-upload-resize'

/**
 * Global Components Registration
 */
Vue.component('color-picker', Swatch);
Vue.use(VueLodash);
Vue.use(ImageUploader);


Vue.config.productionTip = false;

/**
 * Main Vue Instance
 */
new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app');
