import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || null,
        user: null,
        overlay: false,
        cartProducts: [],
        deliveryAddress: null,
        paymentMethod: null,
        categories: [],
        showSigninModal: false,
        showMsgDialog: false,
        showMsgModal: false,
        msg: '',
        title: '',
        action: {},
    },
    getters: {
        loggedIn (state) {
            return Boolean(state.token)
        },
        token () {
            return sessionStorage.getItem('token')
        },
        userId (state) {
            if (state.user) {
                return state.user.customer_id
            }
            return null
        },
    },
    mutations: {
        login (state, user){
            state.user = user
            state.token = user.token
        },
        logout (state){
            state.user = null
            state.token = null
        },
        setCartProducts (state, cartProducts) {
            state.cartProducts = cartProducts
        },
        setShowSigninModal (state, value) {
            state.showSigninModal = value
        }
    },
    actions: {
        login ({commit}, user) {
            commit('login', user)
            sessionStorage.setItem('token', user.token)
            sessionStorage.setItem('user_id', user.customer_id)
        },
        logout ({commit}) {
            commit('logout')
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user_id')
        },
        setCartProducts ({commit}, cartProducts) {
            commit('setCartProducts', cartProducts)
        },
        setShowSigninModal ({commit}, value) {
            commit('setShowSigninModal', value)
        }
    },
    modules: {
        
    }
})