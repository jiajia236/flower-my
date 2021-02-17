import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUi from 'mint-ui'
import qs from 'qs'
import moment from 'moment'
Vue.prototype.qs=qs;
Vue.prototype.moment=moment

import 'mint-ui/lib/style.min.css'
Vue.use(MintUi);

import axios from 'axios'
axios.defaults.baseURL="/api"
Vue.prototype.axios=axios;


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
