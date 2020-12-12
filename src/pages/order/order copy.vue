<template>
  <el-card>
    <!-- 头部内容 -->
    <div class="title">
      <el-form :inline="true" ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-input v-model="model" placeholder="订单编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="value"
            type="datetimerange"
            unlink-panels
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-select v-model="model" placeholder="请选择订单状态">
            <el-option label="label" value="value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="mini"
            >搜索</el-button
          >
          <el-button
            type="primary"
            size="mini"
            @click="senderDialogVisible = true"
            >导出代发货订单</el-button
          >
          <el-button type="primary" size="mini">导出销售记录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 订单内容部分 -->
    <div class="contentContainer">
      <!-- 订单头信息 -->
      <div class="contentTitle">
        <el-row :gutter="24" style="padding-left:10px;box-sizing:border-box;">
          <el-col :span="10">商品</el-col>
          <el-col :span="3">成交单价/购买数量</el-col>
          <el-col :span="3">实付金额</el-col>
          <el-col :span="3">支付方式</el-col>
          <el-col :span="3">订单状态</el-col>
          <el-col :span="2">操作</el-col>
        </el-row>
      </div>
      <!-- 订饭主体信息 -->
      <div class="content-orderInfo">
        <div class="title">
          <el-row :gutter="24">
            <el-col :span="24">
              <span>订单编号:11463112622399488</span> &nbsp; &nbsp;
              <span>下单时间:2019-07-03 17:13:06</span>
            </el-col>
          </el-row>
        </div>
        <div class="content">
          <el-row :gutter="24">
            <el-col :span="10" class="itemName">
              <div style="display:flex;height:100%;width:100%">
                <div>
                  <img
                    src="../../../static/img/user.png"
                    style="width:100px;height:100px"
                  />
                </div>
                <div style="width:300px;height:100px;"></div>
              </div>
            </el-col>
            <el-col :span="3" class="price" style="background:yellowGreen;">
              <div style="height:100px">
                <span>￥ 1.01</span>
                <span> X 1</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div
                style="display:flex;flex-direction:column;justify-content:center;"
              >
                <span style="text-align:center">￥ 1.01</span>
                <span style="text-align:center">共1件</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div><div style="width:100px;height:100px"></div></div>
            </el-col>
            <el-col :span="3">失败</el-col>
            <el-col :span="2">
              <div @click="modifyDialogVisible = true">
                修改
              </div>
            </el-col>
          </el-row>
        </div>
        <div
          class="remark"
          style="    
          width: 100%;
          height: 50px;
          line-height: 50px;
          background-color: #e8f7f6;
          border-left: 1px solid #dddee1;
          border-right: 1px solid #dddee1;
          border-bottom: 1px solid #dddee1;
          margin-bottom: 20px;
          padding-left:10px"
        >
          <el-row :gutter="24">
            <el-col :span="24">备注：</el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 底部分页器 -->
    <div>
      <!-- @size-change="handleSizeChange" 
      @current-change="handleCurrentChange" -->
      <el-pagination
        :current-page="5"
        :page-sizes="[5, 7, 10]"
        :page-size="5"
        :pager-count="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        style="text-align:right"
      >
      </el-pagination>
    </div>
    <!--点击导出代发货订单按钮弹出的对话框 -->
    <el-dialog
      title="请输入发货信息"
      :visible.sync="senderDialogVisible"
      width="width"
    >
      <el-form
        :model="senderForm"
        rules="rules"
        ref="senderForm"
        class="demo-dynamic"
      >
        <el-form-item label="发货人姓名" prop="senderName">
          <el-input v-model="senderForm.senderName" width="width"></el-input>
        </el-form-item>
        <el-form-item label="发货人手机号" prop="phone">
          <el-input v-model="senderForm.phone" width="width"></el-input>
        </el-form-item>
        <el-form-item label="发货地址" prop="address">
          <el-input v-model="senderForm.address" width="width"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="senderDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="senderDialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <!-- 点击修改弹出的对话框 -->
    <el-dialog title="修改" :visible.sync="modifyDialogVisible" width="80%">
      <div class=""></div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <div class="order-number">
            <el-form :model="modifyForm">
              <!-- 订单头 -->
              <el-form-item label-width="width" >
                <span>订单编号： 1146347329394184192</span>
                <el-steps :active="2" align-center>
                  <el-step title="提交订单"></el-step>
                  <el-step title="买家已发货"></el-step>
                  <el-step title="卖家已发货"></el-step>
                  <el-step title="买家已收货"></el-step>
                </el-steps>
              </el-form-item>
 
              <el-form-item label-width="width">
                <span>订单状态：</span>
                <el-button type="danger" plain size="mini">失败</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-form-item>
        <el-form-item>
          <div></div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: "orderManagement",
  data() {
    return {
      //头部时间相关的
      pickerOptions: {},
      value: "",
      // 导出代发货订单的对话框
      senderDialogVisible: false,
      senderForm: {
        senderName: "",
        phone: "",
        address: ""
      },
      rules: {
        senderName: [
          { ruquired: true, message: "请选择活动区域", trigger: "blur" }
        ],
        phone: [{ ruquired: true, message: "请选择活动区域", trigger: "blur" }],
        address: [
          { ruquired: true, message: "请选择活动区域", trigger: "blur" }
        ]
      },
      // 点击修改弹出的对话框
      modifyDialogVisible: false
    };
  }
};
</script>

<style scoped>
/* .contentContainer {
  margin-top: 10px;
  .content-orderInfo {
    margin-top: 20px;
    .title {
      padding: 10px;
      background: #f8f8f9;
      border-left: 1px solid #dddee1;
      border-top: 1px solid #dddee1;
      border-right: 1px solid #dddee1;
    }
  }
} */
.contentContainer {
  margin-top: 10px;
}

.contentContainer .content-orderInfo {
  margin-top: 20px;
}
.contentContainer .content-orderInfo .title {
  padding: 10px;
  background: #f8f8f9;
  border-left: 1px solid #dddee1;
  border-top: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
}
.contentContainer .content-orderInfo .content {
  background: #ccc;
  border-left: 1px solid #dddee1;
  border-top: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
}
.contentContainer .content-orderInfo .content .itemName {
  background: pink;
  height: 100%;
}
</style>
