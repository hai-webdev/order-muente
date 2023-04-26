import getLabel from "@/api/getLabel";
const state = {
    video:"",
};
const mutations = {
    GET_VIDEO(state, payload){
        state.video = payload;
    }
};
const actions = {
    async getVideo(ctx){
        const video = await getLabel("video");
        ctx.commit("GET_VIDEO",video.data);
    }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
