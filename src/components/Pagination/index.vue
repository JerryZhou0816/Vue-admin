<template>
  <div>
  
     <!-- 分页  @current-change="handleCurrentChange"-->          
    <el-pagination
      background
      style="text-align:right"
      :current-page="page"
      :pageSizes="[10, 20, 30, 40,50,100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        page:1,
        pageSize:100,
        total:10,
      }
    }
  }
</script>

<style>

</style>