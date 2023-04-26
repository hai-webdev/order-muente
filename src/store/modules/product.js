import getList from "@/api/getList";
const state = {
  list: [],
};
const mutations = {
  GET_LIST(state, payload) {
    state.list = payload;
  },
};
const actions = {
  async getList(ctx) {
    const resp = await getList({ scode: 1 });
    ctx.commit("GET_LIST", resp.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
