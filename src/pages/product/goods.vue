<template>
  <div>

    <block v-if="isShow">
     <CategoryList :headLine="headLine"></CategoryList>
      
      <!-- 新增、删除、图标 -->
     
     <el-row :gutter="24">
       <el-col :sm="20">
        <el-button
          type="primary" 
          icon="el-icon-plus" 
          size="small"
          @click="toGoodsForm"
          >新增
        </el-button>
        <el-button
           type="danger" 
           disabled
          size="small"
          >批量删除
        </el-button>
      </el-col>
       <!-- 图标 -->
      <el-col :sm="4">
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
     
     <Title></Title>

      <!-- 表格 -->
      <el-table  style="width: 100%; margin: 20px 0" border>
        <el-table-column
          prop="prop"
          label="label"
           type="selection">
        </el-table-column>

        <el-table-column
          align="center"
          prop="prop"
          label="产品名称" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="商品原价" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="商品现价" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="商品库存" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="产品图片" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="状态" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="操作" >
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <Pagination></Pagination>
      </block>
      <!-- -->
      
      <goodsForm v-else></goodsForm>




  </div>
</template>

<script>
import goodsForm from './goodsForm'
export default {
  name: 'goods2',
 data(){
   return{
     headLine:{
      primaryTitle:"产品名字",
      secondaryTitle:'状态',
     
    },
    isShow:true
   }
 },
 methods:{
   toGoodsForm(){
     this.isShow = false
   }
 },
 components:{
   goodsForm
 }
  
}
</script>

