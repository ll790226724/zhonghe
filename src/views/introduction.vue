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
      人才引进专题
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
    <div ref="activity-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '218px', left: '30px'}" />
    <div ref="high-level-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '693px', left: '30px'}" />
    <data-loader ref="departments-loader" v-slot="{ results: results }" :style="{position: 'absolute', top: '125px', left: '929px'}">
      <vis-select ref="departments-select" :options="[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]" v-model="craneStates.department" placeholder="福州" />
    </data-loader>
    <data-loader ref="activity-number-bar" v-slot="{ results: results }" :style="{width: '400px', height: '250px', position: 'absolute', top: '783px', left: '30px'}">
      <v-chart ref="activity-number-bar-content" :options="{xAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, axisLine: {show: false}, data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]}, yAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, splitLine: {show: false}, splitNumber: 5, name: '件', nameTextStyle: {fontSize: 12, fontWeight: 400, color: '#367391'}}, series: {type: 'bar', barWidth: 5, barCategoryGap: '10%', itemStyle: {normal: {color: new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#117ea8'
                      },
                      {
                        offset: 1,
                        color: '#6ad6ff'
                      }], false),}}, data: [120, 200, 150, 80, 70, 110, 130]}}" />
    </data-loader>
    <data-loader ref="high-level-talent-bar" v-slot="{ results: results }" :style="{width: '400px', height: '250px', position: 'absolute', top: '308px', left: '30px'}">
      <v-chart ref="high-level-talent-content" :options="{xAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, axisLine: {show: false}, data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]}, yAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, splitLine: {show: false}, splitNumber: 5, name: '件', nameTextStyle: {fontSize: 12, fontWeight: 400, color: '#367391'}}, series: {type: 'bar', barWidth: 5, barCategoryGap: '10%', itemStyle: {normal: {color: new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#117ea8'
                      },
                      {
                        offset: 1,
                        color: '#6ad6ff'
                      }], false),}}, data: [120, 200, 150, 80, 70, 110, 130]}}" />
    </data-loader>
    <data-loader ref="introduce-place" v-slot="{ results: results }" :style="{width: '400px', height: '218px', position: 'absolute', top: '94px', left: '1490px'}">
      <v-chart ref="introduce-place-content" :options="{legend: {orient: 'vertical', right: '8%', top: 'middle', icon: 'circle', data: ['猎头', '熟人推荐', '主动接触搜寻', '政府政策', '人才落户', '其他'], textStyle: {color: '#489bbe', fontSize: 14}}, series: {name: '人才引进渠道', type: 'pie', left: '-34%', radius: ['0%', '55%'], label: {show: false}, labelLine: {show: false}, data: [{name:'猎头', value: 66, itemStyle: {color: '#6ad6ff'}}, {name:'熟人推荐', value: 55, itemStyle: {color: '#4b9bbe'}}, {name:'主动接触搜寻', value: 44, itemStyle: {color: '#367290'}}, {name:'政府政策', value: 33, itemStyle: {color: '#275570'}}, {name:'人才落户', value: 22, itemStyle: {color: '#1c4159'}}, {name:'其他', value: 11, itemStyle: {color: '#153349'}}]}}" />
    </data-loader>
    <data-loader ref="talent-rank" v-slot="{ results: results }" :style="{width: '400px', height: '218px', position: 'absolute', top: '414px', left: '1490px'}">
      <v-chart ref="talent-rank" :options="{legend: {orient: 'vertical', right: '8%', top: 'middle', icon: 'circle', data: ['学术型人才', '工程型人才', '技术型人才', '初级人才', '中级人才', '高级人才'], textStyle: {color: '#489bbe', fontSize: 14}}, series: {name: '人才引进渠道', type: 'pie', left: '-34%', radius: ['30%', '55%'], label: {show: false}, labelLine: {show: false}, data: [{name:'学术型人才', value: 66, itemStyle: {color: '#6ad6ff'}}, {name:'工程型人才', value: 55, itemStyle: {color: '#4b9bbe'}}, {name:'技术型人才', value: 44, itemStyle: {color: '#367290'}}, {name:'初级人才', value: 33, itemStyle: {color: '#275570'}}, {name:'中级人才', value: 22, itemStyle: {color: '#1c4159'}}, {name:'高级人才', value: 11, itemStyle: {color: '#153349'}}]}}" />
    </data-loader>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
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
      Echarts: Echarts,
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
