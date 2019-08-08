
export const actions = {
    setTodos: (context, token ) => {
        context.commit('setTodos', token)
    },
    changeItemProps: (context, change ) => {
        context.commit('changeItemProps', change)
    },
    setAuth: (context, data ) => {
        context.commit('setTodos', data.loginHint );
        context.commit('isAuth', data.authStatus );
        context.commit('tokenSet', data.loginHint);
    }
};
