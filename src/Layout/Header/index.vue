<template>
  <div class="header-container">
    <div class="max-center head-box">
      <router-link :to="{ name: 'Home' }" class="logo">
        <img :src="site.logo" alt="" />
      </router-link>
      <nav class="nav-list">
        <router-link class="nav-item" :to="{ name: 'Home' }" exact>
          <span></span><span>首页</span><span></span>
        </router-link>
        <router-link class="nav-item" :to="{ name: 'Product' }">
          <span></span><span>产品中心</span><span></span>
        </router-link>
        <router-link class="nav-item" :to="{ name: 'About' }">
          <span></span><span>关于我们</span><span></span>
        </router-link>
        <router-link class="nav-item" :to="{ name: 'Serve' }">
          <span></span><span>售后服务</span><span></span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("site/getSite");
  },
  computed: {
    ...mapState({
      site: (state) => state.site.site,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./768.less" screen and (max-width:768px);
</style>