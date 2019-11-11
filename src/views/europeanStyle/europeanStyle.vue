<template>
    <div class="europeanStyle">

        <navList :listArr="listArr" @changePage="changePage"></navList>

        <el-main>
            <div class="mainContext">
                <div v-if='num===1'>
                    <part1/>
                </div>
                <div v-if="num===2">
                    <part2/>
                </div>
            </div>
        </el-main>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import part1 from '@/views/europeanStyle/part1.vue'
    import part2 from '@/views/europeanStyle/part2.vue'
    import navList from '@/components/navList.vue'

    @Component({
        components: {
            navList,
            part1,
            part2
        }
    })
    export default class europeanStyle extends Vue {
        num: number = 1
        public listArr: any = [
            {
                num: 1,
                name: '简欧风',
                icon: 'fontFamily el-icon-jw-anjian',
                color: '#EE3C7E'
            },
            {
                num: 2,
                name: '立体米',
                icon: 'fontFamily el-icon-jw-anjian',
                color: '#67C23A'
            }
        ]

        changePage(val: number): void {
            this.num = val
        }
    }
</script>

<style lang="stylus" scoped>
    .europeanStyle
        height 'calc(100vh - %s)' % 165px

        .el-main
            width 100%
            height 'calc(100vh - %s)' % 225px

</style>
