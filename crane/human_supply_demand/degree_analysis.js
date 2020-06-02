module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [1504, 717],
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
    position: [1536, 714],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '学历职称分析',
  },
  {
    component: '@byzanteam/vis-components/brick-tabs',
    position: [1586, 764],
    directive: {
      model: 'craneStates.chartTabCurrent',
    },
    props: {
      $tabNavs: 'craneStates.chartTabNavs',
      $activeTab: 'craneStates.chartTabCurrent'
    }
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 822],
    props: {
      'v-if': 'craneStates.chartTabCurrent === craneStates.chartTabNavs[0]',
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
              $top: 50,
              $itemGap: 4,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                fontSize: 14
              }
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', left: -120, radius: ['40%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '大学'}, {value: 310, name: '硕士'}, {value: 234, name: '大专'}, {value: 135, name: '高中'}, {value: 1548, name: '初中'}, {value: 1548, name: '博士'}]}]",
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            }
          }
        }
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 822],
    props: {
      'v-if': 'craneStates.chartTabCurrent === craneStates.chartTabNavs[1]',
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
              $top: 50,
              $itemGap: 4,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                fontSize: 14
              }
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', left: -120, radius: ['40%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 335, name: '大学'}, {value: 30, name: '硕士'}, {value: 834, name: '大专'}, {value: 635, name: '高中'}, {value: 1548, name: '初中'}, {value: 120, name: '博士'}]}]",
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            }
          }
        }
      }
    ]
  },
]
