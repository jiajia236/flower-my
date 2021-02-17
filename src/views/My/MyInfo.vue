<template>
  <div class="myinfo">
    <!-- 头部 -->
    <router-link :to="isLogin?'/mybasic':'/login'">
      <div class="myinfoheader">
        <div class="headerleft">
          <img :src="isLogin?user.avatar:'/img/myinfo/default.png'">
          <span class="uname" v-if="!isLogin">立即登录</span>
          <span class="uname" v-else>您好，{{user.nickname}}</span>
        </div>
        <img src="/img/myinfo/arrow.png" >
      </div>
    </router-link>

    <!-- 订单列表 -->
    <div class="common">
      <router-link class="order" to="/myorder/all">
        <p>我的订单</p>
        <p>全部订单<img src="/img/myinfo/arrow.png" alt=""></p>
      </router-link>
      <div class="pay">
        <div>
          <router-link to="/myorder/waitpay">
            <img src="/img/myinfo/package.png" alt="">
            <p>待付款</p>
          </router-link>
        </div>
        <div>
          <router-link to="/myorder/paying">
            <img src="/img/myinfo/car.png" alt="">
            <p>进行中</p>
          </router-link>
        </div>
        <div>
          <router-link to="/myorder/waitassess">
            <img src="/img/myinfo/pingjia.png" alt="">
            <p>待评价</p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 积分、优惠卷 -->
    <div class="common score">
      <div>
        <p>0</p>
        <p>积分</p>
      </div>
      <div>
        <router-link to="/mycoupon">
          <p>0</p>
          <p>优惠券</p>
        </router-link>
      </div>
      <div>
        <p>0</p>
        <p>收藏</p>
      </div>
      <div>
        <p>0</p>
        <p>足迹</p>
      </div>
    </div>

  <!-- 其他 -->
    <div class="others common">
      <div v-for="(elem,i) of userfn" :key="i">
        <router-link :to="elem.router">
          <img :src="elem.img">
          <p v-text="elem.msg"></p>
        </router-link>
      </div>
      <div></div>
    </div>

  </div>
</template>
<script>
import {mapMutations,mapState} from "vuex"
export default {
  computed:{
    ...mapState(["isLogin","user"])
  },
 data(){
   return{
    userfn:[]
   }
 },
 methods:{
   ...mapMutations(["loginout"])
 },
 mounted(){
   this.$indicator.open("加载中");
   this.axios.get("/userfn").then(result=>{
    this.userfn=result.data;
    console.log(result.data);
    this.$indicator.close();
   });
 }
}
</script>
<style>
  .myinfo{
    margin:0 5%;
    padding:40px 0;
    width:90%;
    font-size:14px;
  }
  .myinfo .myinfoheader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:20px;
  }

  .myinfo .myinfoheader img{
    width:50px;
    height:50px;
    border-radius: 50%;
    border:1px solid transparent;
  } 

  .myinfo .myinfoheader .uname{
    font-weight: bolder;
    font-size:20px;
    margin-left:20px;
  }

  .myinfo .myinfoheader>img:last-child{
    width:40px;
    height:40px;
  }
  .myinfo .order{
    padding:10px;
  }

  .myinfo .order{
    display: flex;
    justify-content: space-between;
    
  }

  .myinfo .order p:first-child{
    font-weight: bolder;
    font-size: 18px;
  }

  .myinfo .order p>img{
    width:24px;
  }

  .myinfo .pay{
    line-height:24px;
    border-top:1px solid #bbb;
    padding:10px 0;
    display: flex;
    justify-content: space-around;
  }
  .myinfo .pay img,.myinfo .others img{
    width:32px;
  }

  .myinfo .score{
    display: flex;
    justify-content: space-around;
    margin:20px 0;
    padding:10px 0;
  }

  .myinfo .others{
    display: flex;
    justify-content: space-around;
    padding:20px 0;
  }

  .myinfo .others div{
    flex:0 0 25%;
  }

  .myinfo .others p{
    line-height:40px;
  }
</style>