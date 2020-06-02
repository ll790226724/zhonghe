
module.exports = {
  id: 'high-level-talent-bar',
  component: '@byzanteam/vis-components/data-loader',
  position: [30, 783],
  exports: {
    results: 'results',
  },

  props: {
    // $url: "`/v1/components/5b59abd9-bf05-4161-b53f-9b8c6120551b/data?name=${craneStates.currentArea}`",
    // method: 'get',
    // $data: "[[]]",
    $style: {
      width: '400px',
      height: '250px'
    },
  },
  children: [
    {
      id: 'high-level-talent-content',
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
              $show: false
            },
            $data: "['周一', '周二', '周三', '周四', '周五', '周六', '周日',]"
          },
          $yAxis: {
            $axisLabel:{
              $rotate: 0,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
            $splitLine: {
              $show: false
            },
            $splitNumber: 5,
            name: '件',
            $nameTextStyle: {
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
          },
          $series: {
            type: 'bar',
            $barWidth: 5,
            barCategoryGap: '10%',
            itemStyle: {
              $normal: {
                $color: `new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#117ea8'
                  },
                  {
                    offset: 1,
                    color: '#6ad6ff'
                  }], false),`
              },
            },
            $data: "[120, 200, 150, 80, 70, 110, 130]"
          },
          $tooltip: {
            trigger: 'axis',
            $axisPointer: {
              type: 'shadow',
            },
            $formatter: "tooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        },
      },
    },
  ],
};
