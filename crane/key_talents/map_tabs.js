module.exports = [
  {
    component: 'div',
    position: [30, 244],
    props: {
      $style: {
        width: '400px',
        height: '220px',
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
    props: {
      'v-if': 'craneStates.mapTabCurrent === craneStates.mapTabNavs[0]'
    },
    children: [
      {
        component: 'iview/Select',
        position: [43, 324],
        props: {
          placeholder: '全部类型',
          class: 'map-select',
          $style: {
            width: '180px',
          },
          'v-model': 'craneStates.currentTalentType'
        },
        children: [
          {
            component: 'iview/Option',
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
        component: 'element-ui/input',
        position: [237, 324],
        props: {
          placeholder: '关键词',
          class: 'map-tabs-input',
          $style: {
            width: '180px',
            height: '48px',
            paddingLeft: '8px',
            backgroundColor: 'rgba(106, 214, 255, .02)',
            border: '1px solid rgba(106, 214, 255, .12)',
            borderRadius: '4px',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 500,
            outline: 'none'
          }
        }
      },
      {
        component: '@byzanteam/vis-components/brick-button',
        position: [156, 400],
        content: '查看人才需求地图',
        props: {
          type: "gradient",
          color: "primary",
          $style: {
            width: '148px',
            height: '25px'
          }
        }
      }
    ]
  },
  {
    component: 'div',
    props: {
      'v-if': 'craneStates.mapTabCurrent === craneStates.mapTabNavs[1]'
    },
    children: [
      {
        component: 'iview/Select',
        position: [43, 324],
        props: {
          placeholder: '全部类型',
          class: 'map-select',
          $style: {
            width: '180px',
          },
          'v-model': 'craneStates.currentDemandType'
        },
        children: [
          {
            component: 'iview/Option',
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
        component: 'element-ui/input',
        position: [237, 324],
        props: {
          placeholder: '关键词',
          class: 'map-tabs-input',
          $style: {
            width: '180px',
            height: '48px',
            paddingLeft: '8px',
            backgroundColor: 'rgba(106, 214, 255, .02)',
            border: '1px solid rgba(106, 214, 255, .12)',
            borderRadius: '4px',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 500,
            outline: 'none'
          }
        }
      },
      {
        component: '@byzanteam/vis-components/brick-button',
        position: [156, 400],
        content: '查看人才供应地图',
        props: {
          type: "gradient",
          color: "primary",
          $style: {
            width: '148px',
            height: '25px'
          }
        }
      }
    ]
  },
  {
    component: 'div',
    position: [1490, 225],
    props: {
      $style: {
        width: '400px',
        height: '180px',
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderRadius: '4px',
        border: '1px dotted rgba(106, 214, 255, .3)'
      }
    }
  },
  {
    component: 'div',
    children: [
      {
        component: 'iview/date-picker',
        position: [1503, 270],
        props: {
          class: 'map-tab-datepicker',
          $style: {
            width: '180px',
          },
          'v-model': 'craneStates.time',
          type: 'year',
          placeholder: '选择时间'
        }
      },
      {
        component: 'iview/Select',
        position: [1697, 270],
        props: {
          placeholder: '所有行业',
          class: 'map-select',
          $style: {
            width: '180px',
          },
          'v-model': 'craneStates.currentShortageType'
        },
        children: [
          {
            component: 'iview/Option',
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
        component: '@byzanteam/vis-components/brick-button',
        position: [1616, 346],
        content: '查看紧缺人才地图',
        props: {
          type: "gradient",
          color: "primary",
          $style: {
            width: '148px',
            height: '25px'
          }
        }
      }
    ]
  },
]
