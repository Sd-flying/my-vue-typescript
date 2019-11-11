import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        names: '张三'
    },
    //相当于store的计算属性，只有状态改变时才会触发
    getters: {},
    mutations: {
        SET_INCREMENT: (state, count) => state.count += 2,
        SET_DECREMENT: (state, count) => state.count--
    },
    //action提交的是mutation,而不是直接变更状态
    //Action可以包含任意异步操作
    actions: {
        increment({commit}) {
            commit('SET_INCREMENT')
        },
        decrement({commit}) {
            commit('SET_DECREMENT')
        }
    }
})
