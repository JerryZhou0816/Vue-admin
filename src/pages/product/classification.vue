<template>
  <div>
    <!-- 新增 -->
    <el-button 
      type="primary"  
      icon="el-icon-plus" 
      size="small"
      @click="showAddDialog"
      >新增
    </el-button>

      <el-table style="width: 100%; margin: 20px 0;" border  :data="goodsCategory.list">
        <el-table-column
          align="center"
          prop="keywords"
          label="分类名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="showStatus"
          label="级别">
        </el-table-column>
        <el-table-column
          align="center"
          prop="productCount"
          label="商品数量">
        </el-table-column>
        <el-table-column
          align="center"
          prop="sort"
          label="排序">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="操作">
          <el-button type="success" icon="el-icon-edit" size="mini">修改</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </el-table-column>
      </el-table>



        <!-- dialog对话框，用于增加组件 -->
    <el-dialog
      title="新增"
      :visible.sync="isShowDialog">
      
      <el-form ref="form"  label-width="80px">
        
        
        <el-form-item label="分类名称">
          <el-input placeholder=""></el-input>
        </el-form-item>
       

        <el-form-item label="上级分类">
         <el-select placeholder="请选择" style="width:220px;">
             <el-optio>
             </el-optio>
           </el-select>
        </el-form-item>
       
      
        <el-form-item label="排序号">
          <el-input type="number" placeholder="" style="width:220px"></el-input>
        </el-form-item>


       <el-form-item label="状态">
          <el-radio-group >
            <el-radio v-model="radio" label="1">下线</el-radio>
            <el-radio v-model="radio" label="2">正常</el-radio>
          </el-radio-group>
        </el-form-item>


          <el-form-item align="right">
           <el-button type="primary" size="small" @click="isShowDialog = false">确定</el-button>
           <el-button size="small"  @click="isShowDialog = false">取消</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
    
        






  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'classification',
  data(){
    return{
      isShowDialog: false,
      num: 1,
    
      radio:''
    }
  },
  mounted(){
    this.getGoodsCategory()
  },
  methods:{
    showAddDialog(){
      this.isShowDialog = true;
    },
    getGoodsCategory(){
      this.$store.dispatch('getGoodsCategory')
    }
  },
  computed:{
    ...mapState({
      goodsCategory:state => state.product.goodsCategory
    })
  }
}
</script>


