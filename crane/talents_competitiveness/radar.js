module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1506, 455],
  props: {
    $url: "radarRequestUrl",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '370px',
      height: '480px'
    }
  },
  events: {
    requestDone: {
      params: ['param'],
      actions: ["setState('radarData', param.results)"],
    },
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options: {
          $legend: {
            orient: 'vertical',
            $bottom: 100,
            icon: 'circle',
            inactiveColor: '#1C4159',
            $itemGap: 5,
            $itemWidth: 10,
            $itemHeight: 10,
            $textStyle: {
              color: '#4b9bbe',
              $fontSize: 14,
              $padding: '[2, 4]'
            }
          },
          $tooltip: {
            trigger: 'item',
            backgroundColor: '#566374f0',
          },
          $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
          $radiusAxis: {
            $axisLine: {
              color: '#19394f'
            },
            $splitLine: {
              color: '#19394f'
            }
          },
          $radar: {
            shape: 'circle',
            $center: "['50%', '26%']",
            radius: '50% ',
            $name: {
              $textStyle: {
                color: '#4b9bbe',
                $fontSize: 14,
              }
            },
            $axisLine: {
              lineStyle: {
                color: '#19394f'
              }
            },
            $splitArea: {
              $areaStyle: {
                color: 'transparent'
              }
            },
            $splitLine: {
              $lineStyle: {
                color: '#19394f'
              },
            },
            $indicator: "craneStates.indicators"
          },
          $series: `[{
              type: 'radar',
              areaStyle: {opacity: 0.2},
              lineStyle: {width: 1},
              axisLine: {},
              symbol: 'none',
              data: generateRadarData()
            }
          ]`
        }
      },
    }
  ]
}
