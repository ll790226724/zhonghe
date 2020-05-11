module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 436],
  exports: {
    results: 'results',
  },
  children: [
    {
      component: '@byzanteam/graphite/donut',
      props: {
        $data: [
          {name: '数据服务', value: 120},
          {name: '游戏', value: 110},
          {name: '智能硬件', value: 100},
          {name: '人力资源服务', value: 70},
          {name: '计算机软件', value: 60},
          {name: '其他', value: 12}
        ],
        labelKey: 'name',
        valueKey: 'value',
        $theme: {
          background: 'transparent',
          $colors: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
          whitespace: 'nowrap'
        },
      }
    }
  ]
}
