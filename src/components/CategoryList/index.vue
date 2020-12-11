<template>
  <div>
    <!-- 分类列表 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item :label="headLine.primaryTitle">
        <el-input v-model="formInline.user" :placeholder="headLine.primaryTitle"></el-input>
      </el-form-item>
      <el-form-item :label="headLine.secondaryTitle">
        <el-select v-model="formInline.region" :placeholder="headLine.secondaryTitle">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="" icon="el-icon-delete">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name:'',
    props:['headLine'],
    data(){
      return{
        formInline: {
          user: '',
          region: ''
          
        },
        // name:''
      }
    },

  }
</script>

<style>

</style>