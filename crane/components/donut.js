module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1455, 380],
  exports: {
    results: 'results',
  },
  props: {
    $style: {
      width: '460px',
      height: '330px'
    },
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options:{
          $legend: {
            orient: 'vertical',
            right: '8%',
            top: 'middle',
            icon: 'circle',
            $itemGap: 9,
            $itemWidth: 10,
            $itemHeight: 10,
            $data: "['数据服务', '智能硬件', '人力资源服务', '计算机软件', '游戏', '其他']",
            $textStyle: {
              color: '#489bbe',
              $fontSize: 12,
            },
            inactiveColor: '#1C4159',
          },
          $series: {
            name: '行业人才占比',
            type: 'pie',
            left: '-34%',
            $radius: "['24%', '42%']",
            $label: {
              $show: false,
            },
            $labelLine: {
              $show: false,
            },
            $data: "[{name:'数据服务', value: 66, itemStyle: {color: '#6ad6ff'}}, {name:'智能硬件', value: 55, itemStyle: {color: '#4b9bbe'}}, {name:'人力资源服务', value: 44, itemStyle: {color: '#367290'}}, {name:'计算机软件', value: 33, itemStyle: {color: '#275570'}}, {name:'游戏', value: 22, itemStyle: {color: '#1c4159'}}, {name:'其他', value: 11, itemStyle: {color: '#153349'}}]"
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
