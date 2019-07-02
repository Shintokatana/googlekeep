import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueModalTor from 'vue-modaltor'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueModalTor);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        title: 'Test 1',
        project: 'Project A',
        doneCheck: false,
        pinned: false
      },
      {
        id: 1,
        title: 'Test 2',
        project: 'Project B',
        doneCheck: false,
        pinned: false
      },
      {
        id: 2,
        title: 'Test 3',
        project: 'Project C',
        doneCheck: false,
        pinned: false
      }
    ]
  },
  mutations: {
    pinGlobalItem(state, itemID) {
      state.todos[itemID].pinned = this.state.todos[itemID].pinned === false;
    }
  }
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
