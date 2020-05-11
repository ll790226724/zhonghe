const { chartTooltipOptions } = require('../share')

module.exports = {
  id: 'demand-bar',
  component: '@byzanteam/vis-components/data-loader',
  position: [41, 584],
  exports: {
    results: 'results',
  },
  props: {
    $url:"`/v1/components/f4b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
    method: 'get',
    $data: "[{label: '投诉类型', amount: 12}]",
    $style: {
      width: '400px',
      height: '270px'
    },
  },
  children: [
    {
      id: 'demand-bar-content',
      component: '@byzanteam/graphite/vertical-bar',
      props: {
        // 'v-if': 'results',
        // $data: "results.map((result) => ({label: result[1], '数量（件）': result[0]}))",
        $data: "[{label: '电子商务', amount: 78}, {label: '广告营销', amount: 123}, {label: '分类消息', amount: '198'}, {label: '社交网络', amount: '67'}, {label: '信息安全', amount: '67'},{label: '互联网金融', amount: '87'}, {label: '企业服务', amount: '67'}, {label: '互联网', amount: '27'},]",
        labelKey: 'label',
        valueKey: '数量（件）',
        $mainAxis: {
          $labelStyle: {
            $rotate: 315,
            $size: 12,
            fill: '#367391',
          },
          $labelLength: 7,
          $lineStyle: {
            stroke: 'transparent',
          },
        },
        $crossAxis: {
          $range: {
            $count: 5,
          },
          $lineStyle: {
            stroke: 'transparent',
          },
          $labelStyle: {
            $size: 12,
            fill: '#367391',
          },
          unit: {
            content: '件',
            fill: '#367391'
          },
        },
        $gap: {
          $outer: 4.5
        },
        $series: "['#6ad6ff'， #117ea8]",
        $theme: {
          background: 'transparent',
        },
        ...chartTooltipOptions
      }
    }
  ]
}
