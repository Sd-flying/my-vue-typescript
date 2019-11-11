<template>
    <div class="table1">
        <!--        操作按钮-->
        <el-header style="text-align: right; font-size: 14px">
            <el-input placeholder="查询姓名" prefix-icon="el-icon-search" v-model="input21"></el-input>

            <div class="btns">
                <el-button type="primary" @click="handleAdd" icon="el-icon-edit">新增</el-button>
                <el-button type="primary" icon="el-icon-edit">
                    批量删除
                </el-button>
            </div>
        </el-header>
        <!--        table表格-->
        <el-table :data="formData" style="width: 98%;margin-left: 1%" v-loading="tableLoading"
                  :row-class-name="tableRowClassName">
            <el-table-column type="selection" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" width="200"></el-table-column>
            <el-table-column prop="age" label="年龄" width="200"></el-table-column>
            <el-table-column prop="gender" label="性别" width="200">
                <template slot-scope="scope">
                    {{scope.row.gebder===1?'男':'女'}}
                </template>
            </el-table-column>
            <el-table-column prop="address" label="居住地址" width="250"></el-table-column>
            <el-table-column prop="createTime" label="出生日期" align="center" width="240"></el-table-column>
            <el-table-column label="操作" fixed="right" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="deleteData(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--        分页-->
        <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-apge.sync="pageNum"
                :page-size="pageSize"
                layout="prev,pager,next,jumper"
                :total="total">
        </el-pagination>
        <!--        编辑界面-->
        <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :rule="ruleForms"
                   :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" ref="editForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="editForm.sex">
                        <el-radio class="radio" :label=1>男</el-radio>
                        <el-radio class="radio" :label=0>女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="出生日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
                </el-form-item>
                <el-form-item label="居住地址">
                    <el-input type="textarea" v-model="editForm.addr"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="dialogFormVisible=false">取消</el-button>
                <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">添加</el-button>
                <el-button v-else type="primary" @click="updateData">修改</el-button>
            </div>

        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {deleteTableItem, getTableData} from "@/api/user";

    @Component
    export default class Table extends Vue {
        input21: any = ''
        dialogStatus: string = ''

        textMap: object = {
            update: 'Edit',
            create: 'Create'
        }
        dialogFormVisible: boolean = false

        //table数据
        formData: any = []
        tableLoading: boolean = false

        //编辑界面的数据
        editForm: any = {
            id: '0',
            name: '',
            sex: 1,
            age: 0,
            birth: '',
            addr: ''
        }

        //编辑界面校验
        ruleForms: object = {
            name: [{required: true, message: '请输入姓名', trigger: 'blur'}],
            sex: [{required: true, message: '请输入性别', trigger: 'blur'}],
            age: [{required: true, message: '请输入年龄', trigger: 'blur'}],
            birth: [{required: true, message: '请输入生日', trigger: 'blur'}],
            addr: [{required: true, message: '请输入居住地址', trigger: 'blur'}]
        }

        //分页数据
        pageSize: number = 10
        pageNum: number = 1
        total: number = 0

        mounted() {
            this.initTables()
        }

        //初始化表格数据
        initTables(): void {
            this.tableLoading = true
            getTableData({
                pageNum: this.pageNum
            }).then((res: any) => {
                this.tableLoading = false;
                if (res.code === 200) {
                    this.formData = res.data.list
                    this.total = res.data.total
                } else {
                    this.$message.error(res.msg)
                }
            })
        }

        // 显示编辑界面
        handleEdit(id: number): void {
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
        }

        // 显示新增界面
        handleAdd(): void {
            this.dialogStatus = 'create'
            this.dialogFormVisible = true
        }

        //新增数据
        createData(): void {
            this.dialogFormVisible = false
        }

        // 编辑
        updateData(): void {
            this.dialogFormVisible = false
        }

        //删除表单数据
        deleteData(id: number): void {
            this.$confirm('确认删除这条记录么？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteTableItem(id).then((res: any) => {
                    if (res.code === 200) {
                        this.$message.success('删除成功')
                        this.initTables()
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
            this.initTables()
        }

        //改变行的背景颜色
        tableRowClassName(row: number, rowIndex: number): String {
            let odd, even
            if (rowIndex % 2 == 0) {
                return 'warning-row';
            } else {
                return 'success-row'
            }
        }
    }
</script>

<style lang="stylus">
    .table1
        width 98%
        height 'calc(100vh - %s)' % 245px
        margin-left 2%
        box-shadow 1px 1px 1px #e9e9e9
        border-radius 10px

        .el-header
            width 100%
            margin-top -5px
            margin-bottom 2%
            color #333
            line-height 60px
            background-color white
            box-shadow 1px 1px 1px #e9e9e9
            border-radius 10px
            display flex
            justify-content space-between

            .el-input--prefix
                width 30%
                float left
                color black !important
                font-size 1rem

                .el-input__inner
                    padding-left 50px
                    background-color #F0F0F0
                    border-radius 20px
                    border 0.1px solid #F0F0F0
                    font-size 1rem

            .el-button--primary
                background-color #F0F0F0
                border-radius 20px
                border-color #F0F0F0
                box-shadow 1px 1px 1px #F0F0F0
                color #A5A2A2

                &:hover {
                    background-color #CBC6C6
                    color white
                }

        .el-table
            height 600px
            border-radius 20px

            .warning-row
                background oldlace

            .success-row
                background white;

        .el-pagination
            float right
            margin-top 20px
</style>
