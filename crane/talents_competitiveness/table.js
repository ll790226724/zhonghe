module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [30, 316],
  props: {
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
        $data: "[{index: 1, name: '四川省', value: 99.8}, {index: 2, name: '重庆市', value: 99.5}, {index: 3, name: '青海省', value: 99.1}, {index: 4, name: '浙江省', value: 98.9}, {index: 5, name: '湖南省', value: 98.7}, {index: 6, name: '湖北省', value: 98.4}, {index: 7, name: '甘肃省', value:98.3}, {index: 8, name: '山东省', value:98.1}, {index: 9, name: '江苏省', value:98.0}, {index: 10, name: '江西省', value:97.2}, {index: 11, name: '福建省', value:97.0}, {index: 12, name: '贵州省', value:96.8},{index: 13, name: '陕西省', value:96.5}, {index: 14, name: '山西省', value:94.2}]"
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
