const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'ranking_rank',
  component: '@byzanteam/vis-components/data-loader',
  position: [82, 752],
  exports: {
    results: 'results',
  },
  props: {
    // $url: "`/v1/components/f5b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
    // method: 'get',
    // $data: "[{label: '承办单位', amount: 12}]",
    $style: {
      width: '296px',
      height: '290px',
      overflow: 'scroll'
    },
  },
  children: [
    {
      id: 'department-ranking-content',
      component: '@byzanteam/vis-components/ranking',
      props: {
        // 'v-if': 'craneStates.rank',
        // $data: "results.slice(0, 3).map(item => { return {label: item[1], amount: item[0] } } )",
        $data: "[{label: '本科', amount: 78.16}, {label: '硕士', amount: 23.21}, {label: '博士', amount: 18.01}, {label: '高中生', amount: 68.23}, {label: '大专', amount: 47.67}, {label: '初中', amount: 45.11},]",
        $keys: {
          label: 'label',
          value: 'amount',
          tooltip: 'name'
        },
        $labelStyle: {
          color: '#4b9bbe',
          fontSize: '16px',
          lineHeight: '24px',
        },
        $valueStyle: {
          color: '#6ad6ff',
          fontSize: '16px',
          fontFamily: 'Oswald-Regular',
          lineHeight: '1.5',
          fontWeight: 400,
        },
        $lineStyle: {
          background: '#ffffff0D',
          $lineColor: "['#0885b5', '#6ad6ff']",
          height: '5px',
          borderRadius: '2.5px'
        },
        ...chartTooltipOptions
      },
    },
  ],
}
