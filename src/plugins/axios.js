import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults['baseURL'] = 'http://www.pdjxj.com/vis-backend/'

export default {
  install () {
    Vue.use(VueAxios, axios)
  },
}
