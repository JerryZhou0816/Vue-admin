<template>
  <div>
    <el-button 
      type="primary"  
      icon="el-icon-plus" 
      size="small">
    新增
    </el-button>

      <el-table style="width: 100%; margin: 20px 0;" border  >
        <el-table-column
          align="center"
          prop="prop"
          label="分类名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="图片">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="状态">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="排序号">
        </el-table-column>
        <el-table-column
          align="center"
          prop="prop"
          label="操作">
        </el-table-column>
      </el-table>

  </div>
</template>

<script>
export default {
  name: 'classification3',
}
</script>


