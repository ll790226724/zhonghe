const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'demand-vertical-bar',
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 752],
  exports: {
    results: 'results',
  },

  props: {
    // $url: "`/v1/components/5b59abd9-bf05-4161-b53f-9b8c6120551b/data?name=${craneStates.currentArea}`",
    // method: 'get',
    // $data: "[[]]",
    $style: {
      width: '400px',
      height: '270px'
    },
  },
  children: [
    {
      id: 'demand-vertical-bar-content',
      component: '@byzanteam/graphite/vertical-bar',
      props: {
        // 'v-if': 'results',
        labelKey: 'label',
        valueKey: '[数量(件)]',
        // $data: "results.map((item)=>({label: item[0], '数量': item[1]}))",
        $data: "[{label: '电子商务', '[数量(件)]': 78}, {label: '广告营销', '[数量(件)]': 123}, {label: '分类消息', '[数量(件)]': 198}, {label: '社交网络', '[数量(件)]': 27}, {label: '信息安全', '[数量(件)]': 267},{label: '互联网金融', '[数量(件)]': 87}, {label: '企业服务', '[数量(件)]': 67}, {label: '互联网', '[数量(件)]': 27},]",
        $style: {
          background: 'transparent'
        },
        // $labels: [{
        //   fill: '#FFFFFF',
        //   fontWeight: '500'
        // }],
        $mainAxis: {
          $labelStyle: {
            $rotate: 315,
            $size: 12,
            fill: '#367391',
          },
          $lineStyle: {
            stroke: 'transparent'
          },
          $range: {
            count: 5
          },
        },
        $crossAxis: {
          $labelStyle: {
            $rotate: 315,
            $size: 12,
            fill: '#367391',
          },
          $lineStyle: {
            stroke: 'transparent'
          },
          $range: {
            $count: 5
          },
          $unit: {
            content: '件',
            fill: '#367391'
          }
        },
        $rotate: 180,
        $series: "[['#6ad6ff', '#117ea8']]",
        $gap: {
          outer: '4.5'
        },
        ...chartTooltipOptions
      },
    },
  ],
};
