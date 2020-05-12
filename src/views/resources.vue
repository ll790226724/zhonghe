<template>
  <div class="index">
    <data-loader :style="{position: 'absolute', top: '0px', left: '0px'}">
      <v-chart :options="craneStates.options" />
    </data-loader>
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '35px', left: '750px'}">
      全省人力资源态势总览
    </div>
    <div ref="talent-index" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '262px', left: '73px'}">
      人才指数综合分析
    </div>
    <div ref="talent-education" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '704px', left: '73px'}">
      人才学历层次
    </div>
    <div ref="talent-industry" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '46px', left: '1530px'}">
      人才流动行业排名
    </div>
    <div ref="industry-talent" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '388px', left: '1530px'}">
      行业人才占比
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '704px', left: '1530px'}">
      各行业人才需求
    </div>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '265px', left: '30px'}">
        >>
    </div>
    <div ref="talent-education-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '707px', left: '30px'}">
        >>
    </div>
    <div ref="talent-industry-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1490px'}">
        >>
    </div>
    <div ref="industry-talent-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '391px', left: '1490px'}">
        >>
    </div>
    <div ref="talent-demand-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '707px', left: '1490px'}">
        >>
    </div>
    <div ref="value-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '79px', left: '104px'}" />
    <div ref="number-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '159px', left: '104px'}" />
    <div ref="education-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '364px', left: '64px'}" />
    <div ref="rank-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '364px', left: '264px'}" />
    <div ref="age-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '472px', left: '64px'}" />
    <div ref="industry-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '472px', left: '264px'}" />
    <div ref="quality-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '580px', left: '64px'}" />
    <div ref="synthesis-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#367391', borderStyle: 'solid', position: 'absolute', top: '580px', left: '264px'}" />
    <data-loader ref="part-production-value" v-slot="{ results: results }" :style="{width: '194px', height: '44px', position: 'absolute', top: '56px', left: '130px'}">
      <digital-roll ref="deal-number-total" titlePosition="left" :content="{title: '地区生产总值', prefix: '￥', digital: 23}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="talent-number" v-slot="{ results: results }" :style="{width: '194px', height: '44px', position: 'absolute', top: '136px', left: '130px'}">
      <digital-roll ref="talent-number-content" titlePosition="left" :content="{title: '地区生产总值', digital: 23, suffix: '人'}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="talent-age-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '440px', left: '90px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="bottom" :content="{title: '人才年龄指数', digital: 23}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="talent-education-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '332px', left: '90px'}">
      <digital-roll ref="talent-education-index-content" titlePosition="bottom" :content="{title: '人才学历指数', digital: 23}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="talent-industry-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '440px', left: '290px'}">
      <digital-roll ref="talent-rank-index-content" titlePosition="bottom" :content="{title: '人才行业指数', digital: 23}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="talent-quality-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '548px', left: '90px'}">
      <digital-roll ref="talent-quality-index-content" titlePosition="bottom" :content="{title: '人才素质指数', digital: 23}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="talent-rank-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '332px', left: '290px'}">
      <digital-roll ref="talent-rank-index-content" titlePosition="bottom" :content="{title: '人才职称指数', digital: 23}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="talent-synthesis-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '548px', left: '290px'}">
      <digital-roll ref="talent-quality-index-content" titlePosition="bottom" :content="{title: '人才综合指数', digital: 23}" :options="{separator: ''}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '0.8'}" />
    </data-loader>
    <data-loader ref="ranking_rank" v-slot="{ results: results }" :style="{width: '296px', height: '290px', padding: '8px', overflow: 'scroll', position: 'absolute', top: '752px', left: '82px'}">
      <ranking ref="department-ranking-content" :data="[{label: '本科', amount: 78}, {label: '硕士', amount: 23}, {label: '博士', amount: 18}, {label: '高中生', amount: 68}, {label: '大专', amount: 47}, {label: '初中', amount: 45},]" :keys="{label: 'label', value: 'amount', tooltip: 'name'}" :labelStyle="{color: '#4b9bbe', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#6ad6ff', fontSize: '16px', fontFamily: 'Oswald-Regular', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: '#ffffff0D', lineColor: ['#0885b5', '#6ad6ff'], height: '5px', borderRadius: '2.5px'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#367391', name: 'circle-small', size: 14}}" :tooltipOptions="{background: 'rgba(60, 71, 89, 0.9)', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="demand-vertical-bar" v-slot="{ results: results }" :style="{width: '400px', height: '270px', position: 'absolute', top: '752px', left: '1490px'}">
      <vertical-bar ref="demand-vertical-bar-content" labelKey="label" valueKey="[数量(件)]" :data="[{label: '电子商务', '[数量(件)]': 78}, {label: '广告营销', '[数量(件)]': 123}, {label: '分类消息', '[数量(件)]': 198}, {label: '社交网络', '[数量(件)]': 27}, {label: '信息安全', '[数量(件)]': 267},{label: '互联网金融', '[数量(件)]': 87}, {label: '企业服务', '[数量(件)]': 67}, {label: '互联网', '[数量(件)]': 27},]" :style="{background: 'transparent'}" :mainAxis="{labelStyle: {rotate: 315, size: 12, fill: '#367391'}, lineStyle: {stroke: 'transparent'}, range: {count: '5'}}" :crossAxis="{labelStyle: {rotate: 315, size: 12, fill: '#367391'}, lineStyle: {stroke: 'transparent'}, range: {count: 5}, unit: {content: '件', fill: '#367391'}}" :rotate="180" :series="[['#6ad6ff', '#117ea8']]" :gap="{outer: '4.5'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#367391', name: 'circle-small', size: 14}}" :tooltipOptions="{background: 'rgba(60, 71, 89, 0.9)', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
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
  DigitalRoll,
  Ranking,
} from '@byzanteam/vis-components'
import {
  VerticalBar,
} from '@byzanteam/graphite'

export const resources = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    'v-chart': Echarts,
    DigitalRoll,
    Ranking,
    VerticalBar,
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
