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
          $tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>人才数量：{c}人',
            backgroundColor: '#566374f0',
          },
          $visualMap: {
            type: 'piecewise',
            $pieces: "[{gt: 1500, label: '1500人及以上'}, {gt: 1000, lte: 1500, label: '1000-1500人'}, {gt: 100, lte: 999, label: '100-999人'}, {gt: 10, lte: 99, label: '10-99人'}, {gt: 1, lt: 9, label: '1-9人'}]",
            orient: 'horizontal',
            bottom: '6%',
            left: '26%',
            $textStyle: {
              color: '#ffffff',
              fontSize: 14
            },
            $itemWidth: 18,
            $itemGap: 10,
            $textGap: 8,
            $inRange: {
              $color: "['rgba(106, 214, 255, .1)', 'rgba(106, 214, 255, .4)', 'rgba(106, 214, 255, .5)', 'rgba(106, 214, 255, .6)', 'rgba(106, 214, 255, .7)']"
            }
          },
          $series: `[
            {
              type: 'map',
              mapType: 'Liuzhou',
              data: [
                {name: '鼓楼区', value: 4},
                {name: '台江区', value: 15},
                {name: '仓山区', value: 31},
                {name: '马尾区', value: 69},
                {name: '晋安区', value: 1440},
                {name: '长乐区', value: 4068},
                {name: '闽侯县', value: 376},
                {name: '连江县', value: 45},
                {name: '罗源县', value: 55},
                {name: '闽清县', value: 2},
                {name: '永泰县', value: 677},
                {name: '平潭县', value: 677},
                {name: '福清市', value: 677},
              ],
              label: {
                show: true,
                color: 'white',
              },
              itemStyle: {
                borderColor: '#6ad6ff',
                borderType: 'solid',
                borderWidth: 0.5
              },
              emphasis: {
                label: {
                  color: 'white',
                  fontWeight: 600,
                },
                itemStyle: {
                  areaColor: '#6ad6ff'
                }
              },
            }
          ]`
        }
      }
    }
  ]
}]
