<template>
  <div class="company-container">
    <div class="max-center company-box">
      <div class="left-layout">
        <img :src="data.ico" :alt="data.title" />
      </div>
      <div class="right-layout">
        <div class="title">{{data.title}}</div>
        <div class="content" v-html="data.content"></div>
        <router-link :to="{ name: 'About' }" class="more" v-if="isInner">
          <span>查看详情</span>
          <i class="more-icon"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import companyImg from "@/assets/images/temporary/company.jpg";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      companyImg,
    };
  },
  created(){
    this.$store.dispatch("company/getComapny")
  },
  computed:{
    ...mapState({
      data: state => state.company.company
    })
  },
  props: {
    isInner: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./768.less" screen and (max-width:768px);
</style>