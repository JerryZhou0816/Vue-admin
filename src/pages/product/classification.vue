<template>
  <div>
    <el-button 
      type="primary"  
      icon="el-icon-plus" 
      size="small"
      @click="showAddDialog"
      >
    新增
    </el-button>

      <el-table style="width: 100%; margin: 20px 0;" border  >
        <el-table-column
          align="center"
          prop="prop"
          label="分类名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="图片">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="状态">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="排序号">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="操作">
        </el-table-column>
      </el-table>



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
      </el-form>
    </el-dialog>
    
        






  </div>
</template>

<script>
export default {
  name: 'classification3',
  data(){
    return{
      isShowDialog: false,
    }
  },
  methods:{
    showAddDialog(){
      this.isShowDialog = true;
    },
   
  }
}
</script>


