<template>
  <span class="iconMap" :class="iconClassMap[iconType]"></span>
</template>
<script>
  export default{
      props:{
          iconType:Number
      },
      created(){
          this.iconClassMap=['decrease','discount','special','invoice','guarantee']
      }
  }
</script>
<style lang="less" scoped>
  @import "../assets/less/mixin.less";
  .iconMap{
    display: inline-block;
    background-size: 100%;
    background-repeat: no-repeat;
    width:12px;
    height:12px;
    &.decrease{
      .bg-image('decrease_4')
     }
    &.discount{
      .bg-image('discount_4');
    }
    &.guarantee{
      .bg-image('guarantee_4');
    }
    &.invoice{
      .bg-image('invoice_4');
    }
    &.special{
      .bg-image('special_4');
    }
  }
</style>
