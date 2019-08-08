
export const getters = {
    getSelectedTodos: state => {
        return state.selectedItems
    },
    getToken: state=> {
        return state.accessToken
    },
    getAuth: state => {
        return state.isAuthenticated
    },
    getUser: state => {
        return state.userInfo
    }
};
