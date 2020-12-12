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
      // 若 localStorage 没有数据，则将 Mock 的数据存入
      if (!localStorage.getItem('goodsCategory')) {
        localStorage.setItem('goodsCategory',JSON.stringify("goodsCategory"))
      }
      // 每次获取数据时，再从 localStorage 中拉取数据
      var goodsCategory = JSON.parse(localStorage.getItem('goodsCategory'))
      return goodsCategory
    },
    //点击确定按钮添加数据
    addOrUpdateClassification(options){

      // const {spName,level,spNum,spSerial} = this
      this.options = this.goodsForm
     console.log(JSON.parse(localStorage.getItem('goodsCategory')))

     // 先从 localStorage 中拉取数据
       if (!localStorage.getItem('goodsCategory')) {
         var goodsCategory = JSON.parse(localStorage.getItem('goodsCategory'))
      }
     
      // 获取传入用户信息对象，是一个字符串，需要转化为对象
      var user = JSON.parse(options)
      // 使用 mock 随机生成一个 id
      user.id = Random.id()
      // 将 user 插入到 userlist 中
      goodsCategory.list.unshift(user)
      // 重新将 userlist 存入 localStorage 中
      localStorage.setItem('goodsCategory', JSON.stringify('goodsCategory'))
      return {
        data: '用户添加成功'
      }

     
      this.isShowDialog = false
    }
  },
  computed:{
    //拿数据
    ...mapState({
      goodsCategory:state => state.product.goodsCategory
    })
  }
}
</script>


