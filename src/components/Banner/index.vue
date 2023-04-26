<template>
  <div class="banner-container">
    <img :src="banner" :alt="title" v-if="banner" />
    <div class="text max-center">
      <div class="title">{{ title }}</div>
      <Crumbs :title="title" />
    </div>
  </div>
</template>

<script>
import Crumbs from "@/components/Crumbs";
export default {
  props: {
    title: {
      type: String,
    },
    isCrumbs: {
      type: Boolean,
      default: false,
    },
    banner: {
      type: String,
      required: true,
    },
  },
  components: {
    Crumbs,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./768.less" screen and (max-width:768px);
</style>