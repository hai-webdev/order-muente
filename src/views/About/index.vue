<template>
  <div class="about-container">
    <Banner :banner="sortBanner" :title="sortName" :isCrumbs="true" />
    <Company :isInner="false" />
    <div class="product module">
      <Title
        title="我们的团队"
        desc="与韩国生命科学研究所R&D联合研发，通过多年临床以及生物实验的研究。与 KISTI "
      />
      <div class="team max-center">
        <Team />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Company from "@/components/Company";
import Team from "@/components/Team";
import banners from "@/mixins/banner";
export default {
  mixins:[banners(2)],
  components: {
    Company,
    Banner,
    Title,
    Team,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.product {
  margin-top: 100px;
}
@media screen and (max-width: 768px) {
  .product {
    margin-top: 0;
  }
}
</style>