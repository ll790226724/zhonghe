module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1455, 435],
  exports: {
    results: 'results',
  },
  props: {
    $style: {
      width: '460px',
      height: '218px'
    },
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $legend: {
            icon: 'circle',
            $itemWidth: 10,
            $itemHeight: 10,
            $right: 75,
            top: 'middle',
            $itemGap: 9,
            orient: 'vertical',
            $textStyle: {
              color: '#4b9bbe',
              $fontSize: 12
            },
            inactiveColor: '#1C4159',
          },
          $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
          $series: "[{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: [{value: 1335, name: '数据服务'}, {value: 900, name: '智能硬件'}, {value: 700, name: '人力资源服务'}, {value: 500, name: '计算机软件'}, {value: 300, name: '游戏'}, {value: 120, name: '其他'}]}]",
          $tooltip: {
            trigger: 'item',
            $formatter: "pieTooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        }
      }
    }
  ]
}
