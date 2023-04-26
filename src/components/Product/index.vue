<template>
  <ul class="product-container max-center">
    <li class="product-item" v-for="item in proList" :key="item.id">
      <router-link :to="{ name: 'ProductContent', params: { id: item.id } }">
        <img :src="item.ico" :alt="item.title" />
        <div class="deck"></div>
        <p>{{ item.title }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("product/getList");
  },
  computed: {
    ...mapState({
      proList: (state) => state.product.list,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
@import "./index.less";
@import "./768.less" screen and (max-width: 768px);
</style>