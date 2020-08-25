import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vue from "vue";
import firebase from "firebase/app";
createApp(App).use(store).use(router).mount('#app')


Vue.config.productionTip = false;



window.firebase = firebase;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
