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
                    backgroundColor: String
                },
                list: [

                ]
            },
            {
                id: 1,
                title: 'Title',
                project: 'description',
                doneCheck: false,
                pinned: false,
                bgc: {
                    backgroundColor: String
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
                    backgroundColor: String
                },
                list: [

                ]
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
        },
        updateGlobalColor(state, item) {
            let elementPos = state.todos.map(function(x) {return x.id; }).indexOf(item.id);
            state.todos[elementPos].bgc.backgroundColor = item.color;
        }
    }
});
