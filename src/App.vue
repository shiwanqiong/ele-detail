<template>
  <div id="app">
    <v-header></v-header>
    <!--<router-view></router-view>-->
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
</style>
