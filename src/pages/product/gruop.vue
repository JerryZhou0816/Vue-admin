<template>
  <div>
    <CategoryList :headLine="headLine"></CategoryList>
    
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
         @click="ShowAndHide"
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
    <el-table style="width: 100%; margin: 20px 0" border>
      <el-table-column
        label="序号"
        type="index"
        width="80"
        align="center"
      ></el-table-column>

      <el-table-column label="标签名称" prop="tmName"> </el-table-column>
      <el-table-column label="状态" prop="tmName"> </el-table-column>
      <el-table-column label="默认类型" prop="tmName"> </el-table-column>
      <el-table-column label="排序" prop="tmName"> </el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>

     <!-- 分页  @size-change="handleSizeChange"
               @current-change="handleCurrentChange"-->
     <Pagination></Pagination>

    <!-- dialog对话框，用于增加组件 -->
    <el-dialog
      title="新增"
      :visible.sync="isShowDialog">
      
      <el-form ref="form"  label-width="80px">
        <el-form-item label="标签名称" label-width="100px">
           <el-input  autocomplete="off"></el-input>
        </el-form-item>

        <div class="category">
        <el-form-item label="类别">
          <el-radio-group >
            <el-radio v-model="radio" label="1">正常</el-radio>
            <el-radio v-model="radio" label="2">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
       

        <el-form-item label="列表样式">
          <el-radio-group >
            <el-radio v-model="radio" label="1">一列一个</el-radio>
            <el-radio v-model="radio" label="1">一列两个</el-radio>
            <el-radio v-model="radio" label="2">一列三个</el-radio>
          </el-radio-group>
        </el-form-item>
     </div>
      
        <el-form-item label="排序" label-width="100px">
           <el-input  autocomplete="off"></el-input>
        </el-form-item>  

         <el-form-item align="right">
           <el-button type="primary" size="small">确定</el-button>
           <el-button size="small">取消</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
    
   
    <!-- dialog对话框，用于显示与隐藏组件 -->
    <el-dialog
      title="多选"
      :visible.sync="isShowAndHide">
       <el-transfer ></el-transfer>



    </el-dialog>
    
    

  </div>
</template>

<script>
export default {
  name: 'gruop1',
  data(){
    return{
     radio: 3,
      headLine:{
        primaryTitle:"标签名称",
        secondaryTitle:'状态'
      },
      isShowDialog: false,
      isShowAndHide:false,
     
    }
  },
  methods:{
    showAddDialog(){
      this.isShowDialog = true;
    },
   ShowAndHide(){
      this.isShowAndHide = true;
    },
  }
}
</script>

<style>
.el-col {
  margin-bottom: -7px;
 
}
.el-form-item{
  margin-bottom: 30px;
}
.category{
  margin-left: 20px;
}

</style>
