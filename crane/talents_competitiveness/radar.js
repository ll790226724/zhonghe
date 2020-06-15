module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1506, 455],
  props: {
    $style: {
      width: '370px',
      height: '480px'
    }
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
            $indicator: "[{name: '人才数量指标'}, {name: '人才质量指标'}, {name: '人才结构指标'}, {name: '人才投入指标'}, {name: '人才平台指标'}, {name: '人才生活指标'}, {name: '人才环境指标'}, {name: '人才效能指标'}, {name: '人才效益指标'}, {name: '人才发展指标'}]"
          },
          $series: `[{
              type: 'radar',
              areaStyle: {opacity: 0.2},
              lineStyle: {width: 1},
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
          ]`
        }
      },
    }
  ]
}
