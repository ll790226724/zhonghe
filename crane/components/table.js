module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 78],
  props: {
    $style: {
      width: '400px',
      height: '254px',
      overflow: 'scroll'
    }
  },
  children: [
    {
      component: '@byzanteam/vis-components/vis-table',
      props: {
        $withHeader: false,
        $headers: "[{width: 120, key: 'index'}, {width: 280, key: 'name'}]",
        $data: "[{index: 1, name: '生活服务'}, {index: 2, name: '数据服务'}, {index: 3, name: '游戏'}, {index: 4, name: '电子商务'}, {index: 5, name: '音乐/视频/阅读'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}]"
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
