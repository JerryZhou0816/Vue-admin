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
  },
  //新增商品分类数据
  ADDORUPDATECLASSIFICATION(state,item) {
    if(item.row){
      state.goodsCategory.list.splice(item)
    }else{
      state.goodsCategory.list.push(item)
    }
   
 },
 //删除商品分类数据
 DELETERUPDATECLASSIFICATION(state,row) {
  state.goodsCategory.list.filter(item => {
    if(item.id === row){
      state.goodsCategory.list.splice(row,1)
    }
  });




//   state.goodsCategory.list.map((v,i)=> {
//     if(v.id == id){
//       state.goodsCategory.list.splice(i,1)
//     }
//  })
 },
 //修改商品
 SHOWUPDATEDIALOG(state,item){
  state.goodsCategory.list
 }


}








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
  //获取商品分类
  async getGoodsCategory({commit}){
    const result = await reqGoodsCategory()
    commit('RECIVEGOODSCATEGORY',result.data.data)
  },
  //新增
  addOrUpdateClassification({commit},item) {
    commit('ADDORUPDATECLASSIFICATION',item)
 },
 //删除
 deleterupdateclassification({commit},row) {
  commit('DELETERUPDATECLASSIFICATION',row)
},
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
