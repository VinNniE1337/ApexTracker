import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueToasted from 'vue-toaster';
Vue.config.productionTip = false

//Load Toast
Vue.use(VueToasted);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
