
export const actions = {
    setTodos: context => {
        context.commit('setTodos')
    },
    changeItemProps: (context, change ) => {
        context.commit('changeItemProps', change)
    }
};
