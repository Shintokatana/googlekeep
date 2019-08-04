import Vue from 'vue'
import Vuex from "vuex"
import firebase from 'firebase'
import { db } from '../main'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        newItemList: [
            {
                id: 0,
                checked: false,
                visited: false,
                content: ''
            }
        ],
        newItemImage: '',
        selectedItems: [],
        searchActive: false,
        singleModalView: false,
        user: null,
        isAuthenticated: false
    },
    mutations: {
        updateGlobalItems(state, items) {
            state.todos = items
        },
        addGlobalItem(state, item) {
            state.search = '';
            state.todos.push(item);
        },
        deleteGlobalItem(state, id) {
            id.forEach(function (el) {
                state.todos = state.todos.filter(x => x.id !== el)
            });
            state.selectedItems = []
        },
        pinGlobalItem(state, item) {
            const currIndex = state.todos.indexOf(item);
            state.todos[currIndex].pinned = true !== state.todos[currIndex].pinned
        },
        markDone(state, item) {
            item.forEach(function (single) {
                state.todos.find(function (obj) {
                    if (obj.id === single ) {
                        obj.doneCheck = obj.doneCheck !== true;
                    }
                })
            })
        },
        updateGlobalColor(state, item) {
            const elementPos = state.todos.map(function(x) {return x.id; }).indexOf(item.id);
            state.todos[elementPos].bgc.backgroundColor = item.color;
        },
        updateSelectedItems(state, id) {
            if (state.selectedItems.includes(id) ) {
                let index = state.selectedItems.indexOf(id);
                state.selectedItems.splice(index, 1);
            } else {
                state.selectedItems.push(id)
            }
        },
        searchActive(state, status) {
            state.searchActive = status
        },
        addNewItemImage(state, src) {
            state.newItemImage = src
        },
        showModal(state, visibility) {
            state.singleModalView = visibility
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setTodos: state => {
            let todos = [];
            let newTodoItem = {};
            db.collection("todos").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    newTodoItem = doc.data();
                    newTodoItem.id = doc.id;
                    todos.push(newTodoItem);
                });
            });
            state.todos = todos
        }
    },
    getters: {
        getTodos: state => {
            return state.todos
        }
    },
    actions: {
        setTodos: context => {
            context.commit('setTodos')
        },
        userJoin({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                });
        }
    }
})
