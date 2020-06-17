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
              data: craneStates.mapData,
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
              data: craneStates.mapData,
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
