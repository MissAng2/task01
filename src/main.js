import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/mint-ui.css'
import axios from 'axios'
import resource from 'vue-resource'
import $ from 'jquery'

Vue.use(Mint);

Vue.prototype.axios=axios;
Vue.use(resource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
