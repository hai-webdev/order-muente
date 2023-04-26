<template>
  <div class="home-container">
    <video :src="video" controls muted autoplay class="video"></video>
    <Company />
    <div class="product module">
      <Title title="我们的产品" />
      <div class="product">
        <Product />
      </div>
    </div>
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
import { mapState } from "vuex";
import Title from "@/components/Title";
import Product from "@/components/Product";
import Team from "@/components/Team";
import Company from "@/components/Company";
export default {
  created() {
    this.$store.dispatch("home/getVideo");
  },
  computed: {
    ...mapState({
      video: (state) => state.home.video,
    }),
  },
  components: {
    Title,
    Product,
    Team,
    Company,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
@import "./index.less";
</style>