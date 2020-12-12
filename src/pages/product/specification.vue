<template>
  <div>
      <!-- 分类列表 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item label="属性名称">
        <el-input v-model="formInline.user" placeholder="属性名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="" icon="el-icon-delete">清空</el-button>
      </el-form-item>
    </el-form>

       <!-- 新增、图标 -->
    <el-row :gutter="24">
       <el-col :sm="20">
        <el-button
          type="primary" 
          icon="el-icon-plus" 
          size="small"
          @click="showAddDialog"
          >新增
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

     <!-- 表格 -->
     <el-table
       style="width: 100%; margin: 20px 0" border>
       <el-table-column
         align="center"
         prop="prop"
         label="序号"
         width="width">
       </el-table-column>
       <el-table-column
         align="center"
         prop="prop"
         label="属性ID"
         width="width">
       </el-table-column>
       <el-table-column
         align="center"
         prop="prop"
         label="属性名称"
         width="width">
       </el-table-column>
        <el-table-column
         align="center"
         prop="prop"
         label="属性值"
         width="width">
       </el-table-column>
        <el-table-column
         align="center"
         prop="prop"
         label="操作"
         width="width">
       </el-table-column>
     </el-table>

     <!-- 分页 -->
     <Pagination></Pagination>

     
       <!-- dialog对话框，用于增加组件 -->
    <el-dialog
      title="新增"
      :visible.sync="isShowDialog">
      
      <el-table
        border
        style="width: 100%"
        :data="defaultList">
        <el-table-column
          prop="prop"
          label="属性名称"
          width="width">
           <el-input placeholder="请输入内容"></el-input>

        </el-table-column>
        <el-table-column
          prop="prop"
          label="属性值"
          width="width">
             <el-input placeholder="请输入内容" style="width:150px;"></el-input>
             <el-button type="primary" icon="el-icon-plus" ></el-button>

        </el-table-column>

      </el-table>





    </el-dialog>





  </div>
</template>

<script>
export default {
  name: "5",
  data(){
    return{
      formInline: {
        user: '',
        region: ''
        
      },
      isShowDialog: false,
      defaultList:[
        {
         
        }
      ]
    }
  },
  methods:{
    showAddDialog(){
      this.isShowDialog = true;
    },
   
  }
};
</script>

<style></style>
