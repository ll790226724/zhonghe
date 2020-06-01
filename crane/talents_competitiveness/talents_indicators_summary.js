module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [40, 49],
    props: {
      $style: {
        color: '#6ad6ff',
        fontSize: '14px',
        fontWeight: 400,
        textAlign: 'left',
      },
    },
    content: '>>',
  },
  {
    id: 'degree-analysis-title',
    component: 'div',
    position: [74, 46],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '省域人才指标汇总',
  },
  {
    component: 'iview/RadioGroup',
    position: [36, 92],
    props: {
      'v-model': 'craneStates.indicator',
      type: 'button',
      $style: {
        width: '388px',
        height: '184px'
      },
    },
    children: [
      {
        component: 'iview/Radio',
        vfor: {
          data: "craneStates.indicators",
          exports: {item: 'item', index: 'key'}
        },
        props: {
          $label: 'item'
        },

      }
    ]
  }
]
