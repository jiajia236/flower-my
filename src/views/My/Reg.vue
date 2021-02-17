<template>
  <div class="reg">
    <mt-header>
      <router-link slot="left" to="/myinfo">×</router-link>
    </mt-header>
    <div class="title">
      <span>花店标题</span>
    </div>
    <div class="content">
      <p>用户名</p>
      <mt-field @blur.native.capture="checkuname();search()" v-model="uname" placeholder="请输入您的手机号" :attr="{maxlength:11}" type="text" :state="unamestate">
      </mt-field>
       <p>密码</p>
      <mt-field @blur.native.capture="checkupwd" :state="upwdstate" v-model="upwd" placeholder="请输入密码" :attr="{maxlength:20,autocomplete:'off'}" type="password">
      </mt-field>
      <p>确认密码</p>
      <mt-field @blur.native.capture="checkupwdsure" :state="upwdsurestate" v-model="upwdsure" placeholder="请确认密码" :attr="{maxlength:20,autocomplete:'off'}" type="password">
      </mt-field>
    </div>
    <mt-button size="large" class="regbtn" @click="getReg">快速注册</mt-button>
    <router-link to="/login" class="golog">已有账号？去登录</router-link>

  </div>
</template>
<script>
export default {
  data(){
    return{
      uname:"",
      upwd:"",
      upwdsure:"",
      unamestate:"",
      upwdstate:"",
      upwdsurestate:"",
    }
  },
  methods:{
    search(){
      this.axios.get("/search",{
        params:{
          uname:this.uname
        }
      }).then(result=>{
        // console.log(result.data);
        if(result.data.code==201){
          this.unamestate="error";
          this.$toast({
            message:"手机号已注册",
            duration:"500"
          });
        }
      });
    },
    getReg(){
      if(this.unamestate==="success"&&this.upwdstate==="success" && this.upwdsurestate==="success"){
        let obj={
          uname:this.uname,
          upwd:this.upwd,
        }
        this.$indicator.open({
          text:"加载中",
          spinnerType:"fading-circle"
        })
        this.axios.post("/reg",this.qs.stringify(obj)).then(result=>{
          // console.log(result);
          if(result.data.code==200){
            this.$messagebox.alert("注册成功").then(val=>{
             this.$router.push("/login");
            }).catch(err=>{

            })
          }else{
            this.$messagebox.alert("注册失败，请稍后再试")
          }
          this.$indicator.close();
        });
      }else{
        this.$messagebox.alert("注册失败，请检查格式是否正确");
      }
    },
    checkuname(){
      let reg=/1[3-9][0-9]{9}/;
      if(reg.test(this.uname)){
        this.unamestate="success";
      }else{
        this.unamestate="error";
        this.$toast({
          message:"手机号格式不正确",
          duration:"500"
        });
      }
    },
    checkupwd(){
      if(this.unamestate!="success"){
        this.upwdstate="";
      }else{
        let reg=/\w{6,20}/;
        if(reg.test(this.upwd)){
          this.upwdstate="success";
        }else{
          this.upwdstate="error";
          this.$toast({
            message:"密码格式不正确",
            duration:"500"
          });

        } 
      }
    },
    checkupwdsure(){
      if(this.upwdstate!=="success"){

      }else{
        if(this.upwd===this.upwdsure){
          this.upwdsurestate="success";
        }else{
          this.upwdsurestate="error";
          this.$toast({
            message:"两次密码不一致",
            duration:"500"
          });
        }
      }
    },

  },
  watch:{
    uname(){
      this.checkuname();
      this.search();
    },
    upwd(){
      this.checkupwd();
    },
    upwdsure(){
      this.checkupwdsure();
    },
  }
}
</script>
<style>
  .reg{
    margin:0 5%;
    padding:15px 0;
    text-align: center;
    width:90%;
  }
  .reg .mint-cell,.reg .mint-header,input{
    background-color:transparent;
  }
  .reg .mint-header{
    font-size:40px;
    color:#aaa;
    font-family:"quxiao";
    font-weight: 300;
  }

  .reg .title{
    font-size:35px;
    color:rgb(255, 155, 77);
    font-family: "title";
    padding:30px 0 30px;
  }
  .reg .content p{
    margin:12px;
    text-align: left;
  }
  .reg .content .mint-cell-wrapper{
    background-image:none;
    border-bottom: 1px solid #e8e8e8;
    margin:0 0 10px;
    font-size:16px;
  }
  .reg .content img{
    width:25px;
    height:25px;

  }
  .reg .regbtn{
    margin-top:30px ;
    width:100%;
    background-color:rgb(255, 155, 77);
    color:white;
    border-radius:20.5px;
  }

  .reg .golog{
    color:#8e8e8e;
    text-align: right;
    margin-right:8px;
    margin-top:35px;
    display:block;
  }

  .reg .mintui-field-error,.reg .mintui-field-success{
    margin-right:10px;
  }
</style>