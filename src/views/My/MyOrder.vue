<template>
<div class="myorder">
  <mt-header title="我的订单" class="myheader">
    <router-link to="/myinfo" slot="left"><mt-button icon="back"></mt-button></router-link>
  </mt-header>
  <mt-navbar v-model="oid">
    <mt-tab-item id="all">全部</mt-tab-item>
    <mt-tab-item id="waitpay">待付款</mt-tab-item>
    <mt-tab-item id="paying">进行中</mt-tab-item>
    <mt-tab-item id="waitassess">待评价</mt-tab-item>
  </mt-navbar>
  <mt-tab-container>
    <mt-tab-container-item>
      <div class="content">
        <img src="/img/myinfo/noorder.png" alt="">
        <p>您暂时没有相关的订单哦...</p>
        <mt-button size="small" class="goindex" @click="goindex">去首页看看</mt-button>
      </div>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>
<script>
export default {
  props:["oid"],
  data(){
    return{
        
    }
  },
  methods:{
    goindex(){
      this.$router.push("/");
    }
  },
  mounted(){
    this.oid
  }
}
</script>
<style>
  .myorder{
    text-align: center;
    width:100%;
    box-sizing: border-box;
  }
  
  .myorder .mint-navbar .mint-tab-item.is-selected{
    color:rgb(255, 155, 77);
    border-bottom:1px solid rgb(255, 155, 77);
  }
  .myorder .content{
    margin-top:30px;
  }
  .myorder .content img{
    width:150px;
  }
  .myorder .goindex{
    margin-top:20px;
    background-color: rgb(255, 155, 77);
    color:#fff;
    border-radius: 16.5px;;
  }
</style>