<template>
  <div class="crumbs-container">
    <router-link to="/">首页</router-link> &gt;
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.crumbs-container {
  a,
  span {
    font-size: 14px;
    color: @mainColor;
    @media screen and (max-width:768px){
      font-size: 12px;
    }
  }
}

</style>