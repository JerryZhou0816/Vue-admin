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

      <el-row :span="24">
        <el-col :span="20">
          <el-button type="primary" icon="el-icon-plus" size="small"
            >添加</el-button
          ></el-col
        >
        <el-col :span="4">
          <el-button icon="el-icon-refresh" circle size="small"></el-button>
          <el-button icon="el-icon-menu" circle size="small"></el-button>
          <el-button icon="el-icon-search" circle size="small"></el-button>
        </el-col>
      </el-row>
      <span class="select">当前表格已选择<span class="number">0</span>项</span>
      <el-button type="text">清 空</el-button>
      <el-table
        ref="singleTable"
        :data="tableData"
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
          width="54"
          label="序号"
          align="center"
        >
        </el-table-column>
        <el-table-column property="date" label="轮播图片" align="center">
          <template>
            <img src="" alt="" width="100px" height="100px" />
          </template>
        </el-table-column>
        <el-table-column property="name" label="顺序" align="center">
        </el-table-column>
        <el-table-column
          property="address"
          label="状态"
          align="center"
          width="161px"
        >
        </el-table-column>
        <el-table-column
          property="address"
          label="操作"
          align="center"
          width="378px"
        >
          <template>
            <el-button type="primary" size="mini "></el-button>
            <el-button type="drange" size="mini"></el-button>
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
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style></style>
