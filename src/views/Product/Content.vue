<template>
  <div class="product-content-container">
    <Banner :banner="sortBanner" :title="sortName" :isCrumbs="true" />
    <Title title="我们将为您详细介绍我们的产品" />
    <div class="content max-center" v-html="rs.content"></div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import getContent from "@/api/getContent";
import banners from "@/mixins/banner";
export default {
  mixins: [banners(1)],
  data() {
    return {
      rs: {},
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    async getContent() {
      const resp = await getContent({ id: this.$route.params.id });
      this.rs = resp.data;
      document.title = this.rs.title;
    },
  },
  watch: {
    $route() {
      this.getContent();
    },
  },
  components: {
    Title,
    Banner,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.content {
  margin-bottom: 100px;
  /deep/ img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
}
</style>