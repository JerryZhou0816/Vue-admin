<template>
  <div>
    <el-button
      type="primary"
      icon="el-icon-plus"
      size="small"
      @click="showAddDialog"
    >
      新增
    </el-button>

    <el-table style="width: 100%; margin: 20px 0;" border>
      <el-table-column align="center" prop="prop" label="分类名称">
      </el-table-column>
      <el-table-column align="center" prop="prop" label="图片">
      </el-table-column>
      <el-table-column align="center" prop="prop" label="状态">
      </el-table-column>
      <el-table-column align="center" prop="prop" label="排序号">
      </el-table-column>
      <el-table-column align="center" prop="prop" label="操作">
      </el-table-column>
    </el-table>

    <!-- dialog对话框，用于增加组件 -->
    <el-dialog title="新增" :visible.sync="isShowDialog">
      <el-form ref="form" label-width="80px">
        <el-form-item label="分类图片" label-width="100px">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="isShowDialog">
            <img width="100%" src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>

        <el-form-item label="分类名称">
          <el-input placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="上级分类">
          <el-select placeholder="请选择" style="width:220px;">
            <el-optio> </el-optio>
          </el-select>
        </el-form-item>

        <el-form-item label="排序号">
          <el-input-number
            v-model="num"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="10"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="状态">
          <el-radio-group>
            <el-radio v-model="radio" label="1">下线</el-radio>
            <el-radio v-model="radio" label="2">正常</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item align="right">
          <el-button type="primary" size="small">确定</el-button>
          <el-button size="small">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "classification3",
  data() {
    return {
      isShowDialog: false,
      num: 1,
      radio: false
    };
  },
  methods: {
    showAddDialog() {
      this.isShowDialog = true;
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
