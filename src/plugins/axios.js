import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults['baseURL'] = 'http://220.160.53.72:8082/'

export default {
  install () {
    Vue.use(VueAxios, axios)
  },
}
