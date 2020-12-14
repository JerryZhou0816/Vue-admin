<template>
  <div>
    <el-card>
      <el-row :span="24">
        <el-col :span="20">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="small"
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
      <!-- @current-change="handleCurrentChange"
       :data="tableData" -->
      <el-table
        :data="carouselList"
        ref="singleTable"
        highlight-current-row
        style="width: 100%; margin-top: 10px"
        border
        :header-cell-style="{
          background: '#fafafa',
          color: 'rgba(0, 0, 0, 0.85)'
        }"
      >
        <el-table-column
          type="selection"
          width="54"
          label="序号"
          align="center"
          prop="name"
        >
        </el-table-column>
        <el-table-column
          property="date"
          label="轮播图片"
          align="center"
          width="200"
        >
          <template slot-scope="{ row, $index }">
            <img :src="row.image_url" alt="" width="100px" height="100px" />
          </template>
        </el-table-column>
        <el-table-column property="name" prop="id" label="顺序" align="center">
        </el-table-column>
        <el-table-column
          property="address"
          label="状态"
          align="center"
          width="161px"
        >
          <template>
            <el-tag size="mini">正常</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          property="address"
          label="操作"
          align="center"
          width="378px"
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
      <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange" -->
      <Pagination :total="count"></Pagination>
    </el-card>
    <el-dialog title="提示" width="50%" :visible.sync="dialogVisible">
      <!-- :before-close="handleClose" -->
      <el-form label-width="80px">
        <el-form-item label="轮播图片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="顺序">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group>
            <el-radio label="禁用"></el-radio>
            <el-radio label="正常"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="类型">
          <el-radio-group>
            <el-radio label="无"></el-radio>
            <el-radio label="商品"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button size="small">商品选择</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "carousel",
  data() {
    return {
      one: "",
      two: "",
      dialogVisible: false,
      imageUrl: "",
      count: 4
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 获取轮播图数据信息
    getCarousel() {
      this.$store.dispatch("getCarousel");
    }
  },
  mounted() {
    this.getCarousel();
  },
  computed: {
    ...mapState({
      carouselList: state => state.shop.address.data
    })
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
