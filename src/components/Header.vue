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
      <div class="support-count">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作精美粥品</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
       /* props:{
            seller:{
                type:Object
            }
        }*/
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
  }
</style>
