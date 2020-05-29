module.exports = [
  {
    id: 'talent-index-icon',
    component: 'div',
    position: [40, 305],
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
    id: 'talent-demand',
    component: 'div',
    position: [74, 302],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '需求岗位排名',
  },
  {
    component: '@byzanteam/vis-components/brick-tabs',
    position: [110, 352],
    directive: {
      model: 'craneStates.tabCurrent',
    },
    props: {
      $tabNavs: 'craneStates.tabNavs',
      $activeTab: 'craneStates.tabCurrent'
    }
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [30, 414],
    props: {
      'v-if': 'craneStates.tabCurrent === craneStates.tabNavs[0]',
      $style: {
        width: '400px',
        height: '230px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: '@byzanteam/vis-components/vis-table',
        props: {
          $withHeader: false,
          theme: 'dark',
          stripe: '',
          $headers: "[{width: 120, key: 'index'}, {width: 280, key: 'name'}]",
          $data: "[{index: 1, name: '广告设计师'}, {index: 2, name: '中级3D建模师'}, {index: 3, name: '产品经理'}, {index: 4, name: '产品助理'}, {index: 5, name: '交互设计师'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}]"
        },
        children: [
          {
            component: 'template',
            exports: {
              cell: 'cell',
              columnKey: 'columnKey',
            },
            children: [
              {
                component: 'span',
                content: '{{cell}}',
                props: {
                  $class: "columnKey === 'index' ? 'row-index-cell' : ''",
                },
              },
            ],
          },
        ]
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [30, 414],
    props: {
      'v-if': 'craneStates.tabCurrent === craneStates.tabNavs[1]',
      $style: {
        width: '400px',
        height: '230px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: '@byzanteam/vis-components/vis-table',
        props: {
          $withHeader: false,
          theme: 'dark',
          stripe: '',
          $headers: "[{width: 120, key: 'index'}, {width: 280, key: 'name'}]",
          $data: "[{index: 1, name: '中级3D建模师'}, {index: 2, name: '广告设计师'}, {index: 3, name: '生活服务'}, {index: 4, name: '产品助理'}, {index: 5, name: '交互设计师'}, {index: 6, name: '智能硬件'}, {index: 7, name: '产品经理'}]"
        },
        children: [
          {
            component: 'template',
            exports: {
              cell: 'cell',
              columnKey: 'columnKey',
            },
            children: [
              {
                component: 'span',
                content: '{{cell}}',
                props: {
                  $class: "columnKey === 'index' ? 'row-index-cell' : ''",
                },
              },
            ],
          },
        ]
      }
    ]
  }
]
