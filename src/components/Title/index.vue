<template>
  <div class="productControl">
    <span class="option">当前表格已选择0项</span>
    <span class="empty">清&nbsp;空</span>
  </div>
</template>

<script>
  export default {
    name:''
  }
</script>

<style>
.productControl{
  margin-top: 20px;
}
.option{
  font-size: 14px;
}
.empty{
  color: #02a1e9;
  font-size: 12px;
  cursor: pointer;
  margin: 8px 10px;
}
</style>