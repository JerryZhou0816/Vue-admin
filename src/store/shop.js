import { reqCarousel, reqFreight } from "../api/mock-api";
const state = {
  address: {}, // 自提点地址数据
  courierData: {}
};

const mutations = {
  RECIVEADDRESS(state, address) {
    state.address = address;
  },
  RECIVEFREIGHT(state, freight) {
    state.courierData = freight;
  }
};

const actions = {
  // 获取轮播图数据
  async getCarousel({ commit }) {
    const result = await reqCarousel();
    commit("RECIVEADDRESS", result.data.data);
  },
  //获取运费模板数据
  async getFreight({ commit }) {
    const result = await reqFreight();
    commit("RECIVEFREIGHT", result.data);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
