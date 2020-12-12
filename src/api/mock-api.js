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
