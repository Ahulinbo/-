import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: []
    },
    mutations: {
        name(state, n) {
            state.name.push(n)
            // console.log(n)
        }
    }
})
export default store;