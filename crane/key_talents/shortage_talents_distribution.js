module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [1504, 805],
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
    id: 'degree-analysis-title',
    component: 'div',
    position: [1536, 803],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '紧缺人才专业分布',
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 841],
    props: {
      $style: {
        width: '400px',
        height: '218px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            },
            $legend: {
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $right: 80,
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                fontSize: 12
              }
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', left: -120, radius: ['35%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '电子信息'}, {value: 30, name: '机械电气'}, {value: 834, name: '精细化工'}, {value: 635, name: '生物医药'}, {value: 1548, name: '劳动经济'}, {value: 120, name: '经济计划'}]}]"
          }
        }
      }
    ]
  },
]
