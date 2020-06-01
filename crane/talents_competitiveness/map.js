module.exports = [
  {
    component: '@byzanteam/vis-components/vis-select',
    position: [864, 125],
    props: {
      $options: "[{label: '台湾', uuid: 1},{label: '黑龙江', uuid: 2 },{label: '内蒙古', uuid: 3},{label: '吉林', uuid: 4},{label: '北京市', uuid: 5},{label: '辽宁', uuid: 6},{label: '河北', uuid: 7},{label: '天津', uuid: 8},{label: '山西', uuid: 9},{label: '陕西', uuid: 10},{label: '甘肃', uuid: 11},{label: '宁夏', uuid: 12},{label: '青海', uuid: 13},{label: '新疆', uuid:  14},{label: '西藏', uuid: 15},{label: '四川', uuid: 17},{label: '重庆', uuid: 18},{label: '山东', uuid: 19},{label: '河南', uuid: 20},{label: '江苏', uuid: 21},{label: '安徽', uuid: 22},{label: '湖北', uuid: 23},{label: '浙江', uuid: 24},{label: '福建', uuid: 25},{label: '江西', uuid: 26},{label: '湖南', uuid: 27},{label: '贵州', uuid: 28},{label: '云南', uuid: 29},{label: '广东', uuid: 30},{label: '广西', uuid: 31}, {label: '海南', uuid: 32}, {label: '上海', uuid: 33}]",
      'v-model': 'craneStates.province',
      placeholder: '全国',
    }
  },
  {
    component: '@byzanteam/vis-components/vis-select',
    position: [979, 125],
    props: {
      'v-if': 'craneStates.province',
      $options: "[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]",
      'v-model': 'craneStates.city',
      placeholder: '福州',
    }
  },
  {
  component: '@byzanteam/vis-components/data-loader',
  position: [410, 160],
  props: {
    $style: {
      width: '950px',
      height: '794px'
    }
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $geo: {
            map: 'china',
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
              name: 'Top 5',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              symbolSize: [28, 36],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 9,
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
          ]`
        }
      }
    }
  ]
}]
