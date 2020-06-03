<template>
  <div class="resources">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart :options="craneStates.options" />
    </data-loader>
    <data-loader :style="{width: '400px', height: '254px', overflow: 'scroll', position: 'absolute', top: '78px', left: '1490px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="[{index: 1, name: '生活服务'}, {index: 2, name: '数据服务'}, {index: 3, name: '游戏'}, {index: 4, name: '电子商务'}, {index: 5, name: '音乐/视频/阅读'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 500, textAlign: 'center', letterSpacing: '1.2px', position: 'absolute', top: '27px', left: '750px'}">
      全省人才资源态势总览
    </div>
    <div ref="talent-index" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '262px', left: '73px'}">
      人才指数综合分析
    </div>
    <div ref="talent-education" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '704px', left: '73px'}">
      人才学历层次
    </div>
    <div ref="talent-industry" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1530px'}">
      人才流动行业排名
    </div>
    <div ref="industry-talent" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '388px', left: '1530px'}">
      行业人才占比
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '704px', left: '1530px'}">
      各行业人才需求
    </div>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '265px', left: '38px'}">
      >>
    </div>
    <div ref="talent-education-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '707px', left: '38px'}">
      >>
    </div>
    <div ref="talent-industry-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1498px'}">
      >>
    </div>
    <div ref="industry-talent-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '391px', left: '1498px'}">
      >>
    </div>
    <div ref="talent-demand-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '707px', left: '1498px'}">
      >>
    </div>
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '79px', left: '104px'}" />
    <div ref="number-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '159px', left: '104px'}" />
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
    <data-loader v-slot="{ results: results }" :style="{width: '460px', height: '330px', position: 'absolute', top: '380px', left: '1455px'}">
      <v-chart :options="{legend: {orient: 'vertical', right: '8%', top: 'middle', icon: 'circle', itemGap: 9, itemWidth: 10, itemHeight: 10, data: ['数据服务', '智能硬件', '人力资源服务', '计算机软件', '游戏', '其他'], textStyle: {color: '#489bbe', fontSize: 12}}, series: {name: '行业人才占比', type: 'pie', left: '-34%', radius: ['24%', '42%'], label: {show: false}, labelLine: {show: false}, data: [{name:'数据服务', value: 66, itemStyle: {color: '#6ad6ff'}}, {name:'智能硬件', value: 55, itemStyle: {color: '#4b9bbe'}}, {name:'人力资源服务', value: 44, itemStyle: {color: '#367290'}}, {name:'计算机软件', value: 33, itemStyle: {color: '#275570'}}, {name:'游戏', value: 22, itemStyle: {color: '#1c4159'}}, {name:'其他', value: 11, itemStyle: {color: '#153349'}}]}, tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="part-production-value" v-slot="{ results: results }" :style="{position: 'absolute', top: '56px', left: '130px'}">
      <digital-roll ref="deal-number-total" titlePosition="left" :content="{title: '地区生产总值', prefix: '￥', digital: 125200}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-number" v-slot="{ results: results }" :style="{position: 'absolute', top: '136px', left: '130px'}">
      <digital-roll ref="talent-number-content" titlePosition="left" :content="{title: '地区生产总值', digital: 5200, suffix: '人'}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-age-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '440px', left: '90px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="bottom" :content="{title: '人才年龄指数', digital: 23}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-education-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '332px', left: '90px'}">
      <digital-roll ref="talent-education-index-content" titlePosition="bottom" :content="{title: '人才学历指数', digital: 23}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-industry-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '440px', left: '290px'}">
      <digital-roll ref="talent-rank-index-content" titlePosition="bottom" :content="{title: '人才行业指数', digital: 23}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-quality-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '548px', left: '90px'}">
      <digital-roll ref="talent-quality-index-content" titlePosition="bottom" :content="{title: '人才素质指数', digital: 23}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-rank-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '332px', left: '290px'}">
      <digital-roll ref="talent-rank-index-content" titlePosition="bottom" :content="{title: '人才职称指数', digital: 23}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-synthesis-index" v-slot="{ results: results }" :style="{position: 'absolute', top: '548px', left: '290px'}">
      <digital-roll ref="talent-quality-index-content" titlePosition="bottom" :content="{title: '人才综合指数', digital: 23}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="ranking_rank" v-slot="{ results: results }" :style="{width: '296px', height: '290px', overflow: 'scroll', position: 'absolute', top: '752px', left: '82px'}">
      <ranking ref="department-ranking-content" :data="[{label: '本科', amount: 78.16}, {label: '硕士', amount: 23.21}, {label: '博士', amount: 18.01}, {label: '高中生', amount: 68.23}, {label: '大专', amount: 47.67}, {label: '初中', amount: 45.11},]" :keys="{label: 'label', value: 'amount', tooltip: 'name'}" :labelStyle="{color: '#4b9bbe', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#6ad6ff', fontSize: '16px', fontFamily: 'Oswald-Regular', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: '#ffffff0D', lineColor: ['#0885b5', '#6ad6ff'], height: '5px', borderRadius: '2.5px'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#367391', name: 'circle-small', size: 14}}" :tooltipOptions="{background: 'rgba(60, 71, 89, 0.9)', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="demand-vertical-bar" v-slot="{ results: results }" :style="{width: '400px', height: '270px', position: 'absolute', top: '762px', left: '1490px'}">
      <v-chart ref="demand-vertical-bar-content" :options="{grid: {top: '12%', right: '1%'}, xAxis: {axisLabel: {rotate: -315, fontSize: 12, fontWeight: 400, color: '#367391'}, axisLine: {show: false}, data: ['电子商务', '广告营销', '分类消息', '社交网络', '信息安全', '互联网金融', '企业服务', '互联网']}, yAxis: {axisLine: {show: 'false'}, axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, splitLine: {show: false}, splitNumber: 5, name: '人', nameTextStyle: {fontSize: 12, fontWeight: 400, color: '#367391'}}, series: {type: 'bar', barWidth: 5, barCategoryGap: '10%', itemStyle: {normal: {color: new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#117ea8'
                      },
                      {
                        offset: 1,
                        color: '#6ad6ff'
                      }], false),}}, data: [120, 200, 150, 80, 70, 110, 130, 102]}, tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}, formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'
import Liuzhou from '../../public/static/fujian.json'

Echarts.registerMap('Liuzhou', Liuzhou);

import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
  VisTable,
  VisSelect,
  DigitalRoll,
  Ranking,
} from '@byzanteam/vis-components'
import {
  Donut,
  VerticalBar,
} from '@byzanteam/graphite'

export const resources = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisTable,
    'v-chart': Echarts,
    VisSelect,
    DigitalRoll,
    Ranking,
    Donut,
    VerticalBar,
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

  methods: {
    demandTooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>紧缺人才：${params[0].data}人`
    },
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%`
    },
  }
}
export default resources
</script>

<style lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}

.resources {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../public/static/images/Bg.png');
}

.table {
  .table__body {
    tr {
      td:first-child {
        text-align: center;
        line-height: 46px;
      }
      td:last-child {
        text-align: left;
        color: #4b9bbe;
        line-height: 46px;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .row-index-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #6ad6ff;
    color: #ffffff;
  }
}
</style>
