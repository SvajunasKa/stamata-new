import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import vueScrollto from 'vue-scrollto'
import Vuelidate from 'vuelidate'

Vue.use(vueScrollto);
Vue.use(Vuelidate);
new Vue({
  el: '#app',
  render: h => h(App)
});
