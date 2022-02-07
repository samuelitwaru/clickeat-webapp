import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
    },
    getters: {
        isLoggedIn (state) {
            if (state.user) {
                return true
            }
        },
        user (state) {
            return state.user
        }
    },
    mutations: {
        setUser (state, user){
            state.user = user
        },
    },
    actions: {
        login ({commit}, user) {
            console.log(user)
            commit('setUser', user)
        },
        setToken (commit, token) {
            console.log(token);
            localStorage.setItem('token', token)
        }
    },
    modules: {
        
    }
})