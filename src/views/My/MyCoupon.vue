<template>
  <div class="mycoupon">
    <mt-header title="我的优惠券" class="myheader">
      <router-link to="/myinfo" slot="left"><mt-button icon="back"></mt-button></router-link>
    </mt-header>
    <mt-navbar v-model="active">
      <mt-tab-item id="nouse">未使用(0)</mt-tab-item>
      <mt-tab-item id="used">已使用(0)</mt-tab-item>
      <mt-tab-item id="shixiao">已失效(0)</mt-tab-item>
    </mt-navbar>
    <mt-tab-container>
      <mt-tab-container-item>
        <div class="content">
          <img src="/img/myinfo/nocoupon.png" alt="">
          <p>暂无优惠券</p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  props:["ceshi"],
  data(){
    return{
      active:"nouse"
    }
  },
  mounted(){
    console.log(this.ceshi);
  }
}
</script>
<style>
  .mycoupon{
    width:100%;
    text-align: center;
  }
  .mycoupon .mint-navbar .mint-tab-item.is-selected{
    color:rgb(255, 155, 77);
    border-bottom:1px solid rgb(255, 155, 77);
  }
  .mycoupon .content{
    margin-top:50px;
  }
  .mycoupon .content img{
    width:70px;
    margin-bottom:20px;
  }
</style>