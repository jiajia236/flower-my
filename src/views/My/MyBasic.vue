<template>
  <div class="mybasic">
    <mt-header class="myheader" title="个人资料">
      <!-- <router-link to="/myinfo" slot="left"><mt-button icon="back"></mt-button></router-link> -->
      <div slot="right" @click="save">保存</div>
    </mt-header>
    <div class="avatar">
      <img :src="avatar" @click="showc"><br>
      <p @click="showc">点击修改头像</p>
    </div>
    <mt-field label="昵称" placeholder="请设置您的昵称" v-model="nickname"></mt-field>
    <mt-field label="用户名" v-model="uname" readonly disableClear></mt-field>
    <mt-cell title="性别">
      <div class="man">
        <input type="radio" name="sex" value="man" v-model="sex" id="n1"><label for="n1">男</label>
      </div>
      <input type="radio" name="sex" value="woman"  id="n2" v-model="sex"><label for="n2">女</label>
    </mt-cell>
    <mt-field label="生日" placeholder="请选择" type="date" v-model="birthday" disableClear>
    </mt-field>
    <mt-actionsheet
      :actions="actions"
      v-model="show">
    </mt-actionsheet>
    
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data(){
    return{
      nickname:'',
      uname:"",
      sex:"man",
      birthday:"",
      avatar:"",
      show:false,
      actions:[{
        name:"拍照"
      },{
        name:"从相册选取"
      }]
    }
  },
  methods:{
    ...mapMutations(["upok"]),
    showc(){
      this.show=true;
    },
    save(){
      let bir="";
      if(this.birthday===""){

      }else{
        bir=new Date(this.birthday).getTime();
        console.log(bir);
      }

      if(this.nickname===""){
        this.$toast({
          message:"昵称不能为空",
          duration:"2000"
        });
      }else{
        let gender=0;
        if(this.sex==="man"){
          gender="1";
        }else{
          gender="0";
        }
      this.$indicator.open("加载中");
      let obj={
        nickname:this.nickname,
        sex:gender,
        birthday:bir,
        uname:this.user.uname,
        avatar:this.avatar
      }
      this.axios.post("/update",this.qs.stringify(obj)).then(result=>{
        console.log(result.data.code);
        if(result.data.code==200){
          this.$toast("保存成功");
          this.$router.push("/myinfo");
          
          if(sessionStorage.getItem("user")){
            sessionStorage.setItem("user",JSON.stringify(obj))
          }else{
            localStorage.setItem("user",JSON.stringify(obj));
          }
          this.upok(obj);
        }else{
          this.$toast("保存失败，请稍后再试");
        }
        this.$indicator.close();
      })
      }
    }
  },
  computed:{
    ...mapState(["user"])
  },
  mounted(){
    this.uname=this.user.uname;
    this.nickname=this.user.nickname;
    this.sex=this.user.sex==="1"?"man":"woman";
    this.birthday=this.moment(Number(this.user.birthday)).format("Y-MM-DD");
    this.avatar=this.user.avatar;
    console.log(this.birthday);
  },
  watch:{
  
  }
}
</script>
<style>
  .mybasic{
    background-color: #fff;
    width:100%;
  }
  .mybasic .header{
    background-color: #fff;
    border-bottom:1px solid #e8e8e8;
    color:#000;
    font-family: "黑体";
    font-weight: bolder;
    
  }
  .mybasic .header h1{
    font-size:18px;
  }

  .mybasic .avatar{
    text-align: center;
    margin:25px 0;
  }
  .mybasic .avatar p{
    font-size:13px;
    line-height:30px;
  }
  .mybasic .mint-cell-text{
    font-weight: bolder;
    line-height:40px;
  }
  .mybasic .mint-cell-title {
    flex: 0.42;
  }
  .mybasic .man{
    margin-right:40px;
  }
</style>