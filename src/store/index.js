import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:sessionStorage.getItem("user") || localStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")) || JSON.parse(localStorage.getItem("user")):{},

    isLogin:sessionStorage.getItem("user") || localStorage.getItem("user")?1:0
  },
  mutations: {
    loginok(state,user){
      state.user=user;
      state.isLogin=1;
    },
    upok(state,user){
      state.user=user;
    },
    logout(state){
      state.user={};
      state.isLogin=0;
    }
  },
  actions: {
  },
  modules: {
  }
})
