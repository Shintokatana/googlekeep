import { db} from "../main"

export const mutations = {
    updateGlobalItems(state, items) {
        state.todos = items
    },
    pinGlobalItem(state, item) {
        const currIndex = state.todos.indexOf(item);
        state.todos[currIndex].pinned = true !== state.todos[currIndex].pinned
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
    clearSelectedItems(state) {
        state.selectedItems = []
    },
    searchActive(state, status) {
        state.searchActive = status
    },
    addNewItemImage(state, src) {
        state.newItemImage = src
    },
    selectedItems(state, array ) {
        state.selectedItems = array
    },
    showModal(state, visibility) {
        state.singleModalView = visibility
    },
    setTodos: state => {
        let todos = [];
        let newTodoItem = {};
        db.collection('todos').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                newTodoItem = doc.data();
                newTodoItem.id = doc.id;
                todos.push(newTodoItem);
            });
        });
        state.todos = todos
    },
    changeItemProps: ( state, change ) => {
        console.log( state + change )
    }
};
