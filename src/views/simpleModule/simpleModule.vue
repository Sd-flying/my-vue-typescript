<template>
    <div class="simpleModule">
        <el-main>
            <div class="dv2">
                <div class="dv3">
                    <el-steps direction="vertical">
                        <el-step title="兴趣爱好" description="这是一段很长很长很长的描述性文字">2132132321</el-step>
                        <el-step title="生活娱乐" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="工作" description="这是一段很长很长很长的描述性文字"></el-step>
                    </el-steps>
                </div>
            </div>
        </el-main>
    </div>
</template>

<script>

    export default {
        name: 'simpleModule'
    }
</script>

<style lang="stylus" scoped>
    .simpleModule
        height 'calc(100vh - %s)' % 155px
        .el-main
            height 'calc(100vh - %s)' % -10000px
            background-image url("../../../static/img/d.jpg")
            background-size 100%
            position relative
            opacity 0.5

            .dv2
                .dv3
                    width 30%
                    height 500px
                    border-radius 40%
                    background-color yellow
                    left 40%
                    top 150px
                    position fixed

</style>
