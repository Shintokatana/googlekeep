import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Swatch from 'vue-swatches'
import ImageUploader from 'vue-image-upload-resize'
import underscore from 'vue-underscore'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZUyXFqmKSi6iP0c-TItLiys6AnEDqJNA",
    authDomain: "my-project-1501060601734.firebaseapp.com",
    databaseURL: "https://my-project-1501060601734.firebaseio.com",
    projectId: "my-project-1501060601734",
    storageBucket: "my-project-1501060601734.appspot.com",
    messagingSenderId: "676292112942",
    appId: "1:676292112942:web:db010fe99314d057"
};

/**
 * Firebase initialization
 */
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

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

