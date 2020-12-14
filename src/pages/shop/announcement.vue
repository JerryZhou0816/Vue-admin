<template>
  <div>
    <el-card>
      <el-form :inline="true" class="demo-form-inline" :data="templateList">
        <el-form-item label="公告内容">
          <el-input placeholder="公告内容" size="small"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select placeholder="状态" size="small" v-model="one">
            <el-option label="区域一" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否置顶">
          <el-select placeholder="是否置顶" size="small" v-model="two">
            <el-option label="区域一" value=""></el-option>
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
            type="primary"
            icon="el-icon-plus"
            size="small"
            @click="addAndUpdate"
            >添加</el-button
          ></el-col
        >
        <el-col :span="4">
          <el-button icon="el-icon-refresh" circle size="small"></el-button>
          <el-button icon="el-icon-menu" circle size="small"></el-button>
          <el-button icon="el-icon-search" circle size="small"></el-button
        ></el-col>
      </el-row>
      <!-- @current-change="handleCurrentChange" -->
      <el-table
        ref="singleTable"
        highlight-current-row
        style="width: 100%; margin-top: 10px"
        border
        :header-cell-style="{
          background: '#fafafa',
          color: 'rgba(0, 0, 0, 0.85)',
        }"
        :data="templateList"
      >
        <el-table-column type="index" width="50" label="序号" align="center">
        </el-table-column>
        <el-table-column property="content" label="公告内容" align="center">
        </el-table-column>
        <el-table-column property="is_delete" label="状态" align="center">
        </el-table-column>
        <el-table-column property="isShow" label="是否置顶" align="center">
        </el-table-column>
        <el-table-column property="address" label="操作" align="center">
          <template slot-scope="{ row, $index }">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="small"
              @click="addAndUpdate(row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="small"
              @click="deteleTemplate($index)"
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
    <!-- :before-close="handleClose" -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="15%">
        <el-form-item label="公告标题">
          <el-input v-model="form.title" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.is_delete">
            <el-radio label="公布"></el-radio>
            <el-radio label="撤销"></el-radio> </el-radio-group
        ></el-form-item>
        <el-form-item label="置顶">
          <el-radio-group v-model="form.isShow">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="公告内容">
          <el-input
            type="textarea"
            :rows="10"
            placeholder="请输入内容"
            v-model="form.content"
          >
          </el-input>
        </el-form-item>
        <el-form-item label-width="80%">
          <template slot-scope="{ row, $index }">
            <el-button size="small" @click="cancel">取消</el-button>
            <el-button type="primary" size="small" @click="confirm"
              >确定</el-button
            ></template
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "announcement",
  data() {
    return {
      // templateList: [],
      one: "",
      two: "",
      dialogVisible: false,
      form: { title: "", content: "", is_delete: "公布", isShow: "否" },
    };
  },
  mounted() {
    this.getNoticeList();
  },
  methods: {
    cancel() {
      this.dialogVisible = false;
    },
    getNoticeList() {
      this.$store.dispatch("getNoticeList");
    },
    addition() {},
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    confirm() {
      let { title, content, form, is_delete, isShow } = this.form;
      if (this.form.id) {
        // console.log(0);
        this.templateList.forEach((item, index) => {});
      } else {
        // console.log(1);
        let id = uuidv4();
        // let form = templateList.forEach((value, index) => {}).slice(0, -1);
        form = {
          id,
          is_delete,
          isShow,
          title,
          content,
        };
        if (this.form.content.trim()) {
          this.$store.commit("ADDTEMPLATE", form);
        } else {
          alert("内容不能为空");
        }
      }
      this.form.id = "";
      this.form.is_delete = "公布";
      this.form.isShow = "否";
      this.form.title = "";
      this.form.content = "";
      this.dialogVisible = false;
    },
    addAndUpdate(row) {
      if (row.title) {
        this.dialogVisible = true;
        this.form = {
          ...row,
        };
      } else {
        this.dialogVisible = true;
      }
    },
    // 删除
    deteleTemplate(index) {
      this.$store.commit("DELETETEMPLATE", index);
    },
  },
  computed: {
    ...mapState({
      templateList: (state) => state.notice.templateList,
    }),
  },
};
</script>

<style >
</style>
