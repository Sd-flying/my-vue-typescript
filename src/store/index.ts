import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginway: '',
        show: 'welcome',
        wel_lists: [
            {title: '我是老大', icon: 'el-icon-share'}
        ],
        ulLists: [
            {title: '首页'},
            {title: '沸点'},
            {title: '话题'},
            {title: '小册'},
            {title: '活动'}
        ],
        articleNews: [
            {title: '专栏', content: 'JS前20个常用字符串方法及使用方式'},
            {title: '专栏', content: '移动跨平台方案对比：WEEX、React Native、Flutter和PWA'},
            {title: '专栏', content: '深入JavaScript（一）工作原理'},
            {title: '专栏', content: 'JS前20个常用字符串方法及使用方式'},
            {title: '专栏', content: '移动跨平台方案对比：WEEX、React Native、Flutter和PWA'},
            {title: '专栏', content: '深入JavaScript（一）工作原理'}
        ]
    },
//获取状态
    getters: {
        getLoginway: function (state) {
            return state.loginway
        },
        getShow: function () {
            // return state.show
        },
        getWelLists: function (state) {
            return state.wel_lists
        },
        getUlLists: function (state) {
            return state.ulLists
        },
        getArticleNews: function (state) {
            return state.articleNews
        }
    },
//改变状态
    mutations: {
        CHANGE_LOGINWAY(state, type) {
            state.loginway = type
        },
        CHANGE_SHOW(state, type) {
            state.show = type
        }
    },
//异步提交到mutations方法中，可以提交多个
    actions: {
        changeLoginway({commit}, type) {
            commit('CHANGE_LOGINWAY', type)
        },
        changeShow({commit}, type) {
            commit('CHANGE_SHOW', type)
        }
    }
})

//存储状态的仓库



