<template>
  <div class="login">
    <mt-header>
      <router-link slot="left" to="/myinfo">×</router-link>
    </mt-header>
    <div class="title">
      <span>花店标题</span>
    </div>
    <div class="content">
      <p>用户名</p>
      <mt-field v-model="uname" placeholder="请输入手机号" :attr="{maxlength:20}" type="text">
      </mt-field>
      <p>密码</p>
      <mt-field v-model="upwd" placeholder="请输入密码" :attr="{maxlength:20,autocomplete:'off'}" :type="isText?'text':'password'">
        <img src="/img/login/eyeclose.png" @click="look" v-show="!isText" class="eye">
        <img src="/img/login/eyeopen.png" @click="look" v-show="isText" class="eye">
      </mt-field>
      <div class="remember"><input type="checkbox" v-model="remember" id="n"><label for="n">记住密码</label></div>
    </div>
    <mt-button size="large" class="logbtn" @click="getLogin">登录</mt-button>
    <router-link to="/reg" class="goreg">没有账号？去注册</router-link>

  </div>
</template>
<script>
import {mapMutations} from "vuex";
export default {
  data(){
    return{
      uname:"",
      upwd:"",
      isText:false,
      remember:false,
    }
  },
  methods:{
    ...mapMutations(["loginok"]),
    look(){
      this.isText=!this.isText;
    },
    getLogin(){
      let obj={
        uname:this.uname,
        upwd:this.upwd
      }
      this.$indicator.open("加载中");
      this.axios.post("/login",this.qs.stringify(obj)).then(result=>{
        // console.log(result.data);
        if(result.data.code==200){
          if(result.data.result[0].nickname===""){
            result.data.result[0].nickname=`客官${Math.floor(Math.random()*999999)}`
          }
          this.loginok(result.data.result[0]);
          if(this.remember){
            localStorage.setItem("user",JSON.stringify(result.data.result[0]));
          }else{
            sessionStorage.setItem("user",JSON.stringify(result.data.result[0]));
          }
          this.$toast("登录成功");
          this.$router.push("/myinfo");
        }else{
          this.$toast("用户名或密码不正确")
        } 
        this.$indicator.close();
      })
    }
  }
}
</script>
<style>
  .login{
    margin:0 5%;
    padding:15px 0;
    text-align: center;
    width:90%;
  }
  .login .eye{
      width:24px;
      height:24px;
      padding:0 20px;
  }
  .login .mint-cell,.login .mint-header,input{
    background-color:transparent;
  }
  .login .mint-header{
    font-size:40px;
    color:#aaa;
    font-family:"quxiao";
    font-weight: 300;
  }

  .login .title{
    font-size:35px;
    color:rgb(255, 155, 77);
    font-family: "title";
    padding:30px 0 60px;
  }
  .login .content p{
    margin:12px;
    text-align: left;
  }
  .login .content .mint-cell-wrapper{
    background-image:none;
    border-bottom: 1px solid #e8e8e8;
    margin:0 0 10px;
    font-size:16px;
  }
  .login .content img{
    width:25px;
    height:25px;
  }
  .login .remember{
    margin-top:10px;
    margin-right:10px;
    text-align: right;
  }
  .login .remember label{
    margin-left:5px;
  }
  
  .login .logbtn{
    margin-top:50px ;
    width:100%;
    background-color:rgb(255, 155, 77);
    color:white;
    border-radius:20.5px;
  }

  .login .goreg{
    color:#8e8e8e;
    text-align: right;
    margin-right:8px;
    margin-top:35px;
    display:block;
  }
</style>