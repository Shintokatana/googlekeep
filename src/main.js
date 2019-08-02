import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Swatch from 'vue-swatches'
import ImageUploader from 'vue-image-upload-resize'
import underscore from 'vue-underscore'
import vuetify from './plugins/vuetify'

/**
 * Global Components Registration
 */
Vue.component('color-picker', Swatch);
Vue.use(ImageUploader);
Vue.use(underscore);

Vue.config.productionTip = false;

/**
 * Main Vue Instance
 */
new Vue({
    router,
    store,
    vuetify,
    render: function (h) { return h(App) }
}).$mount('#app');

