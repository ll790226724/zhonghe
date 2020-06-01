module.exports = [
  {
    component: 'div',
    position: [30, 244],
    props: {
      $style: {
        width: '400px',
        height: '200px',
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderRadius: '4px',
        border: '1px dotted rgba(106, 214, 255, .3)'
      }
    }
  },
  {
    component: '@byzanteam/vis-components/brick-tabs',
    position: [126, 256],
    directive: {
      model: 'craneStates.mapTabCurrent',
    },
    props: {
      $tabNavs: 'craneStates.mapTabNavs',
      $activeTab: 'craneStates.mapTabCurrent'
    }
  },
  {
    component: 'div',
    children: [
      {
        component: 'iview/Select',
        position: [43, 324],
        props: {
          class: 'map-select',
          $style: {
            width: '180px',
          },
          'v-model': 'craneStates.currentType'
        },
        children: [
          {
            component: 'element-ui/Option',
            vfor: {
              data: "craneStates.types",
              exports: {item: 'item', index: 'key'}
            },
            props: {
              $value: "item.index",
              $label: "item.name"
            },
            content: '{{item.name}}',
          }
        ]
      },
      {
        component: 'iview/input',
        position: [237, 324],
        props: {
          $style: {
            width: '180px',
            height: '48px',
            backgroundColor: 'rgba(106, 214, 255, .02)',
            border: '1px solid rgba(106, 214, 255, .12)',
            borderRadius: '4px',
            color: '#ffffff'
          }
        }
      },
      {
        component: '@byzanteam/vis-components/brick-button',
        position: [156, 400],
        content: '查看人才供应地图',
        props: {
          $style: {
            width: '148px',
            height: '25px'
          }
        }
      }
    ]
  }
]
