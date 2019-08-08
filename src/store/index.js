import Vue from 'vue'
import Vuex from "vuex"
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

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
        newItemImage: null,
        selectedItems: [],
        searchActive: false,
        singleModalView: false,
        isAuthenticated: false,
        userInfo: {},
        accessToken: ''
    },
    mutations: mutations,
    actions: actions,
    getters: getters,
})
