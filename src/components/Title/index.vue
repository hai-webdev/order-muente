<template>
  <div class="title-container">
    <div class="title">{{ title }}</div>
    <div class="deck">
      <span></span><span></span><span></span>
    </div>
    <div class="desc" v-html="desc"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
@import "./768.less" screen and (max-width:768px);
</style>