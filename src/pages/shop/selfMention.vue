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
      <!-- :data="addressList" -->

      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%;"
        border
        :data="selfList"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="自提点名称" width="120" prop="addrName">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份"></el-table-column>
        <el-table-column prop="city" label="城市"></el-table-column>
        <el-table-column prop="area" label="区/县"> </el-table-column>
        <el-table-column prop="addr" label="地址"> </el-table-column>
        <el-table-column prop="address" label="操作">
          <template>
            <el-button type="primary" icon="el-icon-edit" size="mini"
              >编辑</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 添加自提点的dialog -->
    <el-dialog title="新增自提点地址" :visible.sync="dialogVisible">
      <el-form :model="selfInfo">
        <el-form-item label="名称">
          <el-col :span="16">
            <el-input
              v-model="selfInfo.name"
              autocomplete="off"
              placeholder="自提点名称"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="selfInfo.province" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
          <el-select v-model="selfInfo.city" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
          <el-select v-model="selfInfo.area" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-col :span="16">
            <el-input
              v-model="selfInfo.name"
              autocomplete="off"
              placeholder="自提点名称"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号">
          <el-col :span="16">
            <el-input
              v-model="selfInfo.name"
              autocomplete="off"
              placeholder="自提点名称"
            ></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "self",
  data() {
    return {
      selfInfo: {},
      dialogVisible: false,
      formLabelWidth: "120" //表单的动态宽度设置
    };
  },
  methods: {
    getSelfData() {
      this.$store.dispatch("getSelfInfo");
    }
  },
  mounted() {
    this.getSelfData();
  },
  computed: {
    ...mapState({
      selfList: state => state.shop.selfAddress.records
    })
  }
};
</script>

<style></style>
