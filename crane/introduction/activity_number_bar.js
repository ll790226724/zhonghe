
module.exports = {
  id: 'activity-number-bar',
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 762],
  exports: {
    results: 'results',
  },

  props: {
    // $url: "`/v1/components/5b59abd9-bf05-4161-b53f-9b8c6120551b/data?name=${craneStates.currentArea}`",
    // method: 'get',
    // $data: "[[]]",
    $style: {
      width: '400px',
      height: '270px'
    },
  },
  children: [
    {
      id: 'activity-number-bar-content',
      component: 'v-chart',
      // 'v-if': 'results',
      props: {
        $options: {
          $xAxis: {
            $axisLabel:{
              $rotate: 0,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
            $axisLine:{
              show: false
            }
          },
          $yAxis: {
            $axisLabel:{
              $rotate: 0,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
            splitNumber: 5,
            name: '件',
            $nameTextStyle: {
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
          },
          $series: {
            type: 'bar',
            barCategoryGap: '10%',
            itemStyle: {
              $normal: {
                $color: `new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#6ad6ff'
                  },
                  {
                    offset: 1,
                    color: '#117ea8'
                  }], false),`

              },
            },
            data: [120, 200, 150, 80, 70, 110, 130],
          },
        },
      },
    },
  ],
};
