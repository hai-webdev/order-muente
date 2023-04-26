import getContent from "@/api/getContent";
const state = {
    company:"",
};
const mutations = {
    GET_COMPANY(state, payload){
        state.company = payload;
    }
};
const actions = {
    async getComapny(ctx){
        const content = await getContent({scode:4});
        ctx.commit("GET_COMPANY",content.data);
    }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
