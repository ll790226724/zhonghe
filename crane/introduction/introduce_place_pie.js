module.exports = {
  id: 'introduce-place',
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 94],
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
      id: 'introduce-place-content',
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
            $data: "['猎头', '熟人推荐', '主动接触搜寻', '政府政策', '人才落户', '其他']",
            $textStyle: {
              color: '#489bbe',
              $fontSize: 14,
            },
          },
          $series: {
            name: '人才引进渠道',
            type: 'pie',
            left: '-34%',
            $radius: "['0%', '55%']",
            $label: {
              $show: false,
            },
            $labelLine: {
              $show: false,
            },
            $data: "[{name:'猎头', value: 66, itemStyle: {color: '#6ad6ff'}}, {name:'熟人推荐', value: 55, itemStyle: {color: '#4b9bbe'}}, {name:'主动接触搜寻', value: 44, itemStyle: {color: '#367290'}}, {name:'政府政策', value: 33, itemStyle: {color: '#275570'}}, {name:'人才落户', value: 22, itemStyle: {color: '#1c4159'}}, {name:'其他', value: 11, itemStyle: {color: '#153349'}}]"
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
