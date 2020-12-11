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
          <el-button type="primary" size="mini">导出代发货订单</el-button>
          <el-button type="primary" size="mini">导出销售记录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 订单内容部分 -->
    <div class="contentContainer">
      <div class="contentTitle">
        <el-row :gutter="24">
          <el-col :span="10">商品</el-col>
          <el-col :span="3">成交单价/购买数量</el-col>
          <el-col :span="3">实付金额</el-col>
          <el-col :span="3">支付方式</el-col>
          <el-col :span="3">订单状态</el-col>
          <el-col :span="2">操作</el-col>
        </el-row>
      </div>
      <div class="content-orderInfo" style="margin-top:20px">
        <div
          class="title"
          style="padding: 10px;
            background: #f8f8f9;
            border-left: 1px solid #dddee1;
            border-top: 1px solid #dddee1;
            border-right: 1px solid #dddee1;"
        >
          <el-row :gutter="24">
            <el-col :span="24">
              <span>订单编号:11463112622399488</span> &nbsp; &nbsp;
              <span>下单时间:2019-07-03 17:13:06</span>
            </el-col>
          </el-row>
        </div>
        <div
          class="content"
          style=" background:#ccc
            border-left: 1px solid #dddee1; 
            border-top: 1px solid #dddee1;
            border-right: 1px solid #dddee1;"
        >
          <el-row :gutter="24">
            <el-col :span="10">
              <div style="display:flex">
                <div>
                  <img src="" alt="" style="width:100px;height:100px" />
                </div>
                <div style="width:300px;height:100px;"></div>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <span>￥ 1.01</span> &nbsp; &nbsp;
                <span> * 1</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <span>￥ 1.01</span>
                <span>共1件</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div><div style="width:100px;height:100px"></div></div>
            </el-col>
            <el-col :span="3">失败</el-col>
            <el-col :span="2">修改</el-col>
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
      <div class="content-orderInfo" style="margin-top:20px">
        <div
          class="title"
          style="padding: 10px;
            background: #f8f8f9;
            border-left: 1px solid #dddee1;
            border-top: 1px solid #dddee1;
            border-right: 1px solid #dddee1;"
        >
          <el-row :gutter="24">
            <el-col :span="24">
              <span>订单编号:11463112622399488</span> &nbsp; &nbsp;
              <span>下单时间:2019-07-03 17:13:06</span>
            </el-col>
          </el-row>
        </div>
        <div
          class="content"
          style=" background:#ccc
            border-left: 1px solid #dddee1; 
            border-top: 1px solid #dddee1;
            border-right: 1px solid #dddee1;"
        >
          <el-row :gutter="24">
            <el-col :span="10">
              <div style="display:flex">
                <div>
                  <img src="" alt="" style="width:100px;height:100px" />
                </div>
                <div style="width:300px;height:100px;"></div>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <span>￥ 1.01</span> &nbsp; &nbsp;
                <span> * 1</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <span>￥ 1.01</span>
                <span>共1件</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div><div style="width:100px;height:100px"></div></div>
            </el-col>
            <el-col :span="3">失败</el-col>
            <el-col :span="2">修改</el-col>
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
      <div class="content-orderInfo" style="margin-top:20px">
        <div
          class="title"
          style="padding: 10px;
            background: #f8f8f9;
            border-left: 1px solid #dddee1;
            border-top: 1px solid #dddee1;
            border-right: 1px solid #dddee1;"
        >
          <el-row :gutter="24">
            <el-col :span="24">
              <span>订单编号:11463112622399488</span> &nbsp; &nbsp;
              <span>下单时间:2019-07-03 17:13:06</span>
            </el-col>
          </el-row>
        </div>
        <div
          class="content"
          style=" background:#ccc
            border-left: 1px solid #dddee1; 
            border-top: 1px solid #dddee1;
            border-right: 1px solid #dddee1;"
        >
          <el-row :gutter="24">
            <el-col :span="10">
              <div style="display:flex">
                <div>
                  <img src="" alt="" style="width:100px;height:100px" />
                </div>
                <div style="width:300px;height:100px;"></div>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <span>￥ 1.01</span> &nbsp; &nbsp;
                <span> * 1</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <span>￥ 1.01</span>
                <span>共1件</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div><div style="width:100px;height:100px"></div></div>
            </el-col>
            <el-col :span="3">失败</el-col>
            <el-col :span="2">修改</el-col>
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
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="width"
      :before-close="dialogBeforeClose"
    >
      <el-form :model="form">
        <el-form-item label="发货人姓名" >
          <el-input v-model="userName"></el-input>
        </el-form-item>
         <el-form-item label="发货人手机号" >
          <el-input v-model="Phone"></el-input>
        </el-form-item>
         <el-form-item label="发货地址" >
          <el-input v-model="address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: "orderManagement",
  data() {
    return {
      //
      pickerOptions: {},
      value: ""
    };
  }
};
</script>

<style scoped></style>
