import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Swatch from 'vue-swatches'
import ImageUploader from 'vue-image-upload-resize'
import VueLodash from 'vue-lodash'
import Vuetify from 'vuetify'

/**
 * Global Components Registration
 */
Vue.component('color-picker', Swatch);
Vue.use(ImageUploader);
Vue.use(Vuetify);

const options = {name: 'lodash'};
Vue.use(VueLodash, options);

Vue.config.productionTip = false;

/**
 * Main Vue Instance
 */
new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app');
