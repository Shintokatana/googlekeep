import Vuex from 'vuex'

const store = new Vuex.Store({
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
            const deleteIndex = state.todos.indexOf(itemID);
            state.todos.splice(deleteIndex, 1)
        },
        pinGlobalItem(state, itemID) {
            state.todos[itemID].pinned = true !== state.todos[itemID].pinned
        },
        markDone(state, itemID) {
            state.todos[itemID].doneCheck = true !== state.todos[itemID].doneCheck
        }
    }
});

export default {
    store
}
