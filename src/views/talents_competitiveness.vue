<template>
  <div class="talents_competitiveness">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '770px'}">
      省域人才综合竞争力
    </div>
    <brick-radio-button-select :options="provinceOptions" v-model="craneStates.province" placeholder="全省" :style="{position: 'absolute', top: '125px', left: '864px'}" />
    <brick-radio-button-select v-if="craneStates.province" :options="selectOptions" v-model="craneStates.city" placeholder="全省" :style="{position: 'absolute', top: '125px', left: '979px'}" />
    <data-loader :style="{width: '950px', height: '794px', position: 'absolute', top: '190px', left: '485px'}">
      <v-chart ref="map" :options="{backgroundColor: 'transparent', geo: {map: craneStates.city ? craneStates.city.uuid : 'fujian', top: 10, bottom: 10, left: 10, right: 10, label: {normal: {show: false}, emphasis: {show: false}}, itemStyle: {normal: {areaColor: 'rgba(106, 214, 255, 0.05)', borderColor: '#6ad6ff', borderType: 'solid', borderWidth: 0.5}, emphasis: {areaColor: '#6ad6ff'}}, regions: [{name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false}}}}]}, series: [
                {
                  symbolSize: 0.1,
                  label: {
                    normal: {
                      formatter: '{b}',
                      position: 'bottom',
                      show: true
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#fff'
                    }
                  },
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  data: [
                    {name: '台湾', value: [121.5135, 25.0308, 42]},
                    {name: '黑龙江', value: [127.9688, 45.368, 34]},
                    {name: '内蒙古', value: [110.3467, 41.4899, 123,]},
                    {name: '吉林', value: [125.8154, 44.2584, 57]},
                    {name: '北京市', value: [116.4551, 40.2539, 89]},
                    {name: '辽宁', value: [123.1238, 42.1216, 373]},
                    {name: '河北', value: [114.4995, 38.1006, 21]},
                    {name: '天津', value: [117.4219, 39.4189, 465]},
                    {name: '山西', value: [112.3352, 37.9413, 781]},
                    {name: '陕西', value: [109.1162, 34.2004, 90]},
                    {name: '甘肃', value: [103.5901, 36.3043, 132]},
                    {name: '宁夏', value: [106.3586, 38.1775, 300]},
                    {name: '青海', value: [101.4038, 36.8207, 800]},
                    {name: '新疆', value: [87.9236, 43.5883, 14]},
                    {name: '西藏', value: [91.11, 29.97, 21]},
                    {name: '四川', value: [103.9526, 30.7617, 168]},
                    {name: '重庆', value: [108.384366, 30.439702, 78]},
                    {name: '山东', value: [117.1582, 36.8701, 31]},
                    {name: '河南', value: [113.4668, 34.6234, 34]},
                    {name: '江苏', value: [118.8062, 31.9208, 33]},
                    {name: '安徽', value: [117.29, 32.0581, 45]},
                    {name: '湖北', value: [114.3896, 30.6628, 134]},
                    {name: '浙江', value: [119.5313, 29.8773, 198]},
                    {name: '福建', value: [119.4543, 25.9222, 80]},
                    {name: '江西', value: [116.0046, 28.6633, 78]},
                    {name: '湖南', value: [113.0823, 28.2568, 152]},
                    {name: '贵州', value: [106.6992, 26.7682, 70]},
                    {name: '云南', value: [102.9199, 25.4663, 345]},
                    {name: '广东', value: [113.12244, 23.009505, 123]},
                    {name: '广西', value: [108.479, 23.1152, 114]},
                    {name: '海南', value: [110.3893, 19.8516, 214]},
                    {name: '上海', value: [121.4648, 31.2891, 33]},
                  ],
                },
                {
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  symbol: 'pin',
                  symbolSize: [48, 54],
                  label: {
                    normal: {
                      show: true,
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 500,
                      formatter (value){
                        return value.data.value[2]
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#37a6d7',
                      opacity: 1
                    }
                  },
                  data: [
                    {name: '台湾', value: [121.5135, 25.0308, 42]},
                    {name: '黑龙江', value: [127.9688, 45.368, 34]},
                    {name: '内蒙古', value: [110.3467, 41.4899, 123,]},
                    {name: '吉林', value: [125.8154, 44.2584, 57]},
                    {name: '北京市', value: [116.4551, 40.2539, 89]},
                    {name: '辽宁', value: [123.1238, 42.1216, 373]},
                    {name: '河北', value: [114.4995, 38.1006, 21]},
                    {name: '天津', value: [117.4219, 39.4189, 465]},
                    {name: '山西', value: [112.3352, 37.9413, 781]},
                    {name: '陕西', value: [109.1162, 34.2004, 90]},
                    {name: '甘肃', value: [103.5901, 36.3043, 132]},
                    {name: '宁夏', value: [106.3586, 38.1775, 300]},
                    {name: '青海', value: [101.4038, 36.8207, 800]},
                    {name: '新疆', value: [87.9236, 43.5883, 14]},
                    {name: '西藏', value: [91.11, 29.97, 21]},
                    {name: '四川', value: [103.9526, 30.7617, 168]},
                    {name: '重庆', value: [108.384366, 30.439702, 78]},
                    {name: '山东', value: [117.1582, 36.8701, 31]},
                    {name: '河南', value: [113.4668, 34.6234, 34]},
                    {name: '江苏', value: [118.8062, 31.9208, 33]},
                    {name: '安徽', value: [117.29, 32.0581, 45]},
                    {name: '湖北', value: [114.3896, 30.6628, 134]},
                    {name: '浙江', value: [119.5313, 29.8773, 198]},
                    {name: '福建', value: [119.4543, 25.9222, 80]},
                    {name: '江西', value: [116.0046, 28.6633, 78]},
                    {name: '湖南', value: [113.0823, 28.2568, 152]},
                    {name: '贵州', value: [106.6992, 26.7682, 70]},
                    {name: '云南', value: [102.9199, 25.4663, 345]},
                    {name: '广东', value: [113.12244, 23.009505, 123]},
                    {name: '广西', value: [108.479, 23.1152, 114]},
                    {name: '海南', value: [110.3893, 19.8516, 214]},
                    {name: '上海', value: [121.4648, 31.2891, 33]},
                  ],
                  showEffectOn: 'render',
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  zlevel: 1
                },
              ]}" />
    </data-loader>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <div ref="force-digital-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff05', borderRadius: '5px', position: 'absolute', top: '60px', left: '1490px'}" />
    <RadioGroup v-model="craneStates.indicator" type="button" :style="{width: '388px', height: '184px', position: 'absolute', top: '92px', left: '36px'}">
      <Radio v-for="(item, key) in craneStates.indicators" :key="key" :label="item.name" />
    </RadioGroup>
    <data-loader @requestDone="(param)=>[setState('radarData', param.results)]" :url="radarRequestUrl" method="get" :data="[[0, '暂无数据']]" :style="{width: '370px', height: '480px', position: 'absolute', top: '455px', left: '1506px'}">
      <v-chart :options="{legend: {orient: 'vertical', bottom: 100, icon: 'circle', inactiveColor: '#1C4159', itemGap: 5, itemWidth: 10, itemHeight: 10, textStyle: {color: '#4b9bbe', fontSize: 14, padding: [2, 4]}}, tooltip: {trigger: 'item', backgroundColor: '#566374f0'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], radiusAxis: {axisLine: {color: '#19394f'}, splitLine: {color: '#19394f'}}, radar: {shape: 'circle', center: ['50%', '26%'], radius: '50% ', name: {textStyle: {color: '#4b9bbe', fontSize: 14}}, axisLine: {lineStyle: {color: '#19394f'}}, splitArea: {areaStyle: {color: 'transparent'}}, splitLine: {lineStyle: {color: '#19394f'}}, indicator: craneStates.indicators}, series: [{
                  type: 'radar',
                  areaStyle: {opacity: 0.2},
                  lineStyle: {width: 1},
                  axisLine: {},
                  symbol: 'none',
                  data: generateRadarData()
                }
              ]}" />
    </data-loader>
    <div ref="province-talent-number" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '74px'}">
      省域人才指标汇总
    </div>
    <div ref="province-talent-number-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '48px'}">
      >>
    </div>
    <div ref="ten-number" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '216px', left: '1536px'}">
      10大指标汇总
    </div>
    <div ref="ten-number-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '219px', left: '1512px'}">
      >>
    </div>
    <div ref="force-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '89px', left: '1588px'}" />
    <data-loader v-slot="{ results: results }" :url="areaSelectRequestUrl" method="get" :data="[['暂无数据']]" :style="{position: 'absolute', top: '299px', left: '1500px'}">
      <Select ref="area-select" :multiple="true" placeholder="选择省市" class="map-select" :style="{width: '382px'}" v-model="craneStates.currentProvince">
        <Option v-for="(item, key) in results" :key="key" :value="item[0]" :label="item[0]">
          {{item[0]}}
        </Option>
      </Select>
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="tableRequestUrl" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '678px', overflow: 'scroll', position: 'absolute', top: '316px', left: '30px'}">
      <vis-table theme="dark" stripe="" :headers="[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 160, key: 'value', title: '人才质量指标'}]" :data="results.map((item, index) => ({index: index + 1, name: item[1], value: item[0].toFixed(2)}))">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader ref="force-value" v-slot="{ results: results }" :url="`/v1/components/38b74ddd-39de-493f-84ab-9d87fcf23fee/data?province=${craneStates.province ? craneStates.province.label : ''}&city=${craneStates.city ? craneStates.city.label : ''}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '66px', left: '1614px'}">
      <digital-roll ref="force-value-content" v-if="results" titlePosition="left" :content="{title: '竞争力指数', digital: results[0][0]}" :options="{separator: ',', decimalPlaces: 1}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import fujian from '../../public/static/fujian.json'

import BuiltInMixin from '../mixins/built_in'

Echarts.registerMap('fujian', fujian);

import {
  BrickRadioButtonSelect,
  DataLoader,
  VisTable,
  DigitalRoll,
} from '@byzanteam/vis-components'
import {
  RadioGroup,
  Radio,
  Select,
  Option,
} from 'iview'

const SELECT_OPTIONS = [{label: '福州市', uuid: 'fuzhou'}, {label: '宁德市', uuid: 'ningde'}, {label: '龙岩市', uuid: 'longyan'}, {label: '莆田市', uuid: 'putian'}, {label: '南平市', uuid: 'nanping'}, {label: '三明市', uuid: 'sanming'}, {label: '厦门市', uuid: 'xiamen'}, {label: '漳州市', uuid: 'zhangzhou'}, {label: '泉州市', uuid: 'quanzhou'}]
const PROVINCE_OPTIONS = [{label: '福建', uuid: 1}]

export const talents_competitiveness = {
  mixins: [BuiltInMixin],

  components: {
    BrickRadioButtonSelect,
    DataLoader,
    'v-chart': Echarts,
    VisTable,
    RadioGroup,
    Radio,
    DigitalRoll,
    Select,
    Option,
  },

  data () {
    return {
      selectOptions: SELECT_OPTIONS,
      provinceOptions: PROVINCE_OPTIONS,
      craneStates: {
        province: PROVINCE_OPTIONS[0],
        city: null,
        indicators: [{name: '人才数量指标'}, {name: '人才质量指标'}, {name: '人才结构指标'}, {name: '人才投入指标'}, {name: '人才平台指标'}, {name: '人才生活指标'}, {name: '人才环境指标'}, {name: '人才效能指标'}, {name: '人才效益指标'}, {name: '人才发展指标'}],
        indicator: '人才数量指标',
        types: [{index: 1, name: '四川省'}, {index: 2, name: '重庆市'}, {index: 3, name: '青海省'}, {index: 4, name: '浙江省'}, {index: 5, name: '湖南省'}, {index: 6, name: '湖北省'}, {index: 7, name: '甘肃省'}, {index: 8, name: '山东省'}, {index: 9, name: '江苏省'}, {index: 10, name: '江西省'}, {index: 11, name: '福建省'}, {index: 12, name: '贵州省'}, {index: 13, name: '陕西省'}, {index: 14, name: '山西省'}],
        currentProvince: [],
        selectedArea: {},
        radarData: []
      },
    }
  },

  watch: {
    'craneStates.city' (value) {
      if(!value) {
        this.craneStates.city = null
      }
      this.craneStates.currentProvince = []
    },
    'craneStates.province' (value) {
      if(!value) {
        this.$nextTick(() => {
          this.craneStates.province = PROVINCE_OPTIONS[0]
        })
      }
    },
  },

  computed: {
    tableRequestUrl () {
      if(this.craneStates.city) {
        return `/v1/components/35b74ddd-39de-493f-84ab-9d87fcf23fee/data?type='${this.craneStates.indicator}'&city=${this.craneStates.city.label}`
      }
      return `/v1/components/34b74ddd-39de-493f-84ab-9d87fcf23fee/data?type='${this.craneStates.indicator}'&province=福建省`
    },
    radarRequestUrl () {
      const { currentProvince } = this.craneStates
      const areas = currentProvince.reduce((acc, item, index) => {
        if(index === currentProvince.length - 1) {
          return `${acc}'${item}'`
        }
        return `${acc}'${item}',`
      }, '')
      // 请求市级数据
      if(!this.craneStates.city && this.craneStates.currentProvince.length > 0) {
        return `/v1/components/40b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${areas}`
      }
      // 请求县级数据
      if(this.craneStates.city && this.craneStates.currentProvince.length > 0) {
        return `/v1/components/41b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${areas}`
      }
      // 请求省级数据
      return '/v1/components/39b74ddd-39de-493f-84ab-9d87fcf23fee/data'
    },
    areaSelectRequestUrl () {
      // 请求区县列表
      if(this.craneStates.city) {
        return `/v1/components/37b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${this.craneStates.city.label}`
      }
      // 请求市区列表
      return `/v1/components/36b74ddd-39de-493f-84ab-9d87fcf23fee/data?province=福建省`
    }
  },

  methods: {
    generateRadarData () {
      const indicators = {}
      this.craneStates.radarData.forEach(item => {
        const a = {}
        a[item[0]] = item [1]
        if(!indicators[item[2]]) {
          indicators[item[2]] = []
        }
        indicators[item[2]].push(a)
      })
      return _.reduce(indicators, (acc, value, key) => {
        acc.push({
          name: key,
          value: this.craneStates.indicators.map(item => {
            const c =  value.find((exponent) => {
              return exponent[item.name]
            }, [])
            return c[item.name].toFixed(2)
          })
        })
        return acc
      }, [])
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

.ivu-tag {
  background: #6ad6ff05 !important;
  border: 1px solid #6ad6ff1f !important;
  margin: 3px 8px 3px 0 !important;
  padding-right: 14px !important;
  height: auto!important;
  .ivu-tag-text {
    color: #6ad6ff;
    font-size: 14px;
    padding-bottom: 4px;
    padding-top: 4px;
  }
}

.ivu-select-multiple .ivu-select-selection {
  padding:7px 24px 7px 12px !important;
  height: auto!important;
  max-height: 88px;
  overflow: scroll;
}
.ivu-select-multiple .ivu-select-item {
  font-weight: 400 !important;
}
.ivu-select-multiple .ivu-select-item:hover {
  font-weight: 500 !important;
}
.ivu-select-multiple .ivu-select-item-selected {
  background-color: transparent !important;
}

.ivu-select-multiple .ivu-select-item-selected:after {
  font-size: 36px !important;
}

:root .ivu-tag .ivu-icon-ios-close {
  font-size: 18px !important;
}
.ivu-select-multiple .ivu-tag i{
  right: 6px !important;
  top: 6px !important;
}

.ivu-select-visible .ivu-select-selection {
  box-shadow: none !important;
}
.ivu-select-multiple .ivu-select-item-selected:after{
  color: #6ad6ff !important;
}
.ivu-select-multiple .ivu-select-selection .ivu-select-placeholder{
  height: auto!important;
  line-height: 32px !important;
}
</style>
