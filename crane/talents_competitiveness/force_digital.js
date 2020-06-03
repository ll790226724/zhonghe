const {normal_digital_style} = require('../share')

module.exports = {
  id: 'force-value',
  component: '@byzanteam/vis-components/data-loader',
  position: [1614, 66],
  exports: {
    results: 'results',
  },

  props: {
    // $url: "`/v1/components/89b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
    // method: 'get',
    // $data: "[[0]]",
  },
  children: [
    {
      id: 'force-value-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '竞争力指数',
          $digital: 98.2,
        },
        $options: {
          separator: ',',
          $decimalPlaces: 1
        },
        ...normal_digital_style,
      }
    },
  ]
}
