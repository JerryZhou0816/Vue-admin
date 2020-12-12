import { reqTrademark } from "../api/mock-api";

const state = {
  trademarkInfo: {}
};

const mutations = {
  // 品牌数据添加到state中
  RECIVETRADEMARK(state, trademark) {
    state.trademarkInfo = trademark;
  }
};

const actions = {
  // 获取品牌数据
  async getTradermark({ commit }) {
    const result = await reqTrademark();
    console.log(result);
    commit("RECIVETRADEMARK", result.data.data);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
