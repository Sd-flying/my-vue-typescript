<template>
    <div class="chinaStyle">
        <el-container style="border: 1px solid #eee">
            <LeftNav/>

            <el-container style="height: 100%;margin-top: -12px">

                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import LeftNav from './components/leftNav'

    export default {
        name: 'chinaStyle',
        components: {
            LeftNav
        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .chinaStyle
        height 'calc(100vh - %s)' % 155px

        .el-aside
            color #333
            height 100%

</style>
