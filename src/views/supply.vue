<template>
  <div class="supply">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{width: '701px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '607px'}">
      人才供需专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <data-loader ref="job_select" :style="{position: 'absolute', top: '50px', left: '40px'}">
      <Select :style="{width: '380px'}" v-model="craneStates.currentJob">
        <Option v-for="(item, key) in craneStates.jobs" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
    <date-picker :style="{width: '380px', height: '50px', position: 'absolute', top: '116px', left: '40px'}" v-model="craneStates.year" type="year" placeholder="选择时间" />
    <data-loader ref="departments-loader" :style="{position: 'absolute', top: '125px', left: '929px'}">
      <vis-select ref="departments-select" :options="[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]" v-model="craneStates.department" placeholder="福州" />
    </data-loader>
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart ref="map" :options="{backgroundColor: 'transparent', series: [{type: 'map', mapType: 'Liuzhou', label: {show: true, color: 'white'}, itemStyle: {areaColor: 'rgba(106, 214, 255, .1)', borderColor: '#6ad6ff', borderType: 'solid', borderWidth: 0.5}, emphasis: {label: {color: 'white',fontWeight: 600}, itemStyle: {areaColor: '#6ad6ff'}}}]}" />
    </data-loader>
    <data-loader ref="supply-demand-count" :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '196px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '225px', left: '100px'}" />
    <data-loader ref="supply-demand-count" :style="{position: 'absolute', top: '202px', left: '126px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '企业人才需求数量', digital: 5200}" :options="{separator: ','}" :style="{width: '235px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '305px', left: '40px'}">
      >>
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '302px', left: '74px'}">
      需求岗位排名
    </div>
    <brick-tabs :tabNavs="craneStates.tabNavs" :activeTab="craneStates.tabCurrent" :style="{position: 'absolute', top: '352px', left: '110px'}" v-model="craneStates.tabCurrent" />
    <data-loader v-if="craneStates.tabCurrent === craneStates.tabNavs[0]" :style="{width: '400px', height: '230px', overflow: 'scroll', position: 'absolute', top: '414px', left: '30px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="[{index: 1, name: '广告设计师'}, {index: 2, name: '中级3D建模师'}, {index: 3, name: '产品经理'}, {index: 4, name: '产品助理'}, {index: 5, name: '交互设计师'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader v-if="craneStates.tabCurrent === craneStates.tabNavs[1]" :style="{width: '400px', height: '230px', overflow: 'scroll', position: 'absolute', top: '414px', left: '30px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="[{index: 1, name: '中级3D建模师'}, {index: 2, name: '广告设计师'}, {index: 3, name: '生活服务'}, {index: 4, name: '产品助理'}, {index: 5, name: '交互设计师'}, {index: 6, name: '智能硬件'}, {index: 7, name: '产品经理'}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <div ref="salary-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '717px', left: '40px'}">
      >>
    </div>
    <div ref="salary-title·" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '714px', left: '74px'}">
      人才薪酬分析
    </div>
    <data-loader ref="salary-count" :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '766px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '795px', left: '116px'}" />
    <data-loader ref="salary-count-digital" :style="{position: 'absolute', top: '772px', left: '146px'}">
      <digital-roll titlePosition="left" :content="{title: '岗位平均薪酬', digital: 5200}" :options="{separator: ','}" :style="{width: '199px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="salary-count-line-chart" :style="{width: '400px', height: '200px', position: 'absolute', top: '846px', left: '30px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'axis', formatter: '{b}<br/>平均薪酬（元）：{c}', backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, xAxis: {type: 'category', data: ['2015', '2016', '2017', '2018', '2019', '2020'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '元', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, series: [{type: 'line', data: [3200, 2274, 2348, 3848, 5500, 4900], showSymbol: false, lineStyle: {color: '#6ad6ff', width: 4}}]}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1536px'}">
      重点行业需求排名
    </div>
    <data-loader :style="{width: '400px', height: '221px', overflow: 'scroll', position: 'absolute', top: '84px', left: '1490px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="[{index: 1, name: '数据服务'}, {index: 2, name: '广告营销'}, {index: 3, name: '旅游'}, {index: 4, name: '医疗健康'}, {index: 5, name: '社交网络'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <div ref="talents-demand-change-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '374px', left: '1504px'}">
      >>
    </div>
    <div ref="talents-demand-change-title·" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '371px', left: '1536px'}">
      人才薪酬分析
    </div>
    <data-loader ref="talents-demand-change-count-line-chart" :style="{width: '400px', height: '230px', position: 'absolute', top: '419px', left: '1490px'}">
      <v-chart :options="{backgroundColor: 'transparent', color: ['#6ad6ff', '#367390'], tooltip: {trigger: 'axis', formatter: '{b}<br/>人才供给（人）：{c0}<br />岗位需求（人）：{c1}', backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, legend: {icon: 'circle', right: 10, itemGap: 4, textStyle: {color: '#4b9bbe', fontSize: '14'}}, xAxis: {type: 'category', data: ['2015', '2016', '2017', '2018', '2019', '2020'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供给', data: [200, 24, 238, 30, 50, 40], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '岗位需求', data: [300, 274, 248, 348, 50, 40], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '717px', left: '1504px'}">
      >>
    </div>
    <div ref="degree-analysis-title" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '714px', left: '1536px'}">
      学历职称分析
    </div>
    <brick-tabs :tabNavs="craneStates.chartTabNavs" :activeTab="craneStates.chartTabCurrent" :style="{position: 'absolute', top: '764px', left: '1586px'}" v-model="craneStates.chartTabCurrent" />
    <data-loader v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[0]" :style="{width: '400px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1490px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', right: 80, top: 50, itemGap: 4, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: '14'}}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', left: -120, radius: ['40%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '大学'}, {value: 310, name: '硕士'}, {value: 234, name: '大专'}, {value: 135, name: '高中'}, {value: 1548, name: '初中'}, {value: 1548, name: '博士'}]}]}" />
    </data-loader>
    <data-loader v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[1]" :style="{width: '400px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1490px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', right: 80, top: 50, itemGap: 4, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: '14'}}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', left: -120, radius: ['40%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '大学'}, {value: 30, name: '硕士'}, {value: 834, name: '大专'}, {value: 635, name: '高中'}, {value: 1548, name: '初中'}, {value: 120, name: '博士'}]}]}" />
    </data-loader>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'

import {
  DataLoader,
  VisSelect,
  DigitalRoll,
  BrickTabs,
  VisTable,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
  DatePicker,
} from 'element-ui'

const TAB_NAVS = [{uuid: 1, label: '岗位排名'}, {uuid: 2, label: '岗位薪资排名'}]

const CHART_TAB_NAVS = [{uuid: 1, label: '人才学历'}, {uuid: 2, label: '人才职称'}]

export const supply = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisSelect,
    DigitalRoll,
    BrickTabs,
    VisTable,
    Select,
    Option,
    'v-chart': Echarts,
    DatePicker,
  },

  data () {
    return {
      craneStates: {
        currentJob: '',
        jobs: [{index: 1, name: '高级前端工程师'}, {index: 2, name: 'java工程师'}, {index: 3, name: '用户体验设计师'}, {index: 4, name: '产品经理'}, {index: 5, name: '产品助理'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}],
        tabNavs: TAB_NAVS,
        tabCurrent: TAB_NAVS[0],
        chartTabNavs: CHART_TAB_NAVS,
        chartTabCurrent: CHART_TAB_NAVS[0],
        selectedArea: {}
      },
    }
  },

  mounted() {
    const { chart } = this.$refs.map
    chart.on('click', (params) => {
      chart.dispatchAction({
        type: 'mapSelect',
        dataIndex: params.dataIndex
      })
      debugger
      if(this.craneStates.selectedArea) {
        chart.dispatchAction({
          type: 'mapUnSelect',
          dataIndex: this.craneStates.selectedArea.dataIndex
        })
      }
      if(this.craneStates.selectedArea.dataIndex === params.dataIndex) {
        this.craneStates.selectedArea = {}
      } else {
        this.craneStates.selectedArea = params
      }
    })
  },
}
export default supply
</script>
