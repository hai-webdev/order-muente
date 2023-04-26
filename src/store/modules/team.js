import getList from "@/api/getList";
import {getScodeInfo} from "@/api/getScode";
const state = {
  team1: [],
  team2: [],
  team1Title:"",
  team2Title:""
};
const mutations = {
  GET_TEAM1(state, payload) {
    state.team1 = payload;
  },
  GET_TEAM2(state, payload) {
    state.team2 = payload;
  },
  GET_TITLE1(state, payload) {
    state.team1Title = payload;
  },
  GET_TITLE2(state, payload) {
    state.team2Title = payload;
  },
};
const actions = {
  async getTeam(ctx) {
    const team1 = await getList({ scode: 6 });
    const team2 = await getList({ scode: 7 });
    const team1Title = await getScodeInfo(6);
    const team2Title = await getScodeInfo(7);
    ctx.commit("GET_TEAM1", team1.data);
    ctx.commit("GET_TEAM2", team2.data);
    ctx.commit("GET_TITLE1", team1Title.data.name);
    ctx.commit("GET_TITLE2", team2Title.data.name);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
