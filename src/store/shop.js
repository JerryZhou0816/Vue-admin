import {
  reqCarousel,
  reqFreight,
  reqSelfData,
  reqHotsearch
} from "../api/mock-api";
const state = {
  address: {}, // 轮播图数据
  courierData: {}, //运费模板数据
  selfAddress: {}, //自提点数据
  hotSeachList: {}
};

const mutations = {
  RECIVEADDRESS(state, address) {
    state.address = address;
  },
  RECIVEFREIGHT(state, freight) {
    state.courierData = freight;
  },
  RECIVESELF(state, self) {
    state.selfAddress = self;
  },
  RECIVEHOTSEARCH(state, hotSearch) {
    state.hotSeachList = hotSearch;
  },
  // 添加热搜
  ADDHOTSEARCH(state, newInfo) {
    state.hotSeachList.records.unshift(newInfo);
  },
  // 修改热搜数据
  UPDATEHOTSEARCH(state, update) {
    state.hotSeachList.records.splice(
      update.index,
      update.index,
      update.newHotInfo
    );
  },
  DELETEHOTSEARCH(state, index) {
    state.hotSeachList.records.splice(index, 1);
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
  },
  // 获取自提点数据
  async getSelfInfo({ commit }) {
    const result = await reqSelfData();
    commit("RECIVESELF", result.data);
  },
  // 获取热搜数据
  async getHotsearch({ commit }) {
    const result = await reqHotsearch();
    // localStorage.setItem("hotInfo", JSON.stringify(result.data));
    commit("RECIVEHOTSEARCH", result.data);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
