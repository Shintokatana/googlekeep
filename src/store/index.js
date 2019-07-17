import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 0,
                image: '',
                title: 'Title 1',
                project: 'Project A',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: []
            },
            {
                id: 1,
                image: '',
                title: 'Title 2',
                project: 'description',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: []
            },
            {
                id: 2,
                image: '',
                title: 'Test 3',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: []
            },
            {
                id: 3,
                image: '',
                title: 'Test 4',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: []
            },
            {
                id: 4,
                image: '',
                title: 'Test 5',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: []
            },
            {
                id: 5,
                image: '',
                title: 'Test 6',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: []
            }
        ],
        newItemList: [
            {
                id: 0,
                checked: false,
                visited: false,
                content: ''
            }
        ],
        selectedItems: [

        ]
    },
    mutations: {
        updateGlobalItems(state, items) {
            state.todos = items
        },
        addGlobalItem(state, item) {
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
            const currIndex = state.todos.indexOf(item);
            state.todos[currIndex].doneCheck = true !== state.todos[currIndex].doneCheck
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
        searchedItems(state, items) {
            state.todos = items
        },
    },
    actions: {
        deleteGlobalItem({commit}, array) {
            commit('deleteGlobalItem', array)
        },
        updateSelectedItems({commit}, id) {
            commit('updateSelectedItems', id)
        }
    }
})
