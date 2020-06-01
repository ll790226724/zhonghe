const {normal_digital_style} = require('../share')

module.exports = {
  id: 'activity-number-digital',
  component: '@byzanteam/vis-components/data-loader',
  position: [154, 224],
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
      id: 'activity-number-digital-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '引才活动统计',
          suffix: '次',
          $digital: 189,
        },
        $options: {
          separator: ',',
        },
        ...normal_digital_style,
      }
    },
  ]
}
