<template>
    <div class="part2">
        <div class="sm-top">
            <div class="margin:-5px;">
                <h1 class="sm-title">图表ECharts</h1>
            </div>
            <div id="echarts1" class="echarts1"></div>
        </div>
        <div class="sm-middle">
            <div>
                <h1 class="sm-title">表格table</h1>
            </div>

            <el-table class="myTables" :data="tableData" style="width: 100%;" v-loading="tableLoading">
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="gender" label="性别" align="center">
                    <template slot-scope="scope">
                        {{ scope.row.gender === 1 ? '男' : '女' }}
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="居住地" align="center"></el-table-column>
                <el-table-column prop="createTime" label="出生日期" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="danger" plain size="small" @click="deleteData(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-apge.sync="pageNum"
                    :page-size="pageSize"
                    layout="prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {DeleteTableData, getTableData} from "@/api/api";

    @Component
    export default class Table extends Vue {
        public $echarts: any;
        //表格数据
        tableData: any = []
        tableLoading: boolean = false

        // 分页数据
        pageSize: number = 10
        pageNum: number = 1
        total: number = 0

        mounted() {
            this.fn1()
            this.initTable()
        }

        //echarts图
        fn1(): void {
            var myChart = this.$echarts.init(document.getElementById('echarts1'));
            window.addEventListener('resize', function () {
                myChart.resize();
            });
            myChart.setOption({
                //tooTip组件
                tooltip: {
                    show: true,
                    trigger: "axis"
                },
                //弹窗工具
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {
                            show: true
                        },
                        saveAsImage: {
                            title: '保存为图片',
                            show: true
                        },
                        restore: {
                            show: true
                        },
                        dataZoom: {
                            show: true
                        },
                        magicType: {
                            type: ['line', 'bar']
                        }
                    }
                },
                xAxis: {
                    data: ["一月", "二月", "三月", "四月", "五月", "六月"]
                },
                yAxis: [{
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                    {
                        type: 'value',
                        name: '温度',
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} C'
                        }
                    }],
                series: [
                    {
                        name: "蒸发量",
                        type: 'bar',
                        data: [72.0, 123.0, 293.5, 193.5, 234.5, 223.0, 122.0, 167.0]
                    },
                    {
                        name: "降水量",
                        type: 'bar',
                        data: [142.0, 174.0, 293.5, 143.2, 342.5, 263.0, 222.0, 167.0]
                    },
                    {
                        name: "平均温度",
                        type: 'line',
                        // yAxisIndex: 1,
                        data: [23.0, 132.0, 36.5, 476.4, 334.5, 223.0, 122.0]
                    }
                ]
            });
        }

        // 获取 table 数据
        initTable(): void {
            console.log("我进去了。。。")
            this.tableLoading = true

            getTableData({
                pageNum: this.pageNum
            }).then((res: any) => {
                this.tableLoading = false
                if (res.code === 200) {
                    this.tableData = res.data.list
                    this.total = res.data.total
                } else {
                    this.$message.error(res.msg)
                }
            })
        }

        // 删除数据
        deleteData(id: number): void {
            this.$confirm('确认删除这条记录么？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                DeleteTableData(id).then((res: any) => {
                    if (res.code === 200) {
                        this.$message.success('删除成功')
                        this.initTable()
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }).catch(() => {
            })
        }

        //分页显示
        handleCurrentChange(val: number): void {
            this.pageNum = val
            this.initTable()
        }
    }
</script>

<style lang="stylus">
    .part2
        width 100%
        display flex
        justify-content space-between
        flex-direction column

        .sm-top
            width 100%

            h1
                margin 5px 0
                font-size 16px

            .echarts1
                width 100%
                height 300px
                background-color white

        .sm-middle
            .myTables
                width 100%
                height 'calc(100vh - %s)' % 667px
                overflow scroll

                .cell
                    color black

            h1
                margin 5px 0
                font-size 16px


            .el-pagination
                width: 100%
                height 10px
                text-align right
                margin 10px auto

</style>
