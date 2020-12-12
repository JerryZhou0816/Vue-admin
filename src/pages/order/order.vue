<template>
  <el-card>
    <!-- 筛选部分 -->
    <div class="selectContainer">
      <!-- 筛选搜索标题 -->
      <div class="selectTitle">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <div style="float:right">
          <el-button size="mini">重置</el-button>
          <el-button type="primary" size="mini">查询搜索</el-button>
        </div>
      </div>
      <!-- 筛选条件 -->
      <div class="selectContent">
        <el-form
          ref="form"
          :model="orderForm"
          :inline='true'
        >
          <!-- label-width="100px" -->
          <el-form-item label="输入搜索:" label-width="100px">
            <el-input
              v-model="orderID"
              placeholder="订单编号"
              width="100px"
            ></el-input>
          </el-form-item>
          <el-form-item label="收货人:" label-width="100px">
            <el-input
              v-model="orderNameOrPhone"
              width="width"
              placeholder="收货人姓名/手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="提交时间:" label-width="100px">
            <el-date-picker
              v-model="orderTime"
              type="date"
              placeholder="请选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="订单状态:" label-width="100px">
            <el-select v-model="statusValue" clearable placeholder="全部">
              <el-option
                v-for="statusItem in statusOptions"
                :key="statusItem.value"
                :label="statusItem.label"
                :value="statusItem.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单分类:" label-width="100px">
            <el-select v-model="sortValue" clearable placeholder="全部">
              <el-option
                v-for="sortItem in sortOptions"
                :key="sortItem.value"
                :label="sortItem.label"
                :value="sortItem.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单来源:" label-width="100px">
            <el-select v-model="sourceValue" clearable placeholder="全部">
              <el-option
                v-for="sourceItem in sourceOptions"
                :key="sourceItem.value"
                :label="sourceItem.label"
                :value="sourceItem.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 数据列表头 -->
    <div class="listTitle">
      <i class="el-icon-tickets"></i>
      <span style="font-size:16px">数据列表</span>
    </div>
    <!-- :data="data" -->
    <!-- 数据列表详情 -->
    <el-table border style="width: 100%;margin:20px 0;">
      <el-table-column type="selection" width="50"> </el-table-column
      ><el-table-column type="index" label="编号" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="订单编号" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="提交时间" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="用户账号" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="订单金额" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="支付方式" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="订单来源" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="订单状态" width="width">
      </el-table-column
      ><el-table-column prop="prop" label="操作" width="width">
        <template slot-scope>
          <el-button type="primary">查看订单</el-button>
          <el-button type="danger">删除订单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 底部框架 -->
    <div class="footer">
      <!-- 批量操作选择 -->
      <el-select v-model="handleValue" placeholder="批量操作">
        <el-option
          v-for="hanleItem in hanleOptions"
          :key="hanleItem.value"
          :label="hanleItem.label"
          :value="hanleItem.value"
        >
        </el-option>
      </el-select>
      <!-- 确定按钮 -->
      <div style="display:inline-block;margin-left:20px">
        <el-button type="primary" size="medium">确定</el-button>
      </div>

      <!-- 分页器 -->
      <!-- @size-change="handleSizeChange"
          @current-change="handleCurrentChange" -->
      <div style=" float:right">
        <el-pagination
          background
          :current-page="5"
          :page-sizes="[5, 7, 10]"
          :page-size="3"
          pager-count="3"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20"
        >
        </el-pagination>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      // 筛选的条件的收集
      orderForm: {},
      // 筛选收集的数据
      orderID: "", //订单编号
      orderNameOrPhone: "", //收货人
      orderTime: "", //提交时间
      statusValue: "", //订单状态
      sortValue: "", //订单分类
      sourceValue: "", //订单来源

      // 订单状态：
      statusOptions: [
        {
          value: "选项1",
          label: "待付款"
        },
        {
          value: "选项2",
          label: "待发货"
        },
        {
          value: "选项3",
          label: "已发货"
        },
        {
          value: "选项4",
          label: "已完成"
        },
        {
          value: "选项5",
          label: "已关闭"
        }
      ],
      // 订单分类
      sortOptions: [
        {
          value: "选项1",
          label: "正常订单"
        },
        {
          value: "选项2",
          label: "秒杀订单"
        }
      ],
      // 订单来源
      sourceOptions: [
        {
          value: "选项1",
          label: "PC订单"
        },
        {
          value: "选项2",
          label: "APP订单"
        }
      ],

      // footer里的批量操作
      hanleOptions: [
        {
          value: "选项1",
          label: "批量发货"
        },
        {
          value: "选项2",
          label: "关闭订单"
        },
        {
          value: "选项3",
          label: "删除订单"
        }
      ],
      handleValue: ""
    };
  }
};
</script>

<style>
.selectContainer {
  border: 1px solid #ebeef5;
  background-color: #fff;
  box-sizing: inherit;
  padding: 20px;
}
.selectContainer .selectContent {
  padding: 20px;
  margin-top: 15px;
  text-align: center;
  
}
.selectContainer .selectContent .el-form {
  /* display: flex; */
  /* flex-wrap: nowrap; */
}


.listTitle {
  border: 1px solid #ebeef5;
  background-color: #fff;
  box-sizing: inherit;
  padding: 20px;
  margin-top: 20px;
}
</style>
