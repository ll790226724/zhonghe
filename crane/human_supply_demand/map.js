module.exports = [
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [876, 125],
    children: [
      {
        id: 'departments-select',
        component: '@byzanteam/vis-components/brick-radio-button-select',
        props: {
          $options: "selectOptions",
          'v-model': 'craneStates.department',
          placeholder: '全省',
        },
      },
    ],
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [410, 160],
    props: {
      $style: {
        width: '1100px',
        height: '900px'
      }
    },
    children: [
      {
        id: 'map',
        component: 'v-chart',
        props: {
          $options: 'mapOptions'
        }
      }
    ]
  }
]
