<template>
  <div class="index">
    <data-loader :style="{position: 'absolute', top: '0px', left: '0px'}">
      <v-chart :options="craneStates.options" />
    </data-loader>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'
import Liuzhou from '../../public/static/liuzhou_districts.json'

Echarts.registerMap('Liuzhou', Liuzhou);

import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
} from '@byzanteam/vis-components'

export const resources = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    'v-chart': Echarts
  },

  data () {
    return {
      craneStates: {
        options: {
          backgroundColor: 'transparent',
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
          },
          toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
          },
          visualMap: {
            type:'piecewise',
            realtime: false,
            calculable: true,
            inRange: {
              color: ['lightskyblue', 'yellow', 'orangered']
            }
          },
          series: [
            {
              name: '香港18区人口密度',
              type: 'map',
              mapType: 'Liuzhou', // 自定义扩展图表类型
              label: {
                  show: true
              },
              data: [
                {name: '城中区', value: 20057.34},
                {name: '柳东新区', value: 15477.48},
                {name: '柳南区', value: 31686.1},
                {name: '柳北区', value: 6992.6},
                {name: '柳江区', value: 44045.49},
                {name: '柳城县', value: 40689.64},
                {name: '鹿寨县', value: 37659.78},
                {name: '融安县', value: 45180.97},
                {name: '融水苗族自治县', value: 55204.26},
                {name: '三江侗族自治县', value: 21900.9},
              ],
            }
          ]
        }
      },
    }
  },
}
export default resources
</script>

<style lang="scss">
.echarts {
  width: 24rem;
  height: 15rem;
}
</style>
