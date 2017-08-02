<template>
    <div class="rating-wrapper" ref="ratingWrapper">
      <div class="rating-main">
        <div class="rating-info">
          <div class="rating-score">
            <dl>
              <dt>{{seller.score}}</dt>
              <dd class="rating-text">综合评分</dd>
              <dd class="rating-des">高于周边商家{{seller.rankRate}}%</dd>
            </dl>
          </div>
          <div class="rating-star">
            <div class="rate-item">
              <span class="rate-item-text">服务态度</span>
              <star :size="36" :score="seller.serviceScore"></star>
              <span class="rate-item-score">{{seller.serviceScore}}</span>
            </div>
            <div class="rate-item">
              <span class="rate-item-text">食物口味</span>
              <star :size="36" :score="seller.foodScore"></star>
              <span class="rate-item-score">{{seller.foodScore}}</span>
            </div>
            <div class="rate-item">
              <span class="rate-item-text">送达时间</span>
              <span class="rate-item-time">{{seller.deliveryTime}}分钟</span>
            </div>
          </div>
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
              <li v-for="rating in ratings" v-if="rating.text!=''" class="list-item">
                <div class="avatar">
                  <img :src="rating.avatar" alt="" width="28" height="28">
                </div>
                <div class="content">
                  <div class="user"><span class="name">{{rating.username}}</span><span class="date-time">{{rating.rateTime}}</span></div>
                  <div class="star-wrapper">
                    <star :size="24" :score="rating.score"></star>
                    <span class="deliveryTime">{{rating.deliveryTime}}分钟</span>
                  </div>
                  <div class="text">
                    {{rating.text}}
                  </div>
                  <div class="recommend">
                    <span class="icon icon-thumb_up"></span>
                    <span class="dish"v-for="recommend in rating.recommend">{{recommend}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import star from '../components/star.vue'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default{
    data:function(){
      return {
        evelflag:true,
        ratings:[],
        seller:{}
      }
    },
    created(){
      axios.get('static/data.json').then((res)=>{
        this.seller=res.data.seller;
        this.ratings=res.data.ratings;
        this.$nextTick(()=>{
          this.ratingScroll=new BScroll(this.$refs.ratingWrapper,{
            click:true
          })
        })
      })
    },
    components:{
        star:star
    }
  }

</script>
<style lang="less" scoped>
  .rating-wrapper{
    position: absolute;
    top:174px;
    bottom:0;
    width:100%;
    left:0;
    bottom:0;
    overflow: hidden;
  }
  .rating-info{
    display: flex;
    margin:18px 0;
    .rating-score{
      width:138px;
      text-align: center;
      border-right:1px solid rgba(7,17,27,0.1);
      dt{
        font-size:24px;
        color:#f90;
        line-height: 28px;
      }
      .rating-text{
        font-size: 12px;
        padding:6px 0 8px 0;
        color:#07111b;
        line-height: 12px;
      }
      .rating-des{
        font-size: 10px;
        color:#07111b;
        line-height: 10px;
        margin-bottom:6px;
      }

    }
    .rating-star{
      flex:1;
      padding:0 24px;
      .star-wrapper{
        display: flex;
      }
      .rate-item{
        margin-bottom:8px;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        .rate-item-text{
          color:#07111b;
          margin-right:12px;
        }
        .rate-item-score{
          color:#f90;
          padding-left:12px;
        }
        .rate-item-time{
          color:#939994;
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
  .rating-content{
    padding-bottom:18px;
    .rating-tab{
      margin:0 18px;
      padding:18px 0;
      border-bottom:1px solid rgba(7,17,27,0.1);
      .rating-item{
        display: inline-block;
        padding:8px 12px;
        font-size: 12px;
        line-height: 16px;
        color:#4d555f;
        margin-right:8px;
        background-color: rgba(0,160,220,0.2);
        &.bad-rating{
          background-color: rgba(77,85,93,0.2);
          &.badActive{
            background-color: #4d555d;
          }
        }
        &.active{
          background-color: #00a9dc;
          color:#ffffff;
        }
      }
    }
    .switch{
      padding:12px 18px;
      color:#93999f;
      font-size: 12px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      .icon-check_circle{
        font-size: 24px;
        vertical-align: middle;
        &.on{
          color:#00c850;
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
          .star-wrapper{
            display: flex;
            padding-top:4px;
            margin-bottom:6px;
            .deliveryTime{
              color:#93999f;
              padding-left:6px;
            }
          }
          .text{
            font-size: 12px;
            line-height: 18px;
          }
          .recommend{
            padding-top:4px;
            .icon{
              font-size:12px;
              color:#00a0dc;
              line-height: 16px;
            }
            .dish{
              display: inline-block;
              padding:2px 6px;
              margin-top:4px;
              margin-right:8px;
              color:#93999f;
              line-height:16px;
              border:1px solid rgba(7,17,27,0.1);
            }
          }
        }
      }
    }
  }
</style>
