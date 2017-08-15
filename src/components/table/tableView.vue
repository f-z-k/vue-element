<style>
  .el-table .info-row {
    background: #c9e5f5;
  }
  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
<template>
  <div>
    <el-table
    :data="tableData2"
    style="width: 100%"
    border
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      align="center">
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  data: () => ({
    tableData2: [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路'
      }
    ]
  }),
  methods: {
    tableRowClassName (row, index) {
      if (index === 1) {
        return 'info-row'
      } else if (index === 3) {
        return 'positive-row'
      }
      return ''
    }
  }
}
</script>
