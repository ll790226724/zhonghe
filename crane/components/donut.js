
module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 436],
  exports: {
    results: 'results',
  },
  props: {
    $style: {
      width: '400px',
      height: '218px'
    },
  },
  children: [
    {
      component: '@byzanteam/graphite/donut',
      props: {
        $data: "[{label: '数据服务', value: 120}, {label: '游戏', value: 110}, {label: '智能硬件', value: 100}, {label: '人力资源服务', value: 70}, {label: '计算机软件', value: 60}, {label: '其他', value: 12}]",
        labelKey: 'label',
        valueKey: 'value',
        $innerRadius: 0.48,
        $hideLabel: true,
        $theme: {
          background: 'transparent',
          $colors: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
          whitespace: 'nowrap'
        },
        $legendOptions: {
          size: '70px',
          $align: "['center', 'start']",
          position: 'right',
          layout: 'vertical',
          $label: {
            fill: '#2E2E2E',
            $size: 14,
          },
        },
        $tooltip: {
          $text: {
            align: 'center',
            baseline: 'middle',
            fill: '#FFFFFF',
            $size: 14,
            $weight: 400
          },
          $notation: {
            name: 'circle-small',
            $size: 14
          }
        },
        $tooltipOptions: {
          background: 'rgba(86, 99, 116, 0.94)',
          $text: {
            align: 'center',
            baseline: 'middle',
            fill: '#FFFFFF',
            $size: 14,
            $weight: 400
          },
          $title:{
            align: 'center',
            baseline: 'middle',
            fill: '#FFFFFF',
            $size: 14,
            $weight: 400
          },
        }
      }
    }
  ]
}
