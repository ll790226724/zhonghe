const {small_digital_style} = require('../share')

module.exports = [
  {
    id: 'talents-demand-change-icon',
    component: 'div',
    position: [1504, 374],
    props: {
      $style: {
        color: '#6ad6ff',
        fontSize: '14px',
        fontWeight: 400,
        textAlign: 'left',
      },
    },
    content: '>>',
  },
  {
    id: 'talents-demand-change-title·',
    component: 'div',
    position: [1536, 371],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '人才薪酬分析',
  },
  {
    id: 'talents-demand-change-count-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 419],
    props: {
      $style: {
        width: '400px',
        height: '230px'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>人才供给（人）：{c0}<br />岗位需求（人）：{c1}',
              backgroundColor: '#566374f0',
              $axisPointer: {
                $lineStyle: {
                  color: '#ffffff',
                  type: 'dotted'
                }
              }
            },
            $xAxis: {
              type: 'category',
              $data: "['2015', '2016', '2017', '2018', '2019', '2020']",
              $axisLine: {
                $show: false
              },
              $axisTick: {
                $show: false,
              },
              $axisLabel: {
                color: '#367391',
                $fontSize: 12,
                $fontWeight: 400
              },
              $splitLine: {
                $show: false
              }
            },
            $yAxis: {
              type: 'value',
              name: '人',
              $axisLine: {
                $show: false
              },
              $axisTick: {
                $show: false,
              },
              $nameTextStyle: {
                color: '#367391',
                $fontSize: 12,
                $fontWeight: 400
              },
              $axisLabel: {
                color: '#367391',
                $fontSize: 12,
                $fontWeight: 400
              },
              $splitLine: {
                $show: false
              }
            },
            $series: "[{type: 'line', data: [200, 24, 238, 30, 50, 40], showSymbol: false, lineStyle: {color: '#6ad6ff', width: 4}}, {type: 'line', data: [300, 274, 248, 348, 50, 40], showSymbol: false, lineStyle: {color: '#367390', width: 4}}]"
          }
        }
      }
    ]
  }
]
