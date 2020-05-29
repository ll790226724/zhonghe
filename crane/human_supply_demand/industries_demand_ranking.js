module.exports = [
  {
    id: 'talent-index-icon',
    component: 'div',
    position: [1504, 49],
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
    position: [1536, 46],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '重点行业需求排名',
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 84],
    props: {
      $style: {
        width: '400px',
        height: '221px',
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
          $data: "[{index: 1, name: '数据服务'}, {index: 2, name: '广告营销'}, {index: 3, name: '旅游'}, {index: 4, name: '医疗健康'}, {index: 5, name: '社交网络'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}]"
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
]
