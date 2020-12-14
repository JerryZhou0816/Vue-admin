import { reqTemplate } from "../api/mock-api";
const state = {
  templateList: []
};

const mutations = {
  RECIVETEPPLATE(state, templateList) {
    state.templateList = templateList;
  },
  ADDTEMPLATE(state, form) {
    state.templateList.unshift(form);
  },
  // 删除
  DELETETEMPLATE(state, index) {
    state.templateList.splice(index, 1);
  }
};

const actions = {
  async getNoticeList({ commit }) {
    const result = await reqTemplate();

    commit("RECIVETEPPLATE", result.data.data);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
