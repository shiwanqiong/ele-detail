<template>
  <div class="seller">
    <div class="seller-wrapper">
      <div class="info">
        <div class="title-info">
          <div class="title">
            <div class="name">粥品香坊（回龙观）</div>
            <div class="star-wrapper">
              <div class="star">
                <star :size="36"></star>
              </div>
              <span class="rate-count">(24)</span>
              <span class="sell-count">月售90单</span>
            </div>
          </div>
          <div class="collect">
            <span class="icon-favorite"></span>
            <span class="text">收藏</span>
          </div>
        </div>
        <div class="remark">
          <dl>
            <dt>起送价</dt>
            <dd>20 <span>元</span></dd>
          </dl>
          <dl>
            <dt>商家配送</dt>
            <dd>4 <span>元</span></dd>
          </dl>
          <dl>
            <dt>平均配送时间</dt>
            <dd>38 <span>分钟</span></dd>
          </dl>
        </div>
      </div>
      <div class="space"></div>
      <div class="activities">
        <div class="bulletin">
          <h1>公告与活动</h1>
          <div class="content">
            粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
          </div>
        </div>
        <div class="supports">
          <ul>
            <li v-for="n in 4" class="item">
              <icon-map :iconType="n-1"></icon-map>
              <span class="text">在线支付满28减5</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="space"></div>
      <div class="seller-detail seller-img">
        <h1>商家实景</h1>
        <div class="img-wrapper">
          <img v-for="n in 4" src="" alt="" width="120" height="90">
        </div>
      </div>
      <div class="space"></div>
      <div class="seller-detail seller-textInfo">
        <h1>商家信息</h1>
        <ul>
          <li class="item" v-for="n in 4">
            <span class="text">该商家支持发票，请下单写好发票抬头</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import star from '../components/star.vue'
  import iconMap from '../components/iconMap.vue'
  export default{
    data(){
      return {

      }
    },
    components:{
      star:star,
      iconMap:iconMap
    }

  }

</script>
<style lang="less" scoped>
  @color1:#4d555d;
  @normalColor:#07111b;
  .info{
    padding:18px 0;
    margin:0 18px;
    .title-info{
      display: flex;
      padding-bottom:18px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      .title{
        flex:1;
        .name{
          font-size: 14px;
          color:@normalColor;
          line-height: 14px;
        }
        .star-wrapper{
          padding-top:8px;
          .star{
            display: inline-block;
            vertical-align: middle;
          }
          .rate-count,.sell-count{
            font-size: 10px;
            padding:0 12px 0 8px;
            color:@color1;
            line-height: 18px;
          }
          .sell-count{
            padding:0;
          }
        }
      }
      .collect{
        .text{
          display: block;
          text-align: center;
          font-size: 10px;
          color:@color1;
          padding-top:4px;
        }
      }
    }
    .remark{
      margin-top:18px;
      display: flex;
      font-size: 10px;
      dl{
        flex:1;
        border-right:1px solid rgba(7,17,27,0.1);
        text-align: center;
        dt{
          color:#93999f;
          line-height: 10px;
          margin-bottom:6px;
        }
        dd{
          font-size:24px;
          span{
            font-size: 10px;
            margin-left:-6px;
          }
        }
        &:last-child{
          border:none
        }
      }
    }
  }
  .space{
    width:100%;
    height:16px;
    border:1px solid rgba(7,17,27,0.1);
    background-color: #f3f5f7;
  }
  .activities{
    padding-top:18px;
    .bulletin{
      margin:0 18px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      .name{
        font-size: 14px;
        color:@normalColor;
        line-height: 14px;
      }
      .content{
        padding:8px 12px 16px 12px;
        font-size: 12px;
        line-height: 24px;
        color:#f01414;
      }
    }
  }
  .supports{
    margin:0 18px;
    /*.item{
      padding:16px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      .text{
        font-size: 12px;
        font-weight: normal;
        color: @normalColor;
        line-height: 16px;
      }
      &:last-child{
        border:none
      }
    }*/
  }
  .item{
    padding:16px;
    border-bottom:1px solid rgba(7,17,27,0.1);
    .text{
      font-size: 12px;
      font-weight: normal;
      color: @normalColor;
      line-height: 16px;
    }
    .iconMap{
      width:16px;
      height:16px;
      vertical-align: top;
      margin-right:6px;
    }
    &:last-child{
      border:none
    }
  }
  .seller-img{
    margin:18px;
  }
  .seller-detail{
    .img-wrapper{
      overflow:auto;
      white-space: nowrap;
      img{
        margin-right:6px;
        &:last-child{
          margin:0;
        }
      }
    }
    h1{
      font-size: 14px;
      line-height: 14px;
      margin-bottom:12px;
    }
  }
  .seller-textInfo{
    margin:18px;
    h1{
      border-bottom:1px solid rgba(7,17,27,0.1);
      margin-bottom:0;
      padding-bottom:15px;
    }
  }

</style>
