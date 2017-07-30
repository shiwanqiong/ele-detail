<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="des">
          蜂鸟转送/38分钟送达
        </div>
        <div class="supports">
          <span class="icon decrease"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="support-count" @click="showDetails()">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetails()">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作精美粥品</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <transition name="fade">
      <div class="detail" v-if="detailShow">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1 class="name">粥品香坊（回龙观）</h1>
            <div class="star-wrapper">
              <star :size="48"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports">
              <li class="support-item">
                <span class="icon"></span>
                <span class="text">在线支付满28减5</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
            </div>
          </div>
        </div>
        <div class="detail-close" >
          <i class="icon-close" @click="hideDetails()"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
    import star from '../components/star'
    export default{
        data(){
            return {
              detailShow:false
            }
        },
        props:{
            seller:{
                type:Object
            }
        },
        methods:{
          showDetails(){
            this.detailShow=true
          },
          hideDetails(){
            this.detailShow=false
          }
        },
        components:{
          star:star
        }
    }
</script>
<style lang="less" scoped>
  @import '../assets/less/mixin';
  .header{
    position: relative;
    background: rgba(7,17,27,0.5);
    color:#ffffff;
    .content-wrapper{
      padding:24px 12px 18px 24px;
      display: flex;
      position: relative;
      font-size:12px;
      .content{
        margin-left:16px;
        text-align: left;
        .title{
          margin:2px 0 8px 0;
          font-size:16px;
          .brand{
            display: inline-block;
            width:30px;
            height:18px;
            vertical-align: middle;
            .bg-image('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name{
            line-height: 18px;
            margin-left:6px;
            font-weight: bold;
          }
        }
        .des{
          margin-bottom:10px;
        }
        .supports{
          .icon{
            display: inline-block;
            width:12px;
            height:12px;
            vertical-align: middle;
            margin-right:4px;
            background-size: 100%;
            background-repeat: no-repeat;
            &.decrease{
              .bg-image('decrease_1')
            }
            &.discount{
              .bg-image('discount_1')
            }
            &.guarantee{
              .bg-image('guarantee_1')
            }
            &.invoice{
              .bg-image('invoice_1')
            }
            &.special{
              .bg-image('special_1')
            }
          }
          .text{
            line-height: 12px;
          }
        }
      }
      .support-count{
        position: absolute;
        right:12px;
        bottom:18px;
        border-radius:14px;
        padding:0 8px;
        height:24px;
        line-height: 24px;
        text-align: center;
        background-color: rgba(0,0,0,0.2);
        font-size: 10px;
        .icon-keybord_arrow_right{
          margin-left: 2px;
          line-height: 24px;
          font-size: 10px;
        }
      }
    }
    .bulletin-wrapper{
      position: relative;
      height:28px;
      line-height: 28px;
      padding:0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: rgba(7,17,27,0.2);
      font-size: 10px;
      .bulletin-title{
        display: inline-block;
        width:22px ;
        height: 12px;
        vertical-align: top;
        margin-top:8px;
        background-size: 100%;
        background-repeat: no-repeat;
        .bg-image('bulletin');
      }
      .bulletin-text{
        margin:0 4px;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        right:12px;
        top:8px;
      }
    }
    .detail{
      position: fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: rgba(7,17,27,0.8);
      backdrop-filter :blur(10px);
      .detail-wrapper{
        min-height: 100%;
        .detail-main{
          margin-top:64px;
          padding-bottom:64px;
          color:#ffffff;
          .name{
            font-size: 16px;
            font-weight:700;
            line-height: 16px;
            text-align: center;
          }
          .star-wrapper{
            margin:16px 11px 28px 0;
            text-align: center;
          }
          .title{
            display: flex;
            width:80%;
            margin:0 auto 24px auto;
            .line{
              flex: 1;
              height:1px;
              background: rgba(255,255,255,0.2);
              margin-top:7px;
            }
            .text{
              padding:0 12px;
              font-size: 14px;
              font-weight: 700;
            }
          }
          .supports{
            padding:0 0 28px 36px;
            .support-item{
              padding:0 6px 12px 16px;
              text-align:left;
              .text{
                font-size: 12px;
                vertical-align: middle;
                line-height: 12px;
                font-weight:200;
              }
            }
          }
          .bulletin{
            padding:0 48px;
            font-size: 12px;
            font-weight: 200;
            line-height: 24px;
            text-align: left;
          }

        }
      }
      .detail-close{
        position: relative;
        width:32px;
        height:32px;
        margin :-120px auto 0 auto;
        clear:both;
        font-size: 32px;
        color:rgba(255,255,255,0.5);
      }
      &.fade-enter-active,&.fade-leave-active{
        transition: opacity 0.5s;
      }
      &.fade-enter,&.fade-leave-active{
      opacity: 0;
      }
    }


  }
</style>
