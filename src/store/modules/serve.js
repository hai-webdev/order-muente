import getContent from "@/api/getContent";
const state = {
    data:"",
};
const mutations = {
    GET_DATA(state, payload){
        state.data = payload;
    }
};
const actions = {
    async getData(ctx){
        const content = await getContent({scode:3});
        ctx.commit("GET_DATA",content.data);
    }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
