<style>
  .el-table .info-row {
    background: #c9e5f5;
  }
  .el-table .positive-row {
    background: #e2f0e4;
  }
  .page-box{
    float: right;
  }
  .search-box{
    width: 200px;
  }
</style>
<template>
  <div>
    <div class="search-box">
      <el-input
        placeholder="姓名"
        icon="search">
      </el-input>
    </div>
    <el-table
    v-loading="false"
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
    <el-dialog title="编辑" :visible.sync="flag">
      <div>姓名<el-input v-model="name"></el-input></div>
      <div>地址<el-input v-model="address"></el-input></div>
    </el-dialog>
    <div class="page-box">
      <el-pagination
      layout="prev, pager, next"
      :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import { getInfo, getOneInfo } from './../../api/api'
  export default {
    data: () => ({
      flag: false,
      name: '',
      address: '',
      tableData2: [
        // {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // },
        // {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路'
        // }
      ]
    }),
    mounted: function () {
      console.log('1312')
      getInfo().then(data => {
        console.log(data)
        this.tableData2 = data
      })
    },
    methods: {
      tableRowClassName (row, index) {
        if (index === 1) {
          return 'info-row'
        } else if (index === 3) {
          return 'positive-row'
        }
        return ''
      },
      handleEdit (a) {
        this.flag = true
        console.log(a)
        console.log(getOneInfo)
        // alert(a, b)
        var _obj = {
          id: a
        }
        getOneInfo(_obj).then(data => {
          console.log(data)
          this.name = data.name
          this.address = data.address
          // this.tableData2 = data
        })
      }
    }
  }
</script>
