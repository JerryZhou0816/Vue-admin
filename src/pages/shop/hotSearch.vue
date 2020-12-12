<template>
  <div>
    <el-card>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="公告内容">
          <el-input placeholder="公告内容" size="small"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select placeholder="状态" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否置顶">
          <el-select placeholder="是否置顶" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small"
            >搜索</el-button
          >
          <el-button icon="el-icon-delete" size="small">清空</el-button>
        </el-form-item>
      </el-form>

      <el-row>
        <el-col :span="21">
          <el-button type="primary" icon="el-icon-plus" size="small"
            >添加</el-button
          >
          <el-button type="danger" icon="el-icon-plus" size="small" disabled
            >批量删除</el-button
          ></el-col
        >
        <el-col :span="3">
          <el-button icon="el-icon-refresh" circle size="small"></el-button>
          <el-button icon="el-icon-menu" circle size="small"></el-button>
          <el-button icon="el-icon-search" circle size="small"></el-button
        ></el-col>
      </el-row>
      <span class="select">当前表格已选择<span class="number">0</span>项</span>
      <el-button type="text">清 空</el-button>
      <el-table
        ref="singleTable"
        :data="shopList"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%; margin-top: 10px"
        border
        :header-cell-style="{
          background: '#fafafa',
          color: 'rgba(0, 0, 0, 0.85)',
        }"
      >
        <el-table-column
          type="selection"
          width="50"
          label="序号"
          align="center"
        >
        </el-table-column>
        <el-table-column property="date" label="热搜标题" align="center">
        </el-table-column>
        <el-table-column property="name" label="热搜内容" align="center">
        </el-table-column>
        <el-table-column
          property="address"
          label="录入时间"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          property="address"
          label="顺序"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column property="address" label="起用状态" align="center">
        </el-table-column>
        <el-table-column
          property="address"
          label="操作"
          align="center"
          width="259px"
        >
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
  name: "hotsearch",
  data() {
    return {
      shopList: [
        {
          name: 1,
          age: 2,
        },
      ],
    };
  },
};
</script>

<style>
</style>
