import getNav from "@/api/getNav";
import getSite from "@/api/getSite";
import getLabel from "@/api/getLabel";
import getCompany from "@/api/getCompany";
const state = {
  nav: [],
  site: {},
  company: {},
  label:{}
};
const mutations = {
  GET_NAV(state, payload) {
    state.nav = payload;
  },
  GET_SITE(state, payload) {
    state.site = payload;
  },
  GET_COMPANY(state, payload) {
    state.company = payload;
  },
  GET_LABEL(state, payload){
    state.label = payload;
  }
};
const actions = {
  async getNav(ctx) {
    const resp = await getNav();
    ctx.commit("GET_NAV", resp.data);
  },
  async getSite(ctx) {
    const resp = await getSite();
    ctx.commit("GET_SITE", resp.data);
  },
  async getCompany(ctx) {
    const resp = await getCompany();
    ctx.commit("GET_COMPANY", resp.data);
  },
  async getLabel(ctx) {
    const resp = await getLabel();
    ctx.commit("GET_LABEL", resp.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
