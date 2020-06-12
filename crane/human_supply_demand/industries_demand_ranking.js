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
    exports: {
      results: 'results',
    },
    props: {
      url: "/v1/components/08b74ddd-39de-493f-84ab-9d87fcf23fee/data",
      method: 'get',
      $data: "[['暂无数据']]",
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
          $data: "results ? results.map((item, index) => ({index: index + 1, name: item[0]})) : [{index: 0, name: '暂无数据'}]"
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
