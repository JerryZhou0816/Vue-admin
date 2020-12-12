import { reqTrademark,reqAllGood, reqGoodsCategory } from "../api/mock-api";

const state = {
  trademarkInfo: {},
  allgoodsList:{},    //存商品列表
  goodsCategory:{}    //存商品分类
};

const mutations = {
  // 品牌数据添加到state中
  RECIVETRADEMARK(state, trademark) {
    state.trademarkInfo = trademark;
  },
  //商品列表
  RECIVEALLGOODS(state,allgoodsList){
    state.allgoodsList = allgoodsList
  },
  //商品分类
  RECIVEGOODSCATEGORY(state,goodsCategory){
    state.goodsCategory = goodsCategory
  }
};

const actions = {
  // 获取品牌数据
  async getTradermark({ commit }) {
    const result = await reqTrademark();
    console.log(result);
    commit("RECIVETRADEMARK", result.data.data);
  },
  //获取商品列表
  async getAllgoodsList({commit}){
    const result = await reqAllGood()
    commit('RECIVEALLGOODS',result.data.data)
  },
  //获取商品分类G
  async getGoodsCategory({commit}){
    const result = await reqGoodsCategory()
    commit('RECIVEGOODSCATEGORY',result.data.data)
  },
 

};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
