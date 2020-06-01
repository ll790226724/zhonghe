<template>
  <div class="talents_competitiveness">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '833px'}">
      省域人才综合竞争力
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <data-loader :style="{width: '400px', height: '678px', overflow: 'scroll', position: 'absolute', top: '316px', left: '30px'}">
      <vis-table theme="dark" stripe="" :headers="[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 160, key: 'value', title: '人才质量指标'}]" :data="[{index: 1, name: '四川省', value: 99.8}, {index: 2, name: '重庆市', value: 99.5}, {index: 3, name: '青海省', value: 99.1}, {index: 4, name: '浙江省', value: 98.9}, {index: 5, name: '湖南省', value: 98.7}, {index: 6, name: '湖北省', value: 98.4}, {index: 7, name: '甘肃省', value:98.3}, {index: 8, name: '山东省', value:98.1}, {index: 9, name: '江苏省', value:98.0}, {index: 10, name: '江西省', value:97.2}, {index: 11, name: '福建省', value:97.0}, {index: 12, name: '贵州省', value:96.8},{index: 13, name: '陕西省', value:96.5}, {index: 14, name: '山西省', value:94.2}]">
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
import china from '../../public/static/china.json'

import BuiltInMixin from '../mixins/built_in'
Echarts.registerMap('china', china);

import {
  DataLoader,
  VisTable,
} from '@byzanteam/vis-components'

export const talents_competitiveness = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
  },

  data () {
    return {
      craneStates: {
      },
    }
  },
}
export default talents_competitiveness
</script>
<style lang="scss">
  .table {
    thead {
      border: none!important;
      tr {
        th {
          text-align: left !important;
          color: #6ad6ff !important;
          font-size: 14px!important;
          font-weight: 400;
        }
      }
    }
    .table__body {
      tr {
        td:first-child {
          text-align: center!important;
          line-height: 46px;
        }
        td{
          text-align: left !important;
          color: #4b9bbe !important;
          line-height: 46px;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
</style>
