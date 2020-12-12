<template>
  <div>
    <el-form ref="form"  label-width="100px">
     
       <el-form-item label="产品图片">
          <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card">
              <i class="el-icon-plus"></i>
          </el-upload>
           <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        
       </el-form-item>

			
     

        <el-form-item label="状态">
          <el-radio-group >
            <el-radio v-model="radio" label="1">上架</el-radio>
            <el-radio v-model="radio" label="2">下架</el-radio>
          </el-radio-group>
        </el-form-item>
       
         <el-form-item label="产品分类">
           <el-select placeholder="请选择" style="width:190px;">
             <el-optio>
             </el-optio>
           </el-select>
        </el-form-item>

         <el-form-item label="产品分组">
           <el-select placeholder="请选择" style="width:220px;">
             <el-optio>
             </el-optio>
           </el-select>
        </el-form-item>

         <el-form-item label="产品名称">
           <el-input placeholder="产品名称" style="width:360px;"></el-input>
        </el-form-item>
	
     <el-form-item label="产品卖点">
           
         <el-input placeholder="产品卖点" type="textarea" rows="2" style="width:360px;"></el-input>
       </el-form-item>

		
        <el-form-item label="配送方式">
         <el-checkbox-group v-model="checkList">
          <el-checkbox label="商家配送"></el-checkbox>
          <el-checkbox label="用户自提"></el-checkbox>
        </el-checkbox-group>
       </el-form-item>
 
        <el-form-item label="商品规格">
         <el-button >添加规格</el-button>
       </el-form-item>
 
        <el-form-item label="规格名">
           <el-input placeholder="规格名" style="width:190px;"></el-input>
       </el-form-item>
 
        <el-form-item label="规格值">
          <el-input placeholder="规格值" style="width:190px;"></el-input>
       </el-form-item>
 
		
			<el-form-item>
         <el-button type="primary">保存</el-button>
         <el-button >取消</el-button>
       </el-form-item>
      


      <el-form-item>
       <el-table  style="width: 100%; margin: 10px 0 30px 0" border>
 
        <el-table-column
          align="center"
          prop="prop"
          label="销售价" >
          
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="市场价" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="库存" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="商品重量(kg)" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="商品体积(m3)" >
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="操作" >
        </el-table-column>
    </el-table>
    </el-form-item>












    </el-form>
    
  




  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return{
      dialogImageUrl: '',
        dialogVisible: false
    }
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>

<style>

</style>
