<template>
  <div>
    <!-- 分类列表 -->
    <el-card>
      <el-form :inline="true" class="demo-form-inline" size="small">
        <el-form-item label="输入搜索">
          <el-input placeholder="品牌名称/关键字"></el-input>
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
            >添加
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
    </el-card>

    <!-- 表格 -->
    <el-table
      style="width: 100%; margin: 20px 0"
      border
      :data="trademarkList.list"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column label="编号" prop="id" align="center" width="80">
      </el-table-column>
      <el-table-column label="品牌名称" prop="name" align="center">
      </el-table-column>
      <el-table-column label="品牌logo" prop="tmName" align="center">
        <template slot-scope="{ row, $index }">
          <img :src="row.logo" style="width:50px;height:50px" />
        </template>
      </el-table-column>
      <el-table-column
        label="品牌首字母"
        prop="firstLetter"
        align="center"
        width="100"
      >
      </el-table-column>
      <el-table-column label="排序" prop="sort" align="center" width="80">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{ row, $index }">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页  @size-change="handleSizeChange"
               @current-change="handleCurrentChange"-->
    <Pagination :total1="trademarkList.total"></Pagination>

    <!-- dialog对话框，用于增加组件 -->
    <el-dialog title="添加品牌" :visible.sync="isShowDialog">
      <el-form ref="form" label-width="80px">
        <el-form-item label="品牌名称" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌首字母" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌logo" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- dialog对话框，用于显示与隐藏组件 -->
    <el-dialog title="多选" :visible.sync="isShowDialog">
      <el-transfer></el-transfer>
      <el-input autocomplete="off"></el-input>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "gruop1",
  data() {
    return {
      radio: 3,
      headLine: {
        primaryTitle: "标签名称",
        secondaryTitle: "状态"
      },
      isShowDialog: false,
      isShow: true
    };
  },
  methods: {
    showAddDialog() {
      this.isShowDialog = true;
    },
    ShowAndHide() {
      this.isShowDialog = true;
    },
    getTrademark() {
      this.$store.dispatch("getTradermark");
    }
  },
  mounted() {
    this.getTrademark();
  },
  computed: {
    ...mapState({
      trademarkList: state => state.product.trademarkInfo
    })
  }
};
</script>

<style>
/* .el-col {
  margin-bottom: 1px;
 
} */
.el-form-item {
  margin-bottom: 30px;
}
.category {
  margin-left: 20px;
}
</style>
