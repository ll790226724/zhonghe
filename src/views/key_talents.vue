<template>
  <div class="key_talents">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '833px'}">
      重点人才专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '40px'}">
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
      <Select placeholder="全部类型" class="map-select" :style="{width: '180px', position: 'absolute', top: '324px', left: '43px'}" v-model="craneStates.currentTalentType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input placeholder="关键词" class="map-tabs-input" :style="{width: '180px', height: '48px', backgroundColor: 'rgba(106, 214, 255, .02)', border: '1px solid rgba(106, 214, 255, .12)', borderRadius: '4px', color: '#ffffff', fontSize: '16px', fontWeight: '500', outline: 'none', position: 'absolute', top: '324px', left: '237px'}" />
      <brick-button type="gradient" color="primary" :style="{width: '148px', height: '25px', position: 'absolute', top: '400px', left: '156px'}">
        查看人才需求地图
      </brick-button>
    </div>
    <div v-if="craneStates.mapTabCurrent === craneStates.mapTabNavs[1]">
      <Select placeholder="全部类型" class="map-select" :style="{width: '180px', position: 'absolute', top: '324px', left: '43px'}" v-model="craneStates.currentDemandType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input placeholder="关键词" class="map-tabs-input" :style="{width: '180px', height: '48px', backgroundColor: 'rgba(106, 214, 255, .02)', border: '1px solid rgba(106, 214, 255, .12)', borderRadius: '4px', color: '#ffffff', fontSize: '16px', fontWeight: '500', position: 'absolute', top: '324px', left: '237px'}" />
      <brick-button type="gradient" color="primary" :style="{width: '148px', height: '25px', position: 'absolute', top: '400px', left: '156px'}">
        查看人才供应地图
      </brick-button>
    </div>
    <div :style="{width: '400px', height: '200px', backgroundColor: 'rgba(0, 0, 0, .03)', borderRadius: '4px', border: '1px dotted rgba(106, 214, 255, .3)', position: 'absolute', top: '225px', left: '1490px'}" />
    <div>
      <date-picker class="map-tab-datepicker" :style="{width: '180px', position: 'absolute', top: '270px', left: '1503px'}" v-model="craneStates.time" type="year" placeholder="选择时间" />
      <Select placeholder="所有行业" class="map-select" :style="{width: '180px', position: 'absolute', top: '270px', left: '1697px'}" v-model="craneStates.currentShortageType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <brick-button type="gradient" color="primary" :style="{width: '148px', height: '25px', position: 'absolute', top: '346px', left: '1616px'}">
        查看紧缺人才地图
      </brick-button>
    </div>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '497px', left: '40px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '494px', left: '74px'}">
      高层次人才供需变化
    </div>
    <data-loader ref="high-talents-demand-change-line-chart" :style="{width: '400px', height: '200px', position: 'absolute', top: '550px', left: '30px'}">
      <v-chart :options="{backgroundColor: 'transparent', color: ['#6ad6ff', '#367390'], tooltip: {trigger: 'axis', formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, legend: {icon: 'circle', right: 10, itemGap: 7, textStyle: {color: '#4b9bbe', fontSize: 14}}, xAxis: {type: 'category', data: ['2015', '2016', '2017', '2018', '2019', '2020'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供应', data: [200, 24, 238, 30, 50, 40], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: [300, 274, 248, 348, 50, 40], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '806px', left: '40px'}">
      >>
    </div>
    <div ref="degree-analysis-title" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '803px', left: '74px'}">
      高层次人才专业分布
    </div>
    <data-loader :style="{width: '400px', height: '218px', overflow: 'scroll', position: 'absolute', top: '841px', left: '30px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 8, itemHeight: 8, right: 80, top: 'middle', itemGap: 7, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 14}}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', left: -120, radius: ['40%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '电子信息'}, {value: 30, name: '机械电气'}, {value: 834, name: '精细化工'}, {value: 635, name: '生物医药'}, {value: 1548, name: '劳动经济'}, {value: 120, name: '经济计划'}]}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '805px', left: '1504px'}">
      >>
    </div>
    <div ref="degree-analysis-title" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '803px', left: '1536px'}">
      紧缺人才专业分布
    </div>
    <data-loader :style="{width: '400px', height: '218px', overflow: 'scroll', position: 'absolute', top: '841px', left: '1490px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {icon: 'circle', itemWidth: 8, itemHeight: 8, right: 80, top: 'middle', itemGap: 7, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: '14'}}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', left: -120, radius: ['40%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '电子信息'}, {value: 30, name: '机械电气'}, {value: 834, name: '精细化工'}, {value: 635, name: '生物医药'}, {value: 1548, name: '劳动经济'}, {value: 120, name: '经济计划'}]}]}" />
    </data-loader>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '459px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '456px', left: '1536px'}">
      区域紧缺人才趋势
    </div>
    <data-loader ref="high-talents-demand-change-line-chart" :style="{width: '400px', height: '214px', position: 'absolute', top: '518px', left: '1490px'}">
      <v-chart :options="{backgroundColor: 'transparent', color: ['#6ad6ff', '#367390'], tooltip: {trigger: 'axis', formatter: shortageTooltipFormatterFunc, backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, xAxis: {type: 'category', data: ['2015', '2016', '2017', '2018', '2019', '2020'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供应', data: [200, 24, 238, 30, 50, 40], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <vis-select :options="[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]" v-model="craneStates.department" placeholder="福州" :style="{position: 'absolute', top: '125px', left: '809px'}" />
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: '{b}<br/>人才数量：{c}人', backgroundColor: '#566374f0'}, visualMap: {type: 'piecewise', pieces: [{gt: 1500, label: '1500人及以上'}, {gt: 1000, lte: 1500, label: '1000-1500人'}, {gt: 100, lte: 999, label: '100-999人'}, {gt: 10, lte: 99, label: '10-99人'}, {gt: 1, lt: 9, label: '1-9人'}], orient: 'horizontal', bottom: '6%', left: '26%', textStyle: {color: '#ffffff', fontSize: '14'}, itemWidth: 18, itemGap: 10, textGap: 8, inRange: {color: ['rgba(106, 214, 255, .1)', 'rgba(106, 214, 255, .4)', 'rgba(106, 214, 255, .5)', 'rgba(106, 214, 255, .6)', 'rgba(106, 214, 255, .7)']}}, series: [
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
              ]}" />
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
  VisSelect,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
  DatePicker,
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
    VisSelect,
    Select,
    Option,
    DatePicker,
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
        time: '',
        currentShortageType: '',
      },
    }
  },

  methods: {
    shortageTooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>紧缺人才：${params[0].data}人`
    },
    demandTooltipFormatterFunc(params) {
      return `${params[0].name}<br/>${params[0].marker}人才供应：${params[0].data}人</br>${params[1].marker}人才需求：${params[1].data}人`
    },
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%`
    },
  }
}
export default key_talents
</script>
