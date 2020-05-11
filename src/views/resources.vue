<template>
  <div class="resources">
    <data-loader :style="{width: '900px', height: '698px', position: 'absolute', top: '261px', left: '510px'}">
      <v-chart :options="craneStates.options" />
    </data-loader>
    <data-loader :style="{width: '400px', height: '254px', overflow: 'scroll', position: 'absolute', top: '78px', left: '1490px'}">
      <vis-table :withHeader="false" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="[{index: 1, name: '生活服务'}, {width: 280,index: 2, name: '数据服务'}, {index: 3, name: '游戏'}, {index: 4, name: '电子商务'}, {index: 5, name: '音乐/视频/阅读'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
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
  VisTable,
} from '@byzanteam/vis-components'

export const resources = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
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
            type: 'piecewise',
            pieces: [
              {gt: 1500, label: '1500人及以上'},
              {gt: 1000, lte: 1500, label: '1000-1500人'},
              {gt: 100, lte: 999, label: '100-999人'},
              {gt: 10, lte: 99, label: '10-99人'},
              {gt: 1, lt: 9, label: '1-9人'}
            ],
            orient: 'horizontal',
            textStyle: {
              color: 'white',
              fontSize: '14px'
            },
            itemWidth: 18,
            itemGap: 8,
            textGap: 8,
            inRange: {
              color: ['rgba(106, 214, 255, .1)', 'rgba(106, 214, 255, .4)', 'rgba(106, 214, 255, .5)', 'rgba(106, 214, 255, .6)', 'rgba(106, 214, 255, .7)']
            }
          },
          series: [
            {
              type: 'map',
              mapType: 'Liuzhou',
              label: {show: true},
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
                {name: '三江侗族自治县', value: 2}
              ],
              label: {
                show: true,
                color: 'white',
              },
              itemStyle: {
                borderColor: '#6ad6ff',
                borderType: 'dashed'
              },
              emphasis: {
                label: {
                  color: 'white',
                  fontWeight: 600,
                },
                itemStyle: {
                  areaColor: '#6ad6ff'
                }
              }
            }
          ]
        },
      },
    }
  },
}
export default resources
</script>

<style lang="scss">
.resources {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../public/images/Bg.png');
}
</style>
