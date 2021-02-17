<template>
  <div class="logincon">
    <div class="content common">
      <mt-cell class="uname" isLink title="用户登录" to="/login"></mt-cell>
      <mt-cell isLink title="账号和绑定" to="/login"></mt-cell>
      <mt-cell isLink title="意见反馈" to="/login"></mt-cell>
      <mt-cell isLink title="清除缓存" to="/login"></mt-cell>
      <mt-cell class="last" isLink title="分享" to="/login"></mt-cell>
    </div>
    <div class="content common">
      <mt-cell isLink title="用户协议" to="/login"></mt-cell>
      <mt-cell isLink title="隐私政策" to="/login"></mt-cell>
    </div>
  </div> 
    
</template>
<script>
import { mapState } from 'vuex'

export default {
  methods:{
    quit(){

    }
  },
    computed:{
    ...mapState(["user","isLogin"])
  }
}
</script>
<style>
 
</style>
      