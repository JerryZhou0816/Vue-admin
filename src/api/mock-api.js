import MockAjax from "../ajax/mockAjax";

const reqUser = () => {
  return MockAjax({
    url: "/userinfo",
    method: "get"
  });
};
