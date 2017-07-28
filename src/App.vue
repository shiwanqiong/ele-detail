<template>
  <div id="app">
    <v-header></v-header>
    <!--<router-view></router-view>-->
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{name:'Goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'Ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'Seller'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/Header.vue'
export default {
  name: 'app',
  components:{vHeader}
}
</script>

<style lang="less">
  @import "assets/less/index";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .tab{
    display: flex;
    width:100%;
    height:40px;
    line-height: 40px;
    border-bottom:1px solid rgba(7,17,27,0.1);
    .tab-item{
      flex:1;
      text-align: center;
      font-size: 14px;
      .router-link-exact-active{
        color:#f01414;
      }
    }
  }
</style>
