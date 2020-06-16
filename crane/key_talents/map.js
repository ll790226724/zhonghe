module.exports = [
  {
    component: '@byzanteam/vis-components/brick-radio-button-select',
    position: [929, 125],
    props: {
      $options: "craneStates.selectOptions",
      'v-model': 'craneStates.department',
      placeholder: '福州',
    }
  },
  {
  component: '@byzanteam/vis-components/data-loader',
  position: [410, 160],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`${requestUrl}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
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
              mapType: craneStates.department.uuid,
              data: results.map(item => {return {name: item[1], value: item[0]}}),
              label: {
                show: true,
                fontSize: 14,
                color: 'white'
              },
              itemStyle: {
                areaColor: 'rgba(106, 214, 255, .05)',
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
