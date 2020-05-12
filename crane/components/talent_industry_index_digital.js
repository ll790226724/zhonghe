const {small_digital_style} = require('../share')

module.exports = {
  id: 'talent-industry-index',
  component: '@byzanteam/vis-components/data-loader',
  position: [290, 440],
  exports: {
    results: 'results',
  },

  props: {
    // $url: "`/v1/components/89b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
    // method: 'get',
    // $data: "[[0]]",
    $style: {
      // width: '194px',
      // height: '44px',
    },
  },
  children: [
    {
      id: 'talent-rank-index-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'bottom',
        $content: {
          title: '人才行业指数',
          $digital: 23,
        },
        $options: {
          separator: '',
        },
        ...small_digital_style,
      }
    },
  ]
}
