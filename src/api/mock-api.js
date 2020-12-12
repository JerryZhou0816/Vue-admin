import MockAjax from "../ajax/mockAjax";

const reqUser = () => {
  return MockAjax({
    url: "/userinfo",
    method: "get"
  });
};

//品牌管理请求

