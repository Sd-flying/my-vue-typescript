<template>
    <div class="homebox">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="1" class="hei60" style="text-align:center;">
                        <img class="header-ava" src="@/assets/images/ava.gif">
                    </el-col>
                    <el-col :span="2" class="hei60">
                        <span class="header-title">时尚家装</span>
                    </el-col>
                    <el-col :span="15" class="hei60">
                        <ul>
                            <router-link tag="li" to="/home/simpleModern">现代简约</router-link>
                            <router-link tag="li" to="/home/europeanStyle">欧式风格</router-link>
                            <router-link tag="li" to="/home/chinaStyle">中国风</router-link>
                            <router-link tag="li" to="/home/japaneseStyle">日式复古风</router-link>
                        </ul>
                    </el-col>
                    <el-col :span="6" class="hei60">
                        <el-dropdown style="float:right;margin-right: 10px;" @command="handleCommand">
                    <span class="el-dropdown-link">
                        欢迎您： admin
                    </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="1">个人中心</el-dropdown-item>
                                <el-dropdown-item command="2" divided>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
            <el-footer>to&nbsp;&nbsp;&nbsp; rise&nbsp;&nbsp;&nbsp; abruptly&nbsp;&nbsp;&nbsp; based&nbsp;&nbsp;&nbsp; on&nbsp;&nbsp;&nbsp;
                its&nbsp;&nbsp;&nbsp; accumulated&nbsp;&nbsp;&nbsp; strength
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import simpleModule from '@/views/simpleModule/simpleModule.vue'

    @Component({
        components: {
            simpleModule
        }
    })
    export default class Home extends Vue {

        $router: any

        lgout(): void {
            localStorage.removeItem('user')
            this.$router.push('/')
        }

        handleCommand(command: string): void {
            //去个人中心
            if (command === '1') {
                this.$router.push('/home/simpleModern')
            }
            //退出登录
            if (command === '2') {
                this.$confirm('确定退出吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.lgout()
                }).catch(() => {
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .homebox
        width 100%
        display flex
        height 100%
        font-family "Comic Sans MS"
        background-color #e9e9e9

    .el-header
        width 100%
        background-color #DADFE1
        line-height 60px
        height 60px
        color #2E3131

    .el-footer
        width 100%
        background-color #DADFE1
        line-height 60px
        color #2E3131
        text-align center
        font-size 16px
        font-family "Trebuchet MS"
        position fixed
        bottom 0px
        left 0px

    .header-title
        color #2E3131
        font-size 20px

    .header-ava
        display inline-block
        width 44px
        height 44px
        border-radius 50%
        margin-top 8px

    .hei60
        height 60px
        line-height 60px

        .el-col-13
            margin-left 10%

    .el-dropdown-link
        color #fff
            cursor pointer

    .el-dropdown-link
        cursor pointer
        color #2E3131


    .hei60 ul
        width 80%
        margin-left 16%
        display flex
        justify-content space-between
        font-size 16px
        font-family "Comic Sans MS"
        cursor pointer

</style>
