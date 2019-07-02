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
        title: 'Test 1',
        project: 'Project A',
        doneCheck: false,
        pinned: false,
        comments: [{author: "Author", comment: "Some Comment"}]
      },
      {
        title: 'Test 2',
        project: 'Project B',
        doneCheck: false,
        pinned: false,
        comments: []
      },
      {
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
    deleteGlobalItem(state, item) {
      const currIndex = state.todos.indexOf(item);
      state.todos.splice(currIndex, 1)
    },
    pinGlobalItem(state, item) {
      const currIndex = state.todos.indexOf(item);
      state.todos[currIndex].pinned = true !== state.todos[currIndex].pinned
    },
    markDone(state, item) {
      const currIndex = state.todos.indexOf(item);
      state.todos[currIndex].doneCheck = true !== state.todos[currIndex].doneCheck
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
