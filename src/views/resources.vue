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
            formatter: '{b}<br/>人才数量（人）：{c}'
          },
          visualMap: {
            type:'piecewise',
            pieces: [
              {gt: 1500, label: '1500人及以上'},
              {gt: 1000, lte: 1500, label: '1000-1500人'},
              {gt: 100, lte: 999, label: '100-999人'},
              {gt: 10, lte: 99, label: '10-99人'},
              {gt: 1, lt: 9, label: '1-9人'}
            ],
            orient: 'horizontal',
            inRange: {
              color: ['lightskyblue', 'yellow', 'orangered']
            }
          },
          series: [
            {
              type: 'map',
              mapType: 'Liuzhou',
              label: {
                show: true
              },
              data: [
                {name: '城中区', value: 4},
                {name: '柳东新区', value: 15},
                {name: '柳南区', value: 31},
                {name: '柳北区', value: 69},
                {name: '柳江区', value: 1440},
                {name: '柳城县', value: 4068},
                {name: '鹿寨县', value: 376},
                {name: '融安县', value: 45},
                {name: '融水苗族自治县', value: 55},
                {name: '三江侗族自治县', value: 2},
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
