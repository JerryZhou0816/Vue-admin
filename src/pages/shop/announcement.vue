<template>
  <div>
    <el-card>
      <el-row :span="24">
        <el-col :span="20">
          <el-button type="primary" icon="el-icon-plus" size="small"
            >添加</el-button
          ></el-col
        >
        <el-col :span="4">
          <el-button icon="el-icon-refresh" circle size="small"></el-button>
          <el-button icon="el-icon-menu" circle size="small"></el-button>
          <el-button icon="el-icon-search" circle size="small"></el-button
        ></el-col>
      </el-row>

      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%; margin-top: 10px"
        border
        :header-cell-style="{
          background: '#fafafa',
          color: 'rgba(0, 0, 0, 0.85)'
        }"
      >
        <el-table-column type="index" width="50" label="序号" align="center">
        </el-table-column>
        <el-table-column property="date" label="公告内容" align="center">
        </el-table-column>
        <el-table-column property="name" label="状态" align="center">
        </el-table-column>
        <el-table-column property="address" label="是否置顶" align="center">
        </el-table-column>
        <el-table-column property="address" label="操作" align="center">
          <template>
            <el-button type="primary" icon="el-icon-edit" size="small"
              >编辑</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange" -->
      <el-pagination
        :current-page="2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout=" ->,total,sizes,prev, pager, next, jumper  "
        :total="400"
        background
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "announcement",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    // getclassify();
  }
  // methods: {
  //   async getclassify() {
  //     try {
  //       const result = await
  //     } catch (error) {}
  //   },
  // },
};
</script>

<style></style>
