const { chartTooltipOptions } = require('../share');

module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1455, 380],
  exports: {
    results: 'results',
  },
  props: {
    $style: {
      width: '460px',
      height: '330px'
    },
  },
  children: [
    {
      component: '@byzanteam/graphite/donut',
      props: {
        $data: "[{label: '数据服务(%)', value: 12}, {label: '游戏(%)', value: 22}, {label: '智能硬件(%)', value: 23}, {label: '人力资源服务(%)', value: 40}, {label: '计算机软件(%)', value: 10}, {label: '其他(%)', value: 22}]",
        labelKey: 'label',
        valueKey: 'value',
        $innerRadius: 0.58,
        $hideLabel: true,
        $theme: {
          background: 'transparent',
          $colors: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
          whitespace: 'nowrap'
        },
        $legendOptions: {
          $align: "['center', 'start']",
          $offset: '[-30, 0]',
          position: 'right',
          layout: 'vertical',
          $label: {
            fill: '#4b9bbe',
            $size: 14,
          },
        },
        ...chartTooltipOptions
      }
    }
  ]
}
