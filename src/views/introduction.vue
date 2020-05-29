<template>
  <div class="introduction">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart :options="craneStates.options" />
    </data-loader>
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 500, textAlign: 'center', letterSpacing: '1.2px', position: 'absolute', top: '27px', left: '750px'}">
      全省人才资源态势总览
    </div>
    <div ref="activity-number" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '155px', left: '74px'}">
      引才活动数量统计
    </div>
    <div ref="high-level-talent" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '631px', left: '74px'}">
      高层次人才引进统计
    </div>
    <div ref="introduce-place" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1536px'}">
      引进渠道分析
    </div>
    <div ref="talent-rank" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '366px', left: '1536px'}">
      引进人才职称分布
    </div>
    <div ref="talent-education" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '691px', left: '1536px'}">
      引进人才学历分布
    </div>
    <div ref="activity-number-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '155px', left: '40px'}">
      >>
    </div>
    <div ref="high-level-talent-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '634px', left: '40px'}">
      >>
    </div>
    <div ref="introduce-place-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-rank-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '369px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-education-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '694px', left: '1504px'}">
      >>
    </div>
    <div ref="activity-number-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '247px', left: '128px'}" />
    <div ref="high-level-talent-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '722px', left: '104px'}" />
    <div ref="education-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '364px', left: '64px'}" />
    <div ref="rank-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '364px', left: '264px'}" />
    <div ref="age-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '472px', left: '64px'}" />
    <div ref="industry-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '472px', left: '264px'}" />
    <div ref="quality-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '580px', left: '64px'}" />
    <div ref="synthesis-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '580px', left: '264px'}" />
    <div ref="age-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '324px', left: '40px'}" />
    <div ref="education-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '324px', left: '240px'}" />
    <div ref="industry-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '432px', left: '40px'}" />
    <div ref="number-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '432px', left: '240px'}" />
    <div ref="quality-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '540px', left: '40px'}" />
    <div ref="synthesis-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '540px', left: '240px'}" />
    <div ref="production-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '50px', left: '30px'}" />
    <div ref="production-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '130px', left: '30px'}" />
    <data-loader ref="departments-loader" v-slot="{ results: results }" :style="{position: 'absolute', top: '125px', left: '929px'}">
      <vis-select ref="departments-select" :options="[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]" v-model="craneStates.department" placeholder="福州" />
    </data-loader>
    <data-loader ref="activity-number-bar" v-slot="{ results: results }" :style="{width: '400px', height: '270px', position: 'absolute', top: '762px', left: '1490px'}">
      <v-chart ref="activity-number-bar-content" :options="{xAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, axisLine: {show: 'false'}}, yAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, splitNumber: '5', name: '件', nameTextStyle: {fontSize: 12, fontWeight: 400, color: '#367391'}}, series: {type: 'bar', barCategoryGap: '10%', itemStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#6ad6ff'
                      },
                      {
                        offset: 1,
                        color: '#117ea8'
                      }], false),}}, data: [120, 200, 150, 80, 70, 110, 130]}}" />
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
  VisSelect,
} from '@byzanteam/vis-components'

export const introduction = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisSelect,
    'v-chart': Echarts,
  },

  data () {
    return {
      craneStates: {
        options: {
          backgroundColor: 'transparent',
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>人才数量（人）：{c}',
            backgroundColor: '#566374f0',
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
            bottom: '6%',
            left: '26%',
            textStyle: {
              color: '#ffffff',
              fontSize: 14
            },
            itemWidth: 18,
            itemGap: 10,
            textGap: 8,
            inRange: {
              color: ['rgba(106, 214, 255, .1)', 'rgba(106, 214, 255, .4)', 'rgba(106, 214, 255, .5)', 'rgba(106, 214, 255, .6)', 'rgba(106, 214, 255, .7)']
            }
          },
          series: [
            {
              type: 'map',
              mapType: 'Liuzhou',
              data: [
                {name: '鼓楼区', value: 4},
                {name: '台江区', value: 15},
                {name: '仓山区', value: 31},
                {name: '马尾区', value: 69},
                {name: '晋安区', value: 1440},
                {name: '长乐区', value: 4068},
                {name: '闽侯县', value: 376},
                {name: '连江县', value: 45},
                {name: '罗源县', value: 55},
                {name: '闽清县', value: 2},
                {name: '永泰县', value: 677},
                {name: '平潭县', value: 677},
                {name: '福清市', value: 677},
              ],
              label: {
                show: true,
                color: 'white',
              },
              itemStyle: {
                borderColor: '#6ad6ff',
                borderType: 'solid',
                borderWidth: 0.5
              },
              emphasis: {
                label: {
                  color: 'white',
                  fontWeight: 600,
                },
                itemStyle: {
                  areaColor: '#6ad6ff'
                }
              },
            }
          ]
        },
      },
    }
  },
}
export default introduction
</script>
