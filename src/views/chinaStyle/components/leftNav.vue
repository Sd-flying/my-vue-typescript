<template>
    <div>
        <el-aside style="width:350px; background-color: rgb(238, 241, 246)">
            <el-menu
                    :default-openeds="$route.path"
                    router
                    class="el-menu-vertical-demo"
                    background-color="#fff"
                    font-weight="blod"
                    text-color="#3C342E"
                    active-text-color="#ffd04b">
                <div v-for="item in menuList" :key="item.name">
                    <el-submenu :index="item.path" v-if="item.children">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span>{{item.meta.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item :index="item.path" v-else>
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </el-menu-item>
                    <hr/>
                </div>
            </el-menu>
        </el-aside>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'vue-property-decorator'
    import {menuMap} from "../../../router/router";

    export default class navList extends Vue {
        menuList: any = menuMap
    }
</script>

<style scoped lang="stylus">
    .el-aside
        box-shadow: 1px 1px 5px gray;
        border-radius: 10px;
        margin-right 1%

    /*width 400px*/

    .el-menu-vertical-demo
        border-radius 10px
        width 99%
        height 770px

        i
            margin-right 10px
            font-size 20px
            color #3C342E
            font-weight bold

</style>
