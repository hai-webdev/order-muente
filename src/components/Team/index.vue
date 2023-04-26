<template>
  <div class="team-container">
    <div class="left-layout">
      <div class="title">{{team1Title}}</div>
      <div class="imgs">
        <div class="top">
          <div class="img" v-if="team1[0]">
            <img :src="team1[0].ico" alt="" />
            <p>{{team1[0].title}}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="img" v-if="team1[1]">
            <img :src="team1[1].ico" alt="" />
            <p>{{team1[1].title}}</p>
          </div>
          <div class="img" v-if="team1[2]">
            <img :src="team1[2].ico" alt="" />
            <p>{{team1[2].title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-layout">
      <div class="title">{{team2Title}}</div>
      <div class="imgs">
        <div class="img" v-if="team2[0]">
          <img :src="team2[0].ico" alt="" />
          <p>{{team2[0].title}}</p>
        </div>
        <div class="img" v-if="team2[1]">
          <img :src="team2[1].ico" alt="" />
          <p>{{team2[1].title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  created(){
    this.$store.dispatch("team/getTeam");
  },
  computed:{
    ...mapState({
      team1: state => state.team.team1,
      team2: state => state.team.team2,
      team1Title: state => state.team.team1Title,
      team2Title: state => state.team.team2Title,
    })
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./768.less" screen and (max-width:768px);
</style>