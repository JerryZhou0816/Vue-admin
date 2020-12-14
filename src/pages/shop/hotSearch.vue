<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="21">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="small"
            @click="dialogFormVisible = true"
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
        :data="hotSearchList"
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
          width="50"
          label="序号"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="title" label="热搜标题" align="center">
        </el-table-column>
        <el-table-column prop="content" label="热搜内容" align="center">
        </el-table-column>
        <el-table-column
          property="recDate"
          label="录入时间"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column property="seq" label="顺序" align="center" sortable>
        </el-table-column>
        <el-table-column property="status" label="起用状态" align="center">
          <template slot-scope="{ row, $index }">
            <div v-if="row.status === 1">
              <el-tag size="mini">启用</el-tag>
            </div>
            <div v-else>
              <el-tag type="danger" size="mini">未启用</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          property="address"
          label="操作"
          align="center"
          width="259px"
        >
          <template slot-scope="{ row, $index }">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="small"
              @click="updateHotsearch(row, $index)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="small"
              @click="delteHotInfo($index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="1"
        :page-sizes="[5, 10, 20]"
        :page-size="5"
        layout=" ->,total,sizes,prev, pager, next, jumper  "
        :total="2"
        background
      >
      </el-pagination>
    </el-card>

    <!-- 点击添加的dialog对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="hotInfo">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            v-model="hotInfo.title"
            :value="hotInfo.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input
            v-model="hotInfo.content"
            :value="hotInfo.content"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="排序号" :label-width="formLabelWidth">
          <el-input-number
            v-model="hotInfo.seq"
            controls-position="right"
            :min="1"
            :max="10"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio-group v-model="hotInfo.status">
            <el-radio :label="0">下线</el-radio>
            <el-radio :label="1">正常</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addHotsearch">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 修改的对话框 -->
    <el-dialog title="收货地址" :visible.sync="isUpdate">
      <el-form :model="hotInfo">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            v-model="hotInfo.title"
            :value="hotInfo.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input
            v-model="hotInfo.content"
            :value="hotInfo.content"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="排序号" :label-width="formLabelWidth">
          <el-input-number
            v-model="hotInfo.seq"
            controls-position="right"
            :min="1"
            :max="10"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio-group v-model="hotInfo.status">
            <el-radio :label="0">下线</el-radio>
            <el-radio :label="1">正常</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isUpdate = false">取 消</el-button>
        <el-button type="primary" @click="changeHotsearch">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入lodash
import deepClone from "lodash/cloneDeep";
export default {
  name: "hotsearch",
  data() {
    return {
      hotInfo: {
        seq: 1
      }, // 收集的数据
      formLabelWidth: "120px",

      dialogFormVisible: false,
      isUpdate: false, //
      index: "" //用来存放点击对应数据的表示
    };
  },
  methods: {
    getHotsearch() {
      this.$store.dispatch("getHotsearch");
    },
    // 收集数据，添加到store中
    addHotsearch() {
      this.dialogFormVisible = false;
      // 获取当前日期时间
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      const recDate = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
      let { title, status, content, seq } = this.hotInfo;
      // 将收集的数据存储到新的对象
      let newHotInfo = {
        title,
        status,
        content,
        seq,
        recDate,
        shopId: 1,
        hotSearchId: status++
      };
      this.$store.commit("ADDHOTSEARCH", newHotInfo);
      this.$message.success("添加热搜数据成功！");
      this.hotInfo = {};
    },
    // 修改数据
    updateHotsearch(row, index) {
      this.isUpdate = true;
      // 深拷贝，如果直接在这里修改到话，也会影响到store对象中到数据，所以需要使用深拷贝
      this.hotInfo = deepClone(row);
      this.index = index;
    },

    // 点击修改数据
    changeHotsearch() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      const recDate = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
      let { title, status, content, seq } = this.hotInfo;

      // 将收集的数据存储到新的对象
      let newHotInfo = {
        title,
        status,
        content,
        seq,
        recDate,
        shopId: 1,
        hotSearchId: status++
      };
      const index = this.index;
      // 收集数据将更新的数据提交到vuex中
      this.$store.commit("UPDATEHOTSEARCH", { newHotInfo, index });

      this.$message.success("修改数据成功");
      // 关闭对话框
      this.isUpdate = false;
      this.hotInfo = {};
    },
    // 删除热搜数据
    delteHotInfo(index) {
      this.$store.commit("DELETEHOTSEARCH", index);
    }
  },
  mounted() {
    this.getHotsearch();
  },
  computed: {
    ...mapState({
      hotSearchList: state => state.shop.hotSeachList.records
    })
  }
};
</script>

<style></style>
