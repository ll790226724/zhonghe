module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [30, 316],
  exports: {
    results: 'results',
  },
  props: {
    $url: "tableRequestUrl",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '400px',
      height: '678px',
      overflow: 'scroll'
    }
  },
  children: [
    {
      component: '@byzanteam/vis-components/vis-table',
      props: {
        theme: 'dark',
        stripe: '',
        $headers: "[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 160, key: 'value', title: '人才质量指标'}]",
        $data: "results.map((item, index) => ({index: index + 1, name: item[1], value: item[0]}))"
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
