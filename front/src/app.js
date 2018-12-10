
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  render: h => h(App)
});
