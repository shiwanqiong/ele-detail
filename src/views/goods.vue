<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu-list">
        <li v-for="(item,index) in goods"class="menu-item" @click="menuClick(index,$event)">
          <span class="text"><span class="icon"></span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul class="foods-list">
        <li v-for="item in goods" class="foods-list-item">
          <div class="foods-group">
            <h1>热销榜</h1>
            <ul class="foods-group-list">
              <li v-for="list in item.foods" class="foods-group-item" @click="goDetail(list)">
                <div class="food-img">
                  <img :src="list.image" alt="" width="57" height="57">
                </div>
                <div class="food-detail">
                  <h2>{{list.name}}</h2>
                  <p class="text">{{list.description}}</p>
                  <p class="text">月售{{list.sellCount}}份  好评率{{list.rating}}</p>
                  <span class="price">￥{{list.price}}</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <food :food="selectFood" ref="foodDetail"></food>
  </div>

</template>
<script>
  import food from '../components/food.vue'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default{
    data:function(){
      return {
        goods:[],
        selectFood:{}
      }
    },
    components:{
        food:food
    },
    created(){
       axios.get('static/data.json').then((res)=>{
         this.goods=res.data.goods;
         this.$nextTick(()=>{
           this._initScroll();
         })
       })
    },
    methods:{
      menuClick(index,event){
        /*this.foodsScroll.scrollTo();*/
      },
      _initScroll(){
        this.foodsScroll=new BScroll(this.$refs.foodsWrapper,{
          click:true
        })
        /*this.foodsScroll.on('scroll', (pos) => {
        })*/
      },
      goDetail(food){
        this.selectFood=food;
        this.$nextTick(()=>{
          this.$refs.foodDetail.toggleShow();
        })
      }
    },


  }

</script>
<style lang="less" scoped>
  .goods{
    display: flex;
    position: absolute;
    bottom:46px;
    overflow: hidden;
    top:174px;
    width:100%;
    .menu-wrapper{
      width:80px;
      .menu-item{
        display: table;
        margin:0 12px;
        border-bottom:1px solid rgba(7,17,27,0.1);
        height:54px;
        .text{
          display: table-cell;
          vertical-align: middle;
          font-size: 12px;
          line-height: 16px;
        }
        &:last-child{
          border:none
        }
      }
    }
    .foods-wrapper{
      flex: 1;
     /* overflow-y: auto;*/
     /* .foods-list{

      }*/
      .foods-group{
        h1{
          height:26px;
          font-size:12px;
          color:#93999f;
          line-height: 26px;
          background-color: #f3f5f7;
          padding-left:12px;
          border-left:2px solid #d9dde1;
        }
        .foods-group-list{
          margin:0 18px;
          .foods-group-item{
            display: flex;
            position: relative;
            padding:18px 0;
            border-bottom:1px solid rgba(7,17,27,0.1);
            .food-detail{
              flex:1;
              padding-left:10px;
              &:last-child{
                border:none;
              }
              h2{
                font-size:14px;
                line-height: 14px;
                font-weight: 700;
                margin:2px 0 8px 0;
                color:#07111b;
              }
              .text{
                font-size: 12px;
                color:#93999f;
                line-height: 18px;
              }
              .price{
                font-size: 14px;
                color:#f01414;
              }
            }
          }
        }
      }
    }
  }
</style>
