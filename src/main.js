import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VueMoment from 'vue-moment'
import { store } from '@/stores'
import VueSimpleAlert from "vue-simple-alert";


Vue.config.productionTip = false

Vue.use(VueSimpleAlert);
Vue.use(VueMoment);
require('dotenv').config()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
