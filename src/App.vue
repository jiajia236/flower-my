<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return{transitionName:"slide-right"}
  },
  //在路由发生变化时监听是前进还是后退状态，应用不同动画
 watch: {
   '$route'(to, from) {
    //  console.log(from);
    // console.log(to.meta);
       if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left';
       }else{
        this.transitionName = 'slide-right';
       }
    }
  }
}
</script>
  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app .common{
  width:90%;
  margin:30px 5%;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius:10px;
  align-items: center;
  text-align: center;
  line-height:30px;
  flex-wrap: wrap;
  color:#000;
}

#app .myheader{
  background-color: #fff;
  color:#000;
  font-size: 18px;
  line-height: 30px;
  font-family: "黑体";
}

a{
  color:#000;
  text-decoration: none;
}
body{
  background-color: #f8f8f8;
}
@font-face{
    font-family:"title";
    src:url("/font/xiaxing.ttf");
 }
  @font-face{
    font-family:"quxiao";
    src:url("/font/roman.fon");
  }

.child-view {
  position:absolute;
  transition: all 0.6s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  /* opacity: 0; */
  -webkit-transform: translate(120%, 0);
  transform: translate(120%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  /* opacity: 0; */
  -webkit-transform: translate(-120%, 0);
  transform: translate(-120%, 0);
}


</style>
