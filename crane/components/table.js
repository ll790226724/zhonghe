module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 78],
  props: {
    $style: {
      width: '400px',
      height: '254px'
    }
  },
  children: [
    {
      component: '@byzanteam/vis-components/vis-table',
      props: {
        $withHeader: false,
        $headers: "[{key: 'index'}, {key: 'name'}]",
        $data: "[{name: '生活服务'}, {name: '数据服务'}, {name: '游戏'}, {name: '电子商务'}, {name: '音乐/视频/阅读'}, {name: '智能硬件'}, {name: '生活服务'}]"
      }
    }
  ]
}
