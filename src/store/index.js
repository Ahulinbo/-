import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: []
    },
    mutations: {
        name(state, n) {
            let obj = state.name.findIndex(v => {
                console.log(v)
                return v.name == n.name
            })
            console.log(obj)
            if (obj == -1) {
                state.name.push(n)
            } else {
                n.num++
            }

            // console.log(n)
        },
        ming(state, i) {
            state.name.map(item => {
                // console.log(item)
                item.check = i;
            })
        }
    }
})
export default store;