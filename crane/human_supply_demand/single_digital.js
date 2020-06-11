const {small_digital_style} = require('../share')

module.exports = [
  {
    id: 'supply-demand-count',
    component: 'div',
    position: [30, 196],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [100, 225],
    props: {
      $style: {
        height:'10px',
        width: '10px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: '#6ad6ff',
        borderStyle: 'solid',
      }
    },
  },
  {
    id: 'supply-demand-count',
    component: '@byzanteam/vis-components/data-loader',
    position: [126, 202],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/03b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob}&year=${generateYear}`",
      method: 'get',
      $data: "[[0]]",
    },
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '企业人才需求数量',
            $digital: "results[0][0]",
            suffix: '人'
          },
          $options: {
            separator: ',',
          },
          $style: {
            height: '39px'
          },
          ...small_digital_style,
        }
      },
    ]
  }
]
