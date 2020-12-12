<template>
  <el-card>
    <el-form :inline="true" :model="form" label-width="100px">
      <!-- 用户昵称及状态 -->
      <el-form-item label="用户昵称" label-width="70px">
        <el-input placeholder="用户昵称"></el-input>
      </el-form-item>

      <!-- 状态 -->
      <el-form-item label="状态" label-width="50px">
        <el-select v-model="value" clearable placeholder="状态">
          <el-option
            v-for="item in Options"
            :key="item.value"
            label="label"
            :value="Options"
          ></el-option>
        </el-select>
      </el-form-item>

      <!-- 搜索按钮 -->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-form-item>

      <!-- 搜索删除 -->
      <el-form-item>
        <el-button icon="el-icon-delete">搜索</el-button>
      </el-form-item>
    </el-form>
    <!-- 按钮 -->
    <div class="avue-crud__menu">
      <!-- 批量删除按钮 -->
      <el-button type="danger" size="mini">批量删除</el-button>
      <div style="float:right">
        <!-- 三个图标按钮 -->
        <el-button size="mini" circle icon="el-icon-refresh"></el-button>
        <el-button size="mini" circle icon="el-icon-menu"></el-button>
        <el-button size="mini" circle icon="el-icon-search"></el-button>
      </div>
    </div>
    <!-- 表格头部信息 -->
    <div class="Information">
      <el-row :gutter="24">
        <el-col :span="24">
          <span>当前表格已选择 0 项</span>
          <a href="javascript:;" style="text-decoration:none">清空</a>
        </el-col>
      </el-row>
    </div>

    <!-- :data="data" -->
    <!-- 表格详情 -->
    <div class="tableContainer">
      <el-table border>
        <el-table-column type="selection" label="label" width="55">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="prop"
          label="用户昵称"
        >
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="prop"
          label="用户头像"
        >
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="prop"
          label="状态"
        >
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="prop"
          label="操作"
        >
        </el-table-column>
      </el-table>
    </div>

    <!-- 底部分页器 -->
    <div>
      <!-- @size-change="handleSizeChange" 
      @current-change="handleCurrentChange" -->
      <el-pagination
        background
        :current-page="1"
        :page-sizes="[5, 7, 10]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="0"
        style="text-align:right"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "announcement",
  data() {
    return {
      // 状态的收集
      value: "",
      Options: [
        {
          value: "选项1",
          label: "禁用"
        },
        {
          value: "选项2",
          label: "正常"
        }
      ],
      form: {}
    };
  }
};
</script>

<style>
.Information {
  margin-top: 20px;
  margin-bottom: 10px;
}
.tableContainer {
  width: 100%;
  margin-top: "20px";
  color: black;
}
</style>
