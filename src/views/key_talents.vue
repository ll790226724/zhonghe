<template>
  <div class="key_talents">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '833px'}">
      重点人才专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '10px', left: '10px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '74px'}">
      高层次人才供需地图
    </div>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '88px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '117px', left: '119px'}" />
    <data-loader :style="{position: 'absolute', top: '94px', left: '145px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '人才数量统计', digital: 5200, suffix: '人'}" :options="{separator: ''}" :style="{width: '196px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" />
    </data-loader>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '154px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '183px', left: '119px'}" />
    <data-loader :style="{position: 'absolute', top: '160px', left: '145px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '人才引进统计', digital: 67, suffix: '次'}" :options="{separator: ''}" :style="{width: '158px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" />
    </data-loader>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1536px'}">
      区域紧缺人才地图
    </div>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '128px', left: '1490px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '157px', left: '1588px'}" />
    <data-loader :style="{position: 'absolute', top: '134px', left: '1614px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '紧缺人才数量', digital: 564, suffix: '人'}" :options="{separator: ''}" :style="{width: '178px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" />
    </data-loader>
    <div :style="{width: '400px', height: '200px', backgroundColor: 'rgba(0, 0, 0, .03)', borderRadius: '4px', border: '1px dotted rgba(106, 214, 255, .3)', position: 'absolute', top: '244px', left: '30px'}" />
    <brick-tabs :tabNavs="craneStates.mapTabNavs" :activeTab="craneStates.mapTabCurrent" :style="{position: 'absolute', top: '256px', left: '126px'}" v-model="craneStates.mapTabCurrent" />
    <div v-if="craneStates.mapTabCurrent === craneStates.mapTabNavs[0]">
      <Select class="map-select" :style="{width: '180px', position: 'absolute', top: '324px', left: '43px'}" v-model="craneStates.currentType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input :style="{width: '180px', height: '48px', backgroundColor: 'rgba(106, 214, 255, .02)', border: '1px solid rgba(106, 214, 255, .12)', borderRadius: '4px', color: '#ffffff', position: 'absolute', top: '324px', left: '237px'}" />
      <brick-button :style="{width: '148px', height: '25px', position: 'absolute', top: '400px', left: '156px'}">
        查看人才供应地图
      </brick-button>
    </div>
    <div v-if="craneStates.mapTabCurrent === craneStates.mapTabNavs[1]">
      <Select class="map-select" :style="{width: '180px', position: 'absolute', top: '324px', left: '43px'}" v-model="craneStates.currentDemandType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input :style="{width: '180px', height: '48px', backgroundColor: 'rgba(106, 214, 255, .02)', border: '1px solid rgba(106, 214, 255, .12)', borderRadius: '4px', color: '#ffffff', position: 'absolute', top: '324px', left: '237px'}" />
      <brick-button :style="{width: '148px', height: '25px', position: 'absolute', top: '400px', left: '156px'}">
        查看人才供应地图
      </brick-button>
    </div>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '497px', left: '40px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '494px', left: '74px'}">
      高层次人才供需变化
    </div>
    <data-loader ref="high-talents-demand-change-line-chart" :style="{width: '400px', height: '200px', position: 'absolute', top: '550px', left: '30px'}">
      <v-chart :options="{backgroundColor: 'transparent', color: ['#6ad6ff', '#367390'], tooltip: {trigger: 'axis', formatter: '{b}<br/>人才供应（人）：{c0}<br />人才需求（人）：{c1}', backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, legend: {icon: 'circle', right: 10, itemGap: 4, textStyle: {color: '#4b9bbe', fontSize: '14'}}, xAxis: {type: 'category', data: ['2015', '2016', '2017', '2018', '2019', '2020'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供应', data: [200, 24, 238, 30, 50, 40], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: [300, 274, 248, 348, 50, 40], showSymbol: false, lineStyle: {width: 4}}]}" />
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
  DigitalRoll,
  BrickTabs,
  BrickButton,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
} from 'iview'
import {
  Input,
} from 'element-ui'

const MAP_TAB_NAVS = [{uuid: 1, label: '人才供应'}, {uuid: 2, label: '人才需求'}]

export const key_talents = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    DigitalRoll,
    BrickTabs,
    BrickButton,
    Select,
    Option,
    Input,
    'v-chart': Echarts,
  },

  data () {
    return {
      craneStates: {
        types: [{index: 1, name: '学术型人才'}, {index: 2, name: '工程型人才'}, {index: 3, name: '技能型人才'}, {index: 4, name: '技术型人才'}, {index: 5, name: '产品助理'}, {index: 6, name: '智能硬件'}],
        currentTalentType: '',
        currentDemandType: '',
        mapTabCurrent: MAP_TAB_NAVS[0],
        mapTabNavs: MAP_TAB_NAVS,
      },
    }
  },
}
export default key_talents
</script>
