<template>
  <div>
    <el-card>
      <el-table
        ref="multipleTable"
        :data="shopInfo"
        tooltip-effect="dark"
        style="width: 100%;"
        border
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="自提点名称" width="120" prop="addrName">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="city" label="城市"></el-table-column>
        <el-table-column prop="area" label="区/县"> </el-table-column>
        <el-table-column prop="addr" label="地址"> </el-table-column>
        <el-table-column prop="address" label="操作">
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
    </el-card>
  </div>
</template>

<script>
export default {
  name: "self",
  data() {
    return {
      shopInfo: [
        {
          addr: "aadasda",
          addrId: 6,
          addrName: "aadasda",
          area: "立山区",
          areaId: 210304000000,
          city: "鞍山市",
          cityId: 210300000000,
          mobile: "12345123132",
          province: "辽宁省",
          provinceId: 210000000000,
          shopId: 1
        },
        {
          addr: "鼓楼区鼓楼广场",
          addrId: 7,
          addrName: "河南开封",
          area: "市辖区",
          areaId: 410201000000,
          city: "开封市",
          cityId: 410200000000,
          mobile: "19000000000",
          province: "河南省",
          provinceId: 410000000000,
          shopId: 1
        }
      ]
    };
  }
};
</script>

<style>
.el-table thead {
  color: #000;
}</style
>>
