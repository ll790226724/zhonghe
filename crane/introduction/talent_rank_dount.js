module.exports = {
  id: 'talent-rank',
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 414],
  exports: {
    results: 'results',
  },
  props: {
    $style: {
      width: '400px',
      height: '218px'
    },
  },
  children: [
    {
      id: 'talent-rank',
      component: 'v-chart',
      props: {
        $options:{
          $legend: {
            orient: 'vertical',
            right: '8%',
            top: 'middle',
            icon: 'circle',
            $itemWidth: 8,
            $itemHeight: 8,
            $data: "['学术型人才', '工程型人才', '技术型人才', '初级人才', '中级人才', '高级人才']",
            $textStyle: {
              color: '#489bbe',
              $fontSize: 14,
            },
            inactiveColor: '#1C4159',
          },
          $series: {
            name: '人才引进渠道',
            type: 'pie',
            left: '-34%',
            $radius: "['30%', '55%']",
            $label: {
              $show: false,
            },
            $labelLine: {
              $show: false,
            },
            $data: "[{name:'学术型人才', value: 66, itemStyle: {color: '#6ad6ff'}}, {name:'工程型人才', value: 55, itemStyle: {color: '#4b9bbe'}}, {name:'技术型人才', value: 44, itemStyle: {color: '#367290'}}, {name:'初级人才', value: 33, itemStyle: {color: '#275570'}}, {name:'中级人才', value: 22, itemStyle: {color: '#1c4159'}}, {name:'高级人才', value: 11, itemStyle: {color: '#153349'}}]"
          },
          $tooltip: {
            trigger: 'item',
            $formatter: "pieTooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        },
      }
    }
  ]
}
