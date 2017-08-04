<template>
  <div class="seller">
    <div class="seller-wrapper" ref="sellerWrapper">
      <div class="seller-content">
        <div class="info">
          <div class="title-info">
            <div class="title">
              <div class="name">{{seller.name}}</div>
              <div class="star-wrapper">
                <div class="star">
                  <star :size="36" :score="seller.score"></star>
                </div>
                <span class="rate-count">({{seller.ratingCount}})</span>
                <span class="sell-count">月售{{seller.sellCount}}单</span>
              </div>
            </div>
            <div class="collect" @click="collect=!collect">
              <span class="icon-favorite" :class="{'active':collect}"></span>
              <span class="text">{{collect?'已收藏':'收藏'}}</span>
            </div>
          </div>
          <div class="remark">
            <dl>
              <dt>起送价</dt>
              <dd>{{seller.minPrice}} <span>元</span></dd>
            </dl>
            <dl>
              <dt>商家配送</dt>
              <dd>{{seller.deliveryPrice}} <span>元</span></dd>
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
              {{seller.bulletin}}
            </div>
          </div>
          <div class="supports">
            <ul>
              <li v-for="support in seller.supports" class="item">
                <icon-map :iconType="support.type"></icon-map>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="space"></div>
        <div class="seller-detail seller-img">
          <h1>商家实景</h1>
          <div class="img-wrapper" ref="picsWrapper">
            <div class="picList" ref="picList">
              <img v-for="pic in seller.pics" :src="pic" alt="" width="120" height="90">
            </div>
          </div>
        </div>
        <div class="space"></div>
        <div class="seller-detail seller-textInfo">
          <h1>商家信息</h1>
          <ul>
            <li class="item" v-for="info in seller.infos">
              <span class="text">{{info}}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import star from '../components/star.vue'
  import iconMap from '../components/iconMap.vue'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        collect:false,
        seller:{}
      }
    },
    created(){
      axios.get('static/data.json').then((res)=>{
        this.seller=res.data.seller;
        this.$nextTick(()=>{
          this.sellerScroll = new BScroll(this.$refs.sellerWrapper, {
            click: true
          });
          this._initPicScroll();
        })
      })
    },
    components:{
      star:star,
      iconMap:iconMap
    },
    methods:{
      _initPicScroll() {
        if (this.picsScroll) {
          return
        }
        const PIC_WIDTH = 120
        const MARGIN = 6
        let picLen = this.seller.pics.length
        this.$refs.picList.style.width = PIC_WIDTH * picLen + MARGIN * (picLen - 1) + 'px'
        this.picsScroll = new BScroll(this.$refs.picsWrapper, {
          scrollX: true
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @color1:#4d555d;
  @normalColor:#07111b;
  .seller-wrapper{
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }
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
        text-align: center;
        width:50px;
        .text{
          display: block;
          text-align: center;
          font-size: 10px;
          color:@color1;
          padding-top:4px;
        }
        .icon-favorite{
          font-size:24px;
          line-height: 24px;
          color:#d4d6d9;
          &.active{
            color:#f01414;
          }
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
    white-space: nowrap;
    overflow: hidden;
  }
  .seller-detail{
    .img-wrapper{
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
