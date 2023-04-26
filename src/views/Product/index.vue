<template>
  <div class="product-container">
    <Banner :banner="sortBanner" :title="sortName" :isCrumbs="true" />
    <div class="product module">
      <Title title="我们的产品" />
      <div class="product">
        <Product />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Product from "@/components/Product";
import banners from "@/mixins/banner";
export default {
  mixins:[banners(1)],
  components: {
    Banner,
    Title,
    Product,
  },
};
</script>

<style lang="less" scoped>

</style>