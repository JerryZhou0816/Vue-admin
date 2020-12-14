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
        <template slot-scope="{row,$index}">
          <el-button type="success" icon="el-icon-edit" size="mini" @click="showUpdateDialog(row)" >修改</el-button>
       
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleterupdateclassification">删除</el-button>
           </template>
      </el-table-column>
    </el-table>

    <!-- dialog对话框，用于增加组件 -->
    <el-dialog 
     :title="goodsForm.id ? '修改' : '新增'"
     :visible.sync="isShowDialog">
      <el-form ref="spForm"  :rules='rules' :model="goodsForm" label-width="80px">
        
        <el-form-item label="分类名称"  prop="keywords">
          <el-input placeholder="分类名称"  v-model="goodsForm.keywords"></el-input>
        </el-form-item>

        <el-form-item label="级别"  prop="showStatus" >
          <el-input  style="width:220px" v-model="goodsForm.showStatus"></el-input>
        </el-form-item> 

        <el-form-item label="商品数量"  prop="productCount">
          <el-input  style="width:220px" v-model="goodsForm.productCount"></el-input>
        </el-form-item>

        <el-form-item label="排序号" prop="sort" > 
          <el-input   style="width:220px" v-model="goodsForm.sort"></el-input>
        </el-form-item>
        
        <el-form-item align="right" >
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
        // id:'',
        keywords:'',
        showStatus:'',
        productCount:'',
        sort:''
      },
    
      radio:'',
      //验证规则
     rules: {
        keywords: [
          //必须写  trigger失去焦点验证
          { required: true, message: "请输入名称", trigger: "blur" }, 
          //长度
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'change' },
        ],
        showStatus: [
          //必须写  trigger失去焦点验证
          { required: true, message: "级别", trigger: "blur" }, 
          //长度
          { min: 1, max: 15, message: '长度在 2 到 15 个字符', trigger: 'change' },
        ],
        productCount: [
          //必须写  trigger失去焦点验证
          { required: true, message: "请输入商品数量", trigger: "blur" }, 
          //长度
          { min: 1, max: 15, message: '长度在 2 到 15 个字符', trigger: 'change' },
        ],
        keywords: [
          //必须写  trigger失去焦点验证
          { required: true, message: "请输入排序号", trigger: "blur" }, 
          //长度
          { min: 1, max: 15, message: '长度在 2 到 15 个字符', trigger: 'change' },
        ],
       
      }



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
        keywords:'',
        showStatus:'',
        productCount:'',
        sort:''
      }
      
    },
    //获取商品分类
    getGoodsCategory(){
      this.$store.dispatch('getGoodsCategory') 
    },
    //点击确定按钮添加数据
    addOrUpdateClassification(){   
      let newObj = {
        id:this.goodsCategory.list.length,
        keywords:this.goodsForm.keywords,
        showStatus:this.goodsForm.showStatus,
        productCount:this.goodsForm.productCount,
        sort:this.goodsForm.sort,
      } 
      this.$store.dispatch('addOrUpdateClassification',newObj)
      this.isShowDialog = false
    },
    //点击删除按钮
    deleterupdateclassification(){
       this.$store.dispatch('deleterupdateclassification',row)
    },
    //点击修改按钮
    showUpdateDialog(row){
      this.isShowDialog = true
      this.goodsForm = {...row}
      // this.$store.dispatch('addOrUpdateClassification',row)

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
