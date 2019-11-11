import myHttp from './inithttp'

//获取表格数据
export const getTableData = (param: any): any => myHttp.get('/getTable', {params: param}).then(res => res.data)

//删除表格数据
export const deleteTableItem = (id: number): any => myHttp.delete('/deleteTableItem', {params: {id: id}}).then(res => res.data)

//编辑表格数据
