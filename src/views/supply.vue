<template>
  <div class="supply">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{width: '701px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '607px'}">
      人才供需专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <data-loader ref="job_select" v-slot="{ results: results }" url="/v1/components/01b74ddd-39de-493f-84ab-9d87fcf23fee/data?offset=10" method="get" :data="[['']]" :style="{position: 'absolute', top: '50px', left: '40px'}">
      <Select class="departments-select" :style="{width: '380px'}" v-model="craneStates.currentJob">
        <Option v-for="(item, key) in results.map((item, index) => ({index: index, name: item[0]}))" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
    <data-loader ref="job_select" @requestDone="(exports)=>[setState('dateRange', exports.results.map((item) => (Number(item[0]))))]" url="/v1/components/02b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]" :style="{position: 'absolute', top: '116px', left: '40px'}">
      <date-picker v-model="craneStates.year" :style="{width: '380px', height: '50px'}" :options="{disabledDate: (time) => {return !craneStates.dateRange.includes(time.getFullYear())}}" type="year" class="supply-datepicker" placeholder="选择时间" />
    </data-loader>
    <data-loader :style="{position: 'absolute', top: '125px', left: '876px'}">
      <vis-select ref="departments-select" :options="[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]" v-model="craneStates.department" placeholder="福州" />
    </data-loader>
    <data-loader :style="{position: 'absolute', top: '125px', left: '979px'}">
      <vis-select ref="departments-select" :options="[{label: '龙泉驿区', uuid: '0'}, {label: '锦江区', uuid: '1'}, {label: '青羊区', uuid: '2'}, {label: '成华区', uuid: '3'}, {label: '双流区', uuid: '4'}, {label: '高新区', uuid: '5'},]" v-model="craneStates.department" placeholder="区县" />
    </data-loader>
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart ref="map" :options="{backgroundColor: 'transparent', series: [{type: 'map', mapType: 'fujian', label: {show: true, fontSize: 14, color: 'white'}, itemStyle: {areaColor: 'rgba(106, 214, 255, .05)', borderColor: '#6ad6ff', borderType: 'solid', borderWidth: 0.5}, emphasis: {label: {color: 'white',fontWeight: 600}, itemStyle: {areaColor: '#4B9BBE'}}}]}" />
    </data-loader>
    <div ref="supply-demand-count" :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '196px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '225px', left: '100px'}" />
    <data-loader ref="supply-demand-count" v-slot="{ results: results }" :url="`/v1/components/03b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob}&year=${generateYear}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '202px', left: '126px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '企业人才需求数量', digital: results[0][0], suffix: '人'}" :options="{separator: ','}" :style="{height: '39px'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '305px', left: '40px'}">
      >>
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '302px', left: '74px'}">
      需求岗位排名
    </div>
    <brick-tabs :tabNavs="craneStates.tabNavs" :activeTab="craneStates.tabCurrent" :style="{position: 'absolute', top: '352px', left: '110px'}" v-model="craneStates.tabCurrent" />
    <data-loader v-slot="{ results: results }" v-if="craneStates.tabCurrent === craneStates.tabNavs[0]" :url="`/v1/components/04b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob}`" method="get" :data="[['']]" :style="{width: '400px', height: '230px', overflow: 'scroll', position: 'absolute', top: '414px', left: '30px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="results.map((item, index) => ({index: index + 1, name: item[0]}))">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader v-slot="{ results: results }" v-if="craneStates.tabCurrent === craneStates.tabNavs[1]" :url="`/v1/components/05b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob}`" method="get" :data="[['']]" :style="{width: '400px', height: '230px', overflow: 'scroll', position: 'absolute', top: '414px', left: '30px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="results.map((item, index) => ({index: index + 1, salary: item[0], name: item[1]}))">
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
    <data-loader ref="salary-count-digital" v-slot="{ results: results }" :url="`/v1/components/06b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '772px', left: '146px'}">
      <digital-roll titlePosition="left" :content="{title: '岗位平均薪酬', digital: results[0][0], prefix: '￥'}" :options="{separator: ','}" :style="{width: '210px', height: '39px'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="salary-count-line-chart" v-slot="{ results: results }" :url="`/v1/components/07b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob}`" method="get" :data="[[0]]" :style="{width: '400px', height: '200px', position: 'absolute', top: '846px', left: '30px'}">
      <v-chart :options="{color: ['#6ad6ff'], grid: {top: 30, left: 52, right: 10, bottom: 30}, backgroundColor: 'transparent', tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, formatter: salaryTooltipFormatterFunc, backgroundColor: '#566374f0'}, xAxis: {type: 'category', data: results.map(item => (item[1])), axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '元', splitNumber: '4', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center', padding: [0, 0, 0, 3]}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center'}, splitLine: {show: false}}, series: [{type: 'line', data: results.map(item => (item[0])), showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1536px'}">
      重点行业需求排名
    </div>
    <data-loader v-slot="{ results: results }" url="/v1/components/08b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]" :style="{width: '400px', height: '221px', overflow: 'scroll', position: 'absolute', top: '84px', left: '1490px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="results.map((item, index) => ({index: index + 1, name: item[0]}))">
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
      人才供需变化
    </div>
    <data-loader ref="talents-demand-change-count-line-chart" v-slot="{ results: results }" url="/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[[0]]" :style="{width: '400px', height: '230px', position: 'absolute', top: '419px', left: '1490px'}">
      <v-chart :options="{grid: {left: 52, right: -10, bottom: 30}, backgroundColor: 'transparent', color: ['#6ad6ff', '#367390'], tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {icon: 'circle', itemWidth: 8, itemHeight: 8, right: 0, itemGap: 14, textStyle: {color: '#4b9bbe', fontSize: '14'}, inactiveColor: '#1C4159'}, xAxis: {type: 'category', data: results.map(item => (item[1])), axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center', padding: [0, 5, 0, 0]}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center'}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供给', data: results.map(item => (item[2])), showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '岗位需求', data: results.map(item => (item[0])), showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '717px', left: '1504px'}">
      >>
    </div>
    <div ref="degree-analysis-title" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '714px', left: '1536px'}">
      学历职称分析
    </div>
    <brick-tabs :tabNavs="craneStates.chartTabNavs" :activeTab="craneStates.chartTabCurrent" :style="{position: 'absolute', top: '764px', left: '1586px'}" v-model="craneStates.chartTabCurrent" />
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[0]" :url="`/v1/components/10b74ddd-39de-493f-84ab-9d87fcf23fee/data`" method="get" :data="[[0]]" :style="{width: '400px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1490px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, right: 75, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results.map(item => ({value: item [0], name: item[1]}))}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[1]" :url="`/v1/components/11b74ddd-39de-493f-84ab-9d87fcf23fee/data`" method="get" :data="[[0]]" :style="{width: '400px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1490px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, right: 75, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results.map(item => ({value: item [0], name: item[1]}))}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
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
} from 'iview'
import {
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
    DatePicker,
    'v-chart': Echarts,
  },

  data () {
    return {
      craneStates: {
        currentJob: '',
        year: '',
        dateRange: [],
        tabNavs: TAB_NAVS,
        tabCurrent: TAB_NAVS[0],
        chartTabNavs: CHART_TAB_NAVS,
        chartTabCurrent: CHART_TAB_NAVS[0],
        selectedArea: {}
      },
    }
  },

  computed: {
    generateYear () {
      if(!this.craneStates.year) {
        return '2020'
      }
      return this.craneStates.year.getFullYear()
    }
  },

  mounted() {
    const { chart } = this.$refs.map
    chart.on('click', (params) => {
      chart.dispatchAction({
        type: 'mapSelect',
        dataIndex: params.dataIndex
      })
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

  methods: {
    salaryTooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>平均薪酬：${params[0].data}元`
    },
    demandTooltipFormatterFunc(params) {
      return `${params[0].name}<br/>${params[0].marker}人才供给：${params[0].data}人</br>${params[1].marker}岗位需求：${params[1].data}人`
    },
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%`
    },
  }
}
export default supply
</script>
