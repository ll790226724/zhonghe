module.exports = [
  {
    component: '@byzanteam/vis-components/vis-select',
    position: [809, 125],
    props: {
      $options: "[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]",
      'v-model': 'craneStates.department',
      placeholder: '福州',
    }
  },
  {
  component: '@byzanteam/vis-components/data-loader',
  position: [410, 160],
  props: {
    $style: {
      width: '1100px',
      height: '900px'
    }
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $geo: {
            map: 'china',
            $label: {
              $normal: {
                $show: false
              },
              $emphasis: {
                $show: false,
              }
            },
            $itemStyle: {
              normal: {
                areaColor: 'rgba(106, 214, 255, 0.05)',
                borderColor: '#6ad6ff',
                borderType: 'solid',
                $borderWidth: 0.5
              },
              emphasis: {
                areaColor: '#6ad6ff',
              }
            },
          },
          $series: `[
            {
              type: 'scatter',
            }
          ]`
        }
      }
    }
  ]
}]
