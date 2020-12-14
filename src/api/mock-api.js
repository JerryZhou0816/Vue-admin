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
//获取公告数据
export const reqTemplate = () => {
  return MockAjax({
    url: "/notice",
    method: "get"
  });
};
