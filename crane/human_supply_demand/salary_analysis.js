const {small_digital_style} = require('../share')

module.exports = [
  {
    id: 'salary-icon',
    component: 'div',
    position: [40, 717],
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
    id: 'salary-title·',
    component: 'div',
    position: [74, 714],
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
    id: 'salary-count',
    component: '@byzanteam/vis-components/data-loader',
    position: [30, 766],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [116, 795],
    props: {
      $style: {
        height:'10px',
        width: '10px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: '#6ad6ff',
        borderStyle: 'solid',
      }
    },
  },
  {
    id: 'salary-count-digital',
    component: '@byzanteam/vis-components/data-loader',
    position: [146, 772],
    children: [
      {
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '岗位平均薪酬',
            $digital: 5200,
          },
          $options: {
            separator: ',',
          },
          $style: {
            width: '199px',
            height: '39px'
          },
          ...small_digital_style,
        }
      },
    ]
  },
  {
    id: 'salary-count-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [30, 846],
    props: {
      $style: {
        width: '400px',
        height: '200px'
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
              formatter: '{b}<br/>平均薪酬（元）：{c}',
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
              name: '元',
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
            $series: "[{type: 'line', data: [3200, 2274, 2348, 3848, 5500, 4900], showSymbol: false, lineStyle: {color: '#6ad6ff', width: 4}}]"
          }
        }
      }
    ]
  }
]
