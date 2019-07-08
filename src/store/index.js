import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 0,
                title: 'Title 1',
                project: 'Project A',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: [

                ]
            },
            {
                id: 1,
                title: 'Title 2',
                project: 'description',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: [

                ]
            },
            {
                id: 2,
                title: 'Test 3',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: [

                ]
            },
            {
                id: 3,
                title: 'Test 4',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: [

                ]
            },
            {
                id: 4,
                title: 'Test 5',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: [

                ]
            },
            {
                id: 5,
                title: 'Test 6',
                project: 'Project C',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: ''
                },
                list: [

                ]
            }
        ],
        newItemList: [
            {
                id: 0,
                checked: false,
                visited: false,
                content: ''
            }
        ]
    },
    mutations: {
        updateGlobalItems(state, items) {
            state.todos = items
        },
        addGlobalItem(state, item) {
            state.todos.push(item);
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
        },
        updateGlobalColor(state, item) {
            const elementPos = state.todos.map(function(x) {return x.id; }).indexOf(item.id);
            state.todos[elementPos].bgc.backgroundColor = item.color;
        },
    }
});
