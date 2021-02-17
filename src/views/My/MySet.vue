<template>
  <div class="myset">
      <mt-header title="我的订单" class="myheader">
        <router-link to="/myinfo" slot="left"><mt-button icon="back"></mt-button></router-link>
      </mt-header>
      <logincon v-if="isLogin"></logincon>
      <logoutcon v-else></logoutcon>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import logincon from '../../components/MySet/logincon';
import logoutcon from '../../components/MySet/logoutcon';

export default {
  components:{logincon,logoutcon},
  methods:{
    quit(){}
  },
  computed:{
    ...mapState(["isLogin"])
  }
  
}
</script>
<style>
  .myset{
    width:100%;
  }
  .myset .myheader{
    width:100% !important; 
  }
  .myset .content{
    text-align:left !important;
  }

  .myset .mint-cell-wrapper{
    background-image: none;
    border-bottom:1px solid #e8e8e8;
  }

  .myset .mint-cell.last .mint-cell-wrapper{
     border-bottom:0;
  }
  .myset .quit{
    color:rgb(255,155,77);
    background-color: #fff;
    border-radius: 20.5px;
  }
  .myset .dibu{
    margin-top:20px;
    margin:0 5%;
    width: 90%;
  }
</style>