module.exports = [
  {
    component: '@byzanteam/vis-components/brick-radio-button-select',
    position: [864, 125],
    props: {
      $options: "provinceOptions",
      'v-model': 'craneStates.province',
      placeholder: '全省',
    }
  },
  {
    component: '@byzanteam/vis-components/brick-radio-button-select',
    position: [979, 125],
    props: {
      'v-if': 'craneStates.province',
      $options: "selectOptions",
      'v-model': 'craneStates.city',
      placeholder: '全省',
    }
  },
  {
  component: '@byzanteam/vis-components/data-loader',
  position: [485, 190],
  props: {
    $style: {
      width: '950px',
      height: '794px'
    }
  },
  children: [
    {
      id: 'map',
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $geo: {
            $map: "craneStates.city ? craneStates.city.uuid : 'fujian'",
            $top: 10,
            $bottom: 10,
            $left: 10,
            $right: 10,
            $label: {
              $normal: {
                $show: false
              },
              $emphasis: {
                $show: false,
              }
            },
            $itemStyle: {
              normal: {
                areaColor: 'rgba(106, 214, 255, 0.05)',
                borderColor: '#6ad6ff',
                borderType: 'solid',
                $borderWidth: 0.5
              },
              emphasis: {
                areaColor: '#6ad6ff',
              }
            },
            $regions: "[{name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false}}}}]",
          },
          $series: `[
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
          ]`
        }
      }
    }
  ]
}]
