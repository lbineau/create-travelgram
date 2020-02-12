import Vue from 'vue'
import App from './App.vue'
import { VFile, VInput } from "vuetensils"

Vue.component("VFile", VFile)
Vue.component("VInput", VInput)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
