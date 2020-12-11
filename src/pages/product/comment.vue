<template>
  <div>
    <CategoryList :headLine="headLine"></CategoryList>
     
        <!--图标 -->
     <el-row type="flex" class="buttonIconContainer">
      
       <!-- 图标 -->
      <el-col :sm="22" class="buttonIcon">
        <HintButton  
          icon="el-icon-refresh" 
          circle 
          size="small"
          title="刷新"
        ></HintButton>
        <HintButton 
          icon="el-icon-menu"
          circle
          size="small"
          title="显 隐"
        ></HintButton>
        <HintButton 
          icon="el-icon-search" 
          circle 
          size="small"
          title="搜索"
        ></HintButton>
      </el-col>
     </el-row>
   

     <!-- 表格 -->
     <el-table
         style="width: 100%; margin: 20px 0" border>
       <el-table-column
         prop="prop"
         label="序号"
         align="center">
       </el-table-column>
       <el-table-column
         prop="prop"
         label="商品名"
         align="center">
       </el-table-column>
       <el-table-column
         prop="prop"
         label="用户昵称"
         align="center">
       </el-table-column>
       <el-table-column
        prop="prop"
         label="记录时间"
         align="center">
       </el-table-column>
       <el-table-column
         prop="prop"
         label="回复时间"
         align="center">
       </el-table-column>
       <el-table-column
        prop="prop"
         label="评价得分"
         align="center">
       </el-table-column>
       <el-table-column
         prop="prop"
         label="是否匿名"
         align="center">
       </el-table-column>
       <el-table-column
        prop="prop"
         label="审核状态"
         align="center">
       </el-table-column>
       <el-table-column
         prop="prop"
         label="操作"
         align="center">
       </el-table-column>
     </el-table>

     <Pagination></Pagination>


  </div>
</template>

<script>
export default {
  name: 'comment4',
  data(){
    return{
       headLine:{
        primaryTitle:"商品名",
        secondaryTitle:'审核状态'
      },
    }
  }
}
</script>

<style>

  .buttonIcon{
    display: flex;
    justify-content: flex-end;
   
  }
 a{
    padding: 0 4px;
    }

</style>
