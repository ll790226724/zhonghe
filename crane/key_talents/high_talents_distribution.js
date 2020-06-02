module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [40, 806],
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
    position: [74, 803],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '高层次人才专业分布',
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [30, 841],
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
            $legend: {
              icon: 'circle',
              $right: 80,
              top: 'middle',
              $itemGap: 7,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                $fontSize: 14
              }
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', left: -120, radius: ['40%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '电子信息'}, {value: 30, name: '机械电气'}, {value: 834, name: '精细化工'}, {value: 635, name: '生物医药'}, {value: 1548, name: '劳动经济'}, {value: 120, name: '经济计划'}]}]"
          }
        }
      }
    ]
  },
]
