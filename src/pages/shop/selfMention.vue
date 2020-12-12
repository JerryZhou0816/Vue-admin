<template>
  <div>
    <el-card>
      <el-row :span="24">
        <el-col :span="20">
          <el-button
            icon="el-icon-plus"
            size="mini"
            @click="dialogVisible = true"
            >添加</el-button
          >
          <el-button type="danger" icon="el-icon-plus" size="small" disabled
            >批量删除</el-button
          ></el-col
        >
        <el-col :span="4">
          <el-button icon="el-icon-refresh" circle size="small"></el-button>
          <el-button icon="el-icon-menu" circle size="small"></el-button>
          <el-button icon="el-icon-search" circle size="small"></el-button>
        </el-col>
      </el-row>
      <span class="select" style="font-size: 14px; clolor: #303133"
        >当前表格已选择<span
          class="number"
          style="font-size: 16px; font-weight: 600"
          >0</span
        >项</span
      >
      <el-button type="text">清 空</el-button>

      <el-table
        ref="multipleTable"
        :data="addressList"
        tooltip-effect="dark"
        style="width: 100%; text-align:center"
        border
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="自提点名称" width="120" prop="addrName">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="city" label="城市"></el-table-column>
        <el-table-column prop="area" label="区/县"> </el-table-column>
        <el-table-column prop="addr" label="地址"> </el-table-column>
        <el-table-column prop="address" label="操作">
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
    </el-card>
  </div>
</template>

<script>
export default {
  name: "self",
  addressList: [{}]
};
</script>

<style></style>
