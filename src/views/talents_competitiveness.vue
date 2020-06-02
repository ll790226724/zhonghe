<template>
  <div class="talents_competitiveness">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '833px'}">
      省域人才综合竞争力
    </div>
    <vis-select :options="[{label: '台湾', uuid: 1},{label: '黑龙江', uuid: 2 },{label: '内蒙古', uuid: 3},{label: '吉林', uuid: 4},{label: '北京市', uuid: 5},{label: '辽宁', uuid: 6},{label: '河北', uuid: 7},{label: '天津', uuid: 8},{label: '山西', uuid: 9},{label: '陕西', uuid: 10},{label: '甘肃', uuid: 11},{label: '宁夏', uuid: 12},{label: '青海', uuid: 13},{label: '新疆', uuid:  14},{label: '西藏', uuid: 15},{label: '四川', uuid: 17},{label: '重庆', uuid: 18},{label: '山东', uuid: 19},{label: '河南', uuid: 20},{label: '江苏', uuid: 21},{label: '安徽', uuid: 22},{label: '湖北', uuid: 23},{label: '浙江', uuid: 24},{label: '福建', uuid: 25},{label: '江西', uuid: 26},{label: '湖南', uuid: 27},{label: '贵州', uuid: 28},{label: '云南', uuid: 29},{label: '广东', uuid: 30},{label: '广西', uuid: 31}, {label: '海南', uuid: 32}, {label: '上海', uuid: 33}]" v-model="craneStates.province" placeholder="全国" :style="{position: 'absolute', top: '125px', left: '864px'}" />
    <vis-select v-if="craneStates.province" :options="[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]" v-model="craneStates.city" placeholder="福州" :style="{position: 'absolute', top: '125px', left: '979px'}" />
    <data-loader :style="{width: '950px', height: '794px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart :options="{backgroundColor: 'transparent', geo: {map: 'china', label: {normal: {show: false}, emphasis: {show: false}}, itemStyle: {normal: {areaColor: 'rgba(106, 214, 255, 0.05)', borderColor: '#6ad6ff', borderType: 'solid', borderWidth: 0.5}, emphasis: {areaColor: '#6ad6ff'}}, regions: [{name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false}}}}]}, series: [
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
                  symbolSize: [28, 36],
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: 500
                      },
                      formatter (value){
                        return value.data.value[2]
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#37a6d7',
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
    <data-loader :style="{width: '400px', height: '678px', overflow: 'scroll', position: 'absolute', top: '316px', left: '30px'}">
      <vis-table theme="dark" stripe="" :headers="[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 160, key: 'value', title: '人才质量指标'}]" :data="[{index: 1, name: '四川省', value: 99.8}, {index: 2, name: '重庆市', value: 99.5}, {index: 3, name: '青海省', value: 99.1}, {index: 4, name: '浙江省', value: 98.9}, {index: 5, name: '湖南省', value: 98.7}, {index: 6, name: '湖北省', value: 98.4}, {index: 7, name: '甘肃省', value:98.3}, {index: 8, name: '山东省', value:98.1}, {index: 9, name: '江苏省', value:98.0}, {index: 10, name: '江西省', value:97.2}, {index: 11, name: '福建省', value:97.0}, {index: 12, name: '贵州省', value:96.8},{index: 13, name: '陕西省', value:96.5}, {index: 14, name: '山西省', value:94.2}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '40px'}">
      >>
    </div>
    <div ref="degree-analysis-title" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '74px'}">
      省域人才指标汇总
    </div>
    <RadioGroup v-model="craneStates.indicator" type="button" :style="{width: '388px', height: '184px', position: 'absolute', top: '92px', left: '36px'}">
      <Radio v-for="(item, key) in craneStates.indicators" :key="key" :label="item" />
    </RadioGroup>
    <data-loader :style="{width: '370px', height: '480px', position: 'absolute', top: '455px', left: '1506px'}">
      <v-chart :options="{legend: {orient: 'vertical', bottom: 0, icon: 'circle', textStyle: {color: '#4b9bbe', fontSize: 14, padding: [2, 4]}}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], radiusAxis: {axisLine: {color: '#19394f'}, splitLine: {color: '#19394f'}}, radar: {shape: 'circle', center: {0: '50%', 1: '50%'}, radius: '50% ', name: {textStyle: {color: '#4b9bbe', fontSize: 14}}, axisLine: {lineStyle: {color: '#19394f'}}, splitArea: {areaStyle: {color: 'transparent'}}, splitLine: {lineStyle: {color: '#19394f'}}, indicator: [{name: '人才数量指标'}, {name: '人才质量指标'}, {name: '人才结构指标'}, {name: '人才投入指标'}, {name: '人才平台指标'}, {name: '人才生活指标'}, {name: '人才环境指标'}, {name: '人才效能指标'}, {name: '人才效益指标'}, {name: '人才发展指标'}]}, series: [{
                  type: 'radar',
                  areaStyle: { normal: { itemStyle: { opacity: 0.2}}},
                  axisLine: {},
                  symbol: 'none',
                  data: [
                    {
                      value: [4300, 10000, 28000, 35000, 50000, 19000, 28000, 35000, 50000, 19000],
                      name: '四川省'
                    },
                    {
                      value: [5000, 14000, 30000, 31000, 42000, 21000, 28000, 31000, 42000, 21000],
                      name: '山东省'
                    },
                    {
                      value: [5000, 1000, 38000, 31000, 42000, 21000, 38000, 31000, 42000, 21000],
                      name: '江苏省'
                    },
                    {
                      value: [5000, 34000, 2000, 38000, 52000, 61000, 2000, 38000, 52000, 61000],
                      name: '上海市'
                    }
                  ]
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
      十大指标汇总
    </div>
    <div ref="ten-number-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '219px', left: '1512px'}">
      >>
    </div>
    <div ref="force-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '89px', left: '1588px'}" />
    <Select ref="area-select" multiple placeholder="选择省市" class="map-select" :style="{width: '382px', position: 'absolute', top: '277px', left: '1500px'}" v-model="craneStates.currentProvince">
      <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
        {{item.name}}
      </Option>
    </Select>
    <data-loader :style="{width: '400px', height: '678px', overflow: 'scroll', position: 'absolute', top: '316px', left: '30px'}">
      <vis-table theme="dark" stripe="" :headers="[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 160, key: 'value', title: '人才质量指标'}]" :data="[{index: 1, name: '四川省', value: 99.8}, {index: 2, name: '重庆市', value: 99.5}, {index: 3, name: '青海省', value: 99.1}, {index: 4, name: '浙江省', value: 98.9}, {index: 5, name: '湖南省', value: 98.7}, {index: 6, name: '湖北省', value: 98.4}, {index: 7, name: '甘肃省', value:98.3}, {index: 8, name: '山东省', value:98.1}, {index: 9, name: '江苏省', value:98.0}, {index: 10, name: '江西省', value:97.2}, {index: 11, name: '福建省', value:97.0}, {index: 12, name: '贵州省', value:96.8},{index: 13, name: '陕西省', value:96.5}, {index: 14, name: '山西省', value:94.2}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader ref="force-value" v-slot="{ results: results }" :style="{position: 'absolute', top: '66px', left: '1614px'}">
      <digital-roll ref="force-value-content" titlePosition="left" :content="{title: '竞争力指数', digital: 98.2}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
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
import china from '../../public/static/china.json'

import BuiltInMixin from '../mixins/built_in'

Echarts.registerMap('china', china);
import {
  VisSelect,
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

Echarts.registerMap('china', china);

export const talents_competitiveness = {
  mixins: [BuiltInMixin],

  components: {
    VisSelect,
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
      craneStates: {
        province: '',
        city: '',
        indicators: ['人才数量指标', '人才质量指标', '人才结构指标', '人才投入指标', '人才平台指标', '人才生活指标', '人才环境指标', '人才效能指标', '人才效益指标', '人才发展指标'],
        indicator: '',
        types: [{index: 1, name: '四川省'}, {index: 2, name: '重庆市'}, {index: 3, name: '青海省'}, {index: 4, name: '浙江省'}, {index: 5, name: '湖南省'}, {index: 6, name: '湖北省'}, {index: 7, name: '甘肃省'}, {index: 8, name: '山东省'}, {index: 9, name: '江苏省'}, {index: 10, name: '江西省'}, {index: 11, name: '福建省'}, {index: 12, name: '贵州省'}, {index: 13, name: '陕西省'}, {index: 14, name: '山西省'}],
        currentProvince: '',
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
