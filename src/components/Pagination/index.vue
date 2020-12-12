<template>
  <div>
    <!-- 分页  @current-change="handleCurrentChange"-->
    <el-pagination
      background
      style="text-align:right"
      :current-page="page"
      :pageSizes="[5, 15, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total1"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      page: 1,
      pageSize: 100,
      total: 10
    };
  },
  props: ["total1"]
};
</script>

<style></style>
