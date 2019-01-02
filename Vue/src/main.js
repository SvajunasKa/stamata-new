import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto);
new Vue({
  el: '#app',
  render: h => h(App)
})
