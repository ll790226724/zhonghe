module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1455, 435],
  exports: {
    results: 'results',
  },
  props: {
    url: "/v1/components/22b74ddd-39de-493f-84ab-9d87fcf23fee/data",
    method: 'get',
    $data: "[[0, '暂无数据']]",
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
            $left: 285,
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
          $series: "[{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results.map(item => ({value: item[0], name: item[1]}))}]",
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
