<template>
  <transition name="food-info">
    <div class="detail-wrapper" ref="detailWrapper" v-show="showDetail">
        <div class="food-detail">
          <div class="back" @click="toggleShow()">
            <i class="icon-arrow_lift"></i>
          </div>
          <img :src="food.image" width="100%" height="425" alt="">
          <div class="info">
            <h2 class="title">{{food.name}}</h2>
            <p class="desc"><span>月售{{food.sellCount}}</span> <span>好平率{{food.rating}}%</span></p>
            <p class="price"><span>￥</span>{{food.price}}</p>
          </div>
          <div class="space"></div>
          <div class="food-intro">
            <h3 class="block-title">商品介绍</h3>
            <div class="block-text">{{food.info}}</div>
          </div>
          <div class="space"></div>
          <div class="rating-content">
            <div class="rating-tab">
              <span class="rating-item">全部 <span>24</span></span>
              <span class="rating-item">推荐 <span>18</span></span>
              <span class="rating-item bad-rating">吐槽 <span>6</span></span>
            </div>
            <div class="switch" @click="evelflag=!evelflag">
              <span class="icon-check_circle" :class="{'on':evelflag}"></span>
              <span class="text">只看有内容的评价</span>
            </div>
            <div class="rating-content-list">
              <ul>
                <li v-for="rating in food.ratings" class="list-item">
                  <div class="avatar">
                    <img :src="rating.avatar" alt="" width="28" height="28">
                  </div>
                  <div class="content">
                    <div class="user"><span class="name">{{rating.username}}</span><span class="date-time">{{rating.rateTime | time}}</span></div>
                    <div class="star-wrapper" v-if="rating.score">
                      <star :size="24" :score="rating.score"></star>
                      <span class="deliveryTime">{{rating.deliveryTime}}分钟</span>
                    </div>
                    <div class="text">
                      <span class="icon" :class="rating.rateType?'icon-thumb_down':'icon-thumb_up'"></span>
                      {{rating.text}}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>
<script>
  import BScroll from 'better-scroll'
  import '../filters/time'
  export default{
      data(){
          return {
            evelflag:false,
            showDetail:false
          }
      },
      props:{
        food:{
            type:Object
        }
      },
      methods:{
        toggleShow:function(){
          this.showDetail=!this.showDetail;
          if(this.showDetail){
              this.$nextTick(()=>{
                this._initScroll();
              })
          }
        },
        _initScroll(){
            if(!this.detailWrapper){
                this.detailWrapper=new BScroll(this.$refs.detailWrapper,{
                    click:true
                })
            }
            else{
                this.detailWrapper.refresh()
            }
        }
      }
  }
</script>
<style lang="less" scoped>
  @import "../assets/less/icon.less";
  .detail-wrapper{
    position: fixed;
    width:100%;
    background: #ffffff;
    left:0;
    top:0;
    bottom:48px;
    &.food-info-enter-active,&.food-info-leave-active{
      teansform:translate3d(0,0,0);
    }
    &.food-info-enter,&.food-info-leave-active{
      teansform:translate3d(100%,0,0);
    }
    .back{
      position: absolute;
      top:12px;
      left:6px;
      font-size: 20px;
      color:#ffffff;
      padding:10px;
    }
    .space{
      width:100%;
      height:16px;
      border:1px solid rgba(7,17,27,0.1);
      background-color: #f3f5f7;
    }
    .info{
      padding:18px;
      .title{
        font-size: 14px;
        font-weight: 700;
        color:#07111b;
        line-height: 14px;
      }
      .desc{
        display: flex;
        padding-top:8px;
        font-size: 10px;
        color:#93999f;
        line-height: 10px;
        span:last-child{
          padding-left:12px;
        }
      }
      .price{
        padding-top:18px;
        font-size:16px;
        color:#f01414;
        line-height: 24px;
        font-weight: 700;
        span{
          font-size: 10px;
          font-weight: normal;
        }
      }
    }
    .food-intro{
      padding:18px;
      .block-title{
        font-size: 14px;
        font-weight: 500;
        color:#07111b;
        margin-bottom:6px;
      }
      .block-text{
        padding:0 8px;
        font-size: 12px;
        font-weight: 200;
        color:#4d555d;
        line-height: 24px;
      }

    }
    .rating-content {
      padding-bottom: 18px;
      .rating-tab {
        margin: 0 18px;
        padding: 18px 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .rating-item {
          display: inline-block;
          padding: 8px 12px;
          font-size: 12px;
          line-height: 16px;
          color: #4d555f;
          margin-right: 8px;
          background-color: rgba(0, 160, 220, 0.2);
          &.bad-rating {
            background-color: rgba(77, 85, 93, 0.2);
            &.badActive {
              background-color: #4d555d;
            }
          }
          &.active {
            background-color: #00a9dc;
            color: #ffffff;
          }
        }
      }
      .rating-content-list{
        margin:0 18px;
        .list-item{
          display: flex;
          padding:18px 0;
          border-bottom:1px solid rgba(7,17,27,0.1);
          font-size: 10px;
          line-height: 12px;
          color:#07111b;
          &:last-child{
            border:none;
          }
          .avatar{
            width:28px;
            margin-right:12px;
          }
          .content{
            flex: 1;
            .date-time{
              color:#93999f;
              float: right;
            }
            .text{
              font-size: 12px;
              line-height: 18px;
              .icon{
                font-size: 12px;
                line-height: 24px;
                margin-right:4px;
                &.icon-thumb_down{
                  color:#93999f;
                }
                &.icon-thumb_up{
                  color:#00a0dc
                }
              }
            }
          }
        }
      }
      .switch {
        padding: 12px 18px;
        color: #93999f;
        font-size: 12px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .icon-check_circle {
          font-size: 24px;
          vertical-align: middle;
          &.on {
            color: #00c850;
          }
        }
      }
    }
  }

</style>
