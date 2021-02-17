<template>
  <div class="logincon">
    <div class="content common">
      <mt-cell icon="user.avatar" class="uname" isLink :title="user.nickname" value="编辑资料"></mt-cell>
      <mt-cell isLink title="账号和绑定"></mt-cell>
      <mt-cell isLink title="意见反馈"></mt-cell>
      <mt-cell isLink title="清除缓存"></mt-cell>
      <mt-cell class="last" isLink title="分享"></mt-cell>
    </div>
    <div class="content common">
      <mt-cell isLink title="用户协议"></mt-cell>
      <mt-cell isLink title="隐私政策" class="last"></mt-cell>
    </div>
    <div class="dibu">
      <mt-button class="quit" size="large" @click="quit">
        退出当前账号
      </mt-button>
    </div>
  </div> 
    
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  methods:{
    ...mapMutations(["logout"]),
    quit(){
      this.$messagebox.confirm("确定要注销吗？").then(result=>{
        sessionStorage.clear();
        localStorage.clear();
        this.logout();
      }).catch(err=>{
        
      });
    }
  },
  computed:{
    ...mapState(["user","isLogin"])
  }
}
</script>
<style>
 
</style>
      