<template>
  <div>
    <template v-if="isShow">
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
          <el-button type="danger" disabled size="small">批量删除 </el-button>
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
      <el-table
        style="width: 100%; margin: 20px 0"
        border
        :data="allgoodsList.list"
      >
        <el-table-column prop="prop" label="label" type="selection">
        </el-table-column>

        <el-table-column align="center" prop="brandName" label="产品名称">
        </el-table-column>
        <el-table-column align="center" prop="originalPrice" label="商品原价">
        </el-table-column>
        <el-table-column
          align="center"
          prop="price"
          label="商品现价"
          width="70px"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="stock"
          label="商品库存"
          width="70px"
        >
        </el-table-column>
        <el-table-column align="center" label="产品图片">
          <template slot-scope="{ row, $index }">
            <img :src="row.pic" alt="" style="width: 100px; height: 60px" />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="newStatus"
          label="状态"
          width="50px"
        >
        </el-table-column>
        <el-table-column align="center" prop="prop" label="操作">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >修改</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <Pagination></Pagination>
    </template>
    <!-- -->

    <goodsForm v-else></goodsForm>
  </div>
</template>

<script>
import { mapState } from "vuex";
import goodsForm from "./goodsForm";
export default {
  name: "goods",
  data() {
    return {
      //定义分类列表
      headLine: {
        primaryTitle: "产品名字",
        secondaryTitle: "状态"
      },
      //显示与隐藏增加页
      isShow: true
    };
  },
  mounted() {
    //调用
    this.getAllgoodsList();
  },
  methods: {
    //点击修改新增显示添加页
    toGoodsForm() {
      this.isShow = false;
    },
    //获取商品列表
    getAllgoodsList() {
      this.$store.dispatch("getAllgoodsList");
    }
    //  //点击修改
    //  changeGoods(){

    //  }
  },
  computed: {
    ...mapState({
      allgoodsList: state => state.product.allgoodsList
    })
  },
  components: {
    goodsForm
  }
};
</script>
