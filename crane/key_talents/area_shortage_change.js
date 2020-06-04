module.exports = [
  {
    component: 'div',
    position: [1504, 459],
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
    component: 'div',
    position: [1536, 456],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '区域紧缺人才趋势',
  },
  {
    id: 'high-talents-demand-change-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 518],
    props: {
      $style: {
        width: '400px',
        height: '214px'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            $grid: {
              top: '24%',
              right: '5%',
              bottom: '10%'
            },
            backgroundColor: 'transparent',
            $color: "['#6ad6ff', '#367390']",
            $tooltip: {
              trigger: 'axis',
              $formatter: "shortageTooltipFormatterFunc",
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
              },
              $splitNumber: 4,
            },
            $series: "[{type: 'line', name: '人才供应', data: [200, 24, 238, 30, 50, 40], showSymbol: false, lineStyle: {width: 4}}]"
          }
        }
      }
    ]
  }
]
