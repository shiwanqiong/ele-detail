<tenplate>
  <div class="seller">
    <div class="seller-wrapper">
      <div class="info">
        <div class="title-info">
          <div class="title">
            <div class="title">粥品香坊（回龙观）</div>
            <div class="star-wtapper">
              <star :size="36"></star>
              <span class="rete-count">(24)</span>
              <span class="sell-count">月售90单</span>
            </div>
          </div>
          <div class="cellect">
            <span class="icon-favorite"></span>
            <span class="text">收藏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</tenplate>
<script>
  import star from '../components/star.vue'
  export default{
    data:function(){
      return {

      }
    },
    components:{
      star:star
    }

  }

</script>
<style lang="less" scoped>

</style>
