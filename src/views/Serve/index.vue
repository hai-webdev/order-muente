<template>
  <div class="serve-container">
    <Banner :banner="sortBanner" :title="sortName" :isCrumbs="true" />
    <Title :title="sortName" :desc="rs.content" />
    <main class="content max-center">
      <div class="left-layout">
        <div class="logo">
          <img :src="rs.ico" :alt="rs.title" />
        </div>
      </div>
      <div class="right-layout">
        <form class="form" @submit.prevent="formSubmit">
          <input
            type="text"
            v-model="form.name"
            class="mr"
            placeholder="你的姓名："
          />
          <input type="text" v-model="form.email" placeholder="你的邮箱：" />
          <input
            type="text"
            v-model="form.project"
            class="w100"
            placeholder="你的项目："
          />
          <textarea
            v-model="form.message"
            placeholder="请输入消息..."
          ></textarea>
          <button type="submit">立即提交</button>
        </form>
      </div>
    </main>
    <div class="contact-list max-center">
      <div class="contact-item">
        <div class="icon"></div>
        <div class="title"></div>
        <div class="cont"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import banners from "@/mixins/banner";
import postMsg from "@/api/postMsg";
import { mapState } from "vuex";
export default {
  mixins: [banners(3)],
  data() {
    return {
      form: {
        name: "",
        email: "",
        project: "",
        message: "",
      },
    };
  },
  created() {
    this.$store.dispatch("serve/getData");
  },
  methods: {
    async formSubmit() {
      const resp = await postMsg(this.form);
      if (resp && resp.data) {
        this.$message({
          message: resp.data,
          type: "success",
        });
      }
      this.form.name = "";
      this.form.email = "";
      this.form.project = "";
      this.form.message = "";
    },
  },
  computed: {
    ...mapState({
      rs: (state) => state.serve.data,
    }),
  },
  components: {
    Banner,
    Title,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
@import "./index.less";
@import "./768.less" screen and (max-width: 768px);
</style>