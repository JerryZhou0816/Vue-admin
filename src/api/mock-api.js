import MockAjax from "../ajax/mockAjax";

export const reqUser = () => {
  return MockAjax({
    url: "/userinfo",
    method: "get"
  });
};

//获取品牌数据
export const reqTrademark = () => {
  return MockAjax({
    url: "/trademark",
    method: "get"
  });
};

//获取商品列表
export const reqAllGood = () => {
  return MockAjax({
    url: "/allgoods",
    method: "get"
  });
};

// 获取轮播图数据
export const reqCarousel = () => {
  return MockAjax({
    url: "/carousel",
    method: "get"
  });
};

// 请求获取运费模板数据
export const reqFreight = () => {
  return MockAjax({
    url: "/reight",
    method: "get"
  });
};

// 获取自提点数据
export const reqSelfData = () => {
  return MockAjax({
    url: "/address",
    method: "get"
  });
};

// 获取订单管理
export const reqOrderInfo = () => {
  return MockAjax({
    url: "/order",
    method: "get"
  });
};

// 获取会员名单
export const reqMemberInfo = () => {
  return MockAjax({
    url: "/userinfo",
    method: "get"
  });
};

// 获取热门搜索数据
export const reqHotsearch = () => {
  return MockAjax({
    url: "/hotsearch",
    method: "get"
  });
};
