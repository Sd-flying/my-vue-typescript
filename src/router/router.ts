import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'


Vue.use(Router)

//chinaStyle的子页面
export const menuMap: any = [
    {
        path: '/home/chinaStyle/table1',
        name: 'table1',
        component: () => import('@/views/chinaStyle/children/table1.vue'),
        meta: {
            title: '表格展示',
            icon: 'el-icon-menu'
        }
    },
    {
        path: '/home/chinaStyle/table2',
        name: 'table2',
        component: () => import('@/views/chinaStyle/children/table2.vue'),
        meta: {
            title: '顶级摄影',
            icon: 'el-icon-menu'
        }
    },
    {
        path: '/home/chinaStyle/table3',
        name: 'table3',
        component: () => import('@/views/chinaStyle/children/table3.vue'),
        meta: {
            title: '图片展示',
            icon: 'el-icon-menu'
        }
    }
]

const router = new Router({
    // mode设置为"history"时，浏览器URL显示为(http://localhost:8000/firsts/first),设置“history”后链接中没有#
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('@/views/Login.vue'),
            meta: {title: '登录'}
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/home/Home.vue'),
            children: [
                {
                    path: '/home/simpleModern',
                    name: 'SimpleModern',
                    component: () => import('@/views/simpleModule/simpleModule.vue')
                },
                {
                    path: '/home/europeanStyle',
                    name: 'EuropeanStyle',
                    component: () => import('@/views/europeanStyle/europeanStyle.vue')
                },
                {
                    path: '/home/chinaStyle',
                    name: 'ChinaStyle',
                    component: () => import('@/views/chinaStyle/chinaStyle.vue'),
                    children: menuMap,
                    redirect: '/home/chinaStyle/table1'

                },
                {
                    path: '/home/japaneseStyle',
                    name: 'JapaneseStyle',
                    component: () => import('@/views/japaneseStyle/japaneseStyle.vue')
                }
            ],
            redirect: '/home/simpleModern'
        },
        {
            path: '/404',
            name: '404',
            component: () => import("@/views/404.vue"),
            meta: {title: '页面找不到了！'}
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
export default router
