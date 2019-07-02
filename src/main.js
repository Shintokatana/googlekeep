import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueModalTor from 'vue-modaltor'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueModalTor);

const store = new Vuex.Store({
  debug: true,
  state: {
    todos: [
      {
        id: 0,
        title: 'Test 1',
        project: 'Project A',
        doneCheck: false,
        pinned: false,
        comments: []
      },
      {
        id: 1,
        title: 'Test 2',
        project: 'Project B',
        doneCheck: false,
        pinned: false,
        comments: []
      },
      {
        id: 2,
        title: 'Test 3',
        project: 'Project C',
        doneCheck: false,
        pinned: false,
        comments: []
      }
    ]
  },
  mutations: {
    addGlobalItem(state, item) {
      state.todos.push(item)
    },
    deleteGlobalItem(state, itemID) {
      state.todos.splice(itemID, 1)
    },
    pinGlobalItem(state, itemID) {
      state.todos[itemID].pinned = this.state.todos[itemID].pinned === false
    },
    markDone(state, itemID) {
      state.todos[itemID].doneCheck = true !== state.todos[itemID].doneCheck;
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
