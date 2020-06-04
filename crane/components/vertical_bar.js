const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'demand-vertical-bar',
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
      id: 'demand-vertical-bar-content',
      component: 'v-chart',
      props: {
        // 'v-if': 'results',
        $options: {
          $grid: {
            top: '12%',
            right: '1%'
          },
          $xAxis: {
            $axisLabel:{
              $rotate: -315,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
            $axisLine:{
              $show: false
            },
            $data: "['电子商务', '广告营销', '分类消息', '社交网络', '信息安全', '互联网金融', '企业服务', '互联网']"
          },
          $yAxis: {
            $axisLine: {
              show: false
            },
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
            name: '人',
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
            $data: "[120, 200, 150, 80, 70, 110, 130, 102]"
          },
          $tooltip: {
            trigger: 'axis',
            $axisPointer: {
              type: 'shadow',
            },
            $formatter: "demandTooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        },
      },
    },
  ],
};
