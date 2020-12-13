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

    <!-- 表格 -->
    <el-table style="width: 100%; margin: 20px 0;" border  :data="goodsCategory.list">
      <el-table-column align="center"  prop="keywords" label="分类名称">
      </el-table-column>
      
      <el-table-column align="center" prop="showStatus" label="级别">
      </el-table-column>

      <el-table-column align="center"  prop="productCount" label="商品数量">
      </el-table-column>

      <el-table-column  align="center" prop="sort"  label="排序">
      </el-table-column>

      <el-table-column align="center" prop="prop" label="操作">
        <el-button type="success" icon="el-icon-edit" size="mini">修改</el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
      </el-table-column>
    </el-table>

    <!-- dialog对话框，用于增加组件 -->
    <el-dialog title="新增" :visible.sync="isShowDialog">
      <el-form ref="form" :model="goodsForm" label-width="80px">
        
        <el-form-item label="分类名称">
          <el-input placeholder="分类名称" v-model="goodsForm.spName"></el-input>
        </el-form-item>

        <el-form-item label="级别">
          <el-input placeholder="" style="width:220px" v-model="goodsForm.level"></el-input>
        </el-form-item> 

        <el-form-item label="商品数量">
          <el-input  placeholder="" style="width:220px" v-model="goodsForm.spNum"></el-input>
        </el-form-item>

        <el-form-item label="排序号">
          <el-input  placeholder="" style="width:220px" v-model="goodsForm.spSerial"></el-input>
        </el-form-item>
        
        <el-form-item align="right">
          <el-button type="primary" size="small" @click="addOrUpdateClassification">确定</el-button>
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
      // goodsCategory,
      isShowDialog: false, //dialog切换
      
      //收集数据的对象
      goodsForm:{
        spName:'',
        level:'',
        spNum:'',
        spSerial:''
      },
    
      radio:'',
      // goodsList:{
      //   goodsCategory
      // }
    }
  },
  mounted(){
    //调用
    this.getGoodsCategory()
  },
  methods:{
    //点击新增按钮显示dialog
    showAddDialog(){
      this.isShowDialog = true
      //每次打开dialog清空数据 ，解决bug 
       this.goodsForm = {
          spName:'',
          level:'',
          spNum:'',
          spSerial:''
      }
      
    },
    //获取商品分类
    getGoodsCategory(){
      this.$store.dispatch('getGoodsCategory') 
    },
    //点击确定按钮添加数据
    addOrUpdateClassification(){
      
      



      this.isShowDialog = false
    }
  },
  computed:{
    //拿数据
    ...mapState({
      goodsCategory:state => state.product.goodsCategory
    })
  }
};
</script>
