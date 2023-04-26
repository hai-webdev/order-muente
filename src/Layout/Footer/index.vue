<template>
  <div class="footer-container">
    <div class="top-layout max-center">
      <div class="left-layout">
        <router-link :to="{ name: 'Home' }" class="logo">
          <img :src="site.logo" />
        </router-link>
        <div class="info">
          安徽省沐恩特医疗科技有限公司创立于安徽省安庆市，是专业于美容化妆品和医疗器械生产以及进出口的贸易公司。
          我们始终以现代核心科技为理念，以客户的需求为主旨，致力于发掘人类最本真的自然魅力。
        </div>
      </div>
      <div class="center-layout">
        <ul class="nav-list">
          <li class="nav-item">
            <div class="title">产品</div>
            <router-link
              :to="{ name: 'ProductContent', params: { id: item.id } }"
              v-for="item in proList"
              :key="item.id"
              >{{ item.subtitle }}</router-link
            >
          </li>
          <li class="nav-item">
            <div class="title">导航</div>
            <router-link :to="{ name: 'Product' }">产品中心</router-link>
            <router-link :to="{ name: 'About' }">关于我们</router-link>
            <router-link :to="{ name: 'Serve' }">售后服务</router-link>
          </li>
        </ul>
      </div>
      <div class="right-layout">
        <div class="title">{{company.name}}</div>
        <div class="company-info" v-html="label.lxfs"></div>
      </div>
    </div>
    <div class="copyright">
      {{site.copyright}}
      <div class="icp" v-if="site.icp">
         网站备案号：<a href="https://beian.miit.gov.cn/">{{site.icp}}</a>
      </div>
      <div class="statistical" v-if="label.ggba">
        <div style="margin-left:10px"><a target="_blank" href=" " style="display:flex;align-items:center;color:inherit;"><img :src="label.gaba_icon"/><p style="margin: 0px 0px 0px 5px;white-space: nowrap;">{{label.ggba}}</p></a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("site/getSite");
    this.$store.dispatch("site/getLabel");
    this.$store.dispatch("site/getCompany");
    this.$store.dispatch("product/getList");
  },
  computed: {
    ...mapState({
      site: (state) => state.site.site,
      label: (state) => state.site.label,
      company: (state) => state.site.company,
      proList: (state) => state.product.list,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./768.less" screen and (max-width: 768px);
</style>