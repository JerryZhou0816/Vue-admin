<template>
  <div>
    <el-card>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="公告内容">
          <el-input placeholder="公告内容" size="small"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select placeholder="状态" size="small" v-model="one">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否置顶">
          <el-select placeholder="是否置顶" size="small" v-model="two">
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
        ref="singleTable"
        highlight-current-row
        :data="courierList"
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
          selection-change=""
        >
        </el-table-column>
        <el-table-column prop="name" label="快递名称" align="center">
        </el-table-column>
        <el-table-column type="input" label="操作" align="center">
          <template slot-scope="{ row, $index }">
            <el-button icon="el-icon-edit" size="mini">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="1"
        :page-sizes="[5, 10, 30]"
        :page-size="7"
        layout=" ->,total,sizes,prev, pager, next, jumper  "
        :total="6"
        background
      >
      </el-pagination>
    </el-card>
    <el-dialog title="提示" width="100%" :visible.sync="dialogVisible">
      <!-- :before-close="handleClose" -->
      <el-form>
        <el-form-item label="模板名称" label-width="5.2%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="模板类型">
          <el-radio-group>
            <el-radio label="买家承担费用"></el-radio>
            <el-radio label="买家包邮"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="模板方式">
          <el-radio-group>
            <el-radio label="按件数"></el-radio>
            <el-radio label="按重量"></el-radio>
            <el-radio label="商品"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-table
          style="width: 100%"
          border
          :header-cell-style="{
            background: '#fafafa',
            color: 'rgba(0, 0, 0, 0.85)'
          }"
        >
          <el-table-column prop="name" label="可配送区域" width="450px">
          </el-table-column>
          <el-table-column prop="prop" label="首件（个）" width="179px">
            <template>
              <el-input placeholder="" type="number"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="运费（元）" width="width">
            <template>
              <el-input placeholder="" type="number"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="续件（个）" width="width">
            <template>
              <el-input placeholder="" type="number"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="续费（元）" width="width">
            <template>
              <el-input placeholder="" type="number"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <el-form-item style="margin-top: 20px">
          <el-button type="primary" icon="el-icon-location-information"
            >点击添加可配送的区域和运费</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-checkbox-group>
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-location-information"
            >点击添加指定包邮条件</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "shipping",
  data() {
    return {
      one: "",
      two: "",
      dialogVisible: false,
      shopList: [
        {
          name: 1,
          age: 2,
          type: []
        }
      ]
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
    // 调用actions的数据请求
    getFreight() {
      this.$store.dispatch("getFreight");
    }
  },
  mounted() {
    this.getFreight();
  },
  computed: {
    ...mapState({
      courierList: state => state.shop.courierData.data
    })
  }
};
</script>

<style></style>
