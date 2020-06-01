const {normal_digital_style} = require('../share')

module.exports = {
  id: 'high-level-talent-digital',
  component: '@byzanteam/vis-components/data-loader',
  position: [130, 699],
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
      id: 'high-level-talent-digital-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '高层次人才引进总数',
          suffix: '人',
          $digital: 560,
        },
        $options: {
          separator: ',',
        },
        ...normal_digital_style,
      }
    },
  ]
}
