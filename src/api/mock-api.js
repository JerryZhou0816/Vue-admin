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

 //获取商品分类
 export const reqGoodsCategory = () => {
  return MockAjax({
    url: "/goodscategory",
    method: "get"
  });
};