const map = require('./map')
const partProduction = require('./part_production_digital')
const talentNumber = require('./talent_number_digital')

module.exports = {
  route: {
    name: 'resources',
    path: ''
  },
  title: '全国人才资源态势总览',
  states: [
    {
      id: 'options',
      value: {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>人才数量（人）：{c}'
        },
        visualMap: {
          type:'piecewise',
          pieces: [
            {gt: 1500, label: '1500人及以上'},
            {gt: 1000, lte: 1500, label: '1000-1500人'},
            {gt: 100, lte: 999, label: '100-999人'},
            {gt: 10, lte: 99, label: '10-99人'},
            {gt: 1, lt: 9, label: '1-9人'}
          ],
          orient: 'horizontal',
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            type: 'map',
            mapType: 'Liuzhou',
            label: {
              show: true
            },
            data: [
              {name: '城中区', value: 4},
              {name: '柳东新区', value: 15},
              {name: '柳南区', value: 31},
              {name: '柳北区', value: 69},
              {name: '柳江区', value: 1440},
              {name: '柳城县', value: 4068},
              {name: '鹿寨县', value: 376},
              {name: '融安县', value: 45},
              {name: '融水苗族自治县', value: 55},
              {name: '三江侗族自治县', value: 2},
            ],
          }
        ]
      }
    }
  ],
  components: [
    map,

    // {
    //   id: 'background',
    //   component: 'img',
    //   position: [0, 0],
    //   props: {
    //     src: '/jinjiangwllz/images/bg.png'
    //   },
    // },

    {
      id: 'page-title',
      component: 'div',
      content: '全省人力资源态势总览',
      position: [750, 35],
      props: {
        $style: {
          color: '#fff',
          fontSize: '42px',
          $fontWeight: '600',
          textAlign: 'center',
        }
      }
    },

    {
      id: 'talent-index',
      component: 'div',
      position: [73, 262],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '人才指数综合分析',
    },

    {
      id: 'talent-education',
      component: 'div',
      position: [73, 704],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '人才学历层次',
    },

    {
      id: 'talent-industry',
      component: 'div',
      position: [1530, 46],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '人才流动行业排名',
    },

    {
      id: 'industry-talent',
      component: 'div',
      position: [1530, 388],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '行业人才占比',
    },

    {
      id: 'talent-demand',
      component: 'div',
      position: [1530, 704],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '各行业人才需求',
    },

    {
      id: 'talent-index-icon',
      component: 'div',
      position: [30, 265],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '  >>',
    },

    {
      id: 'talent-education-icon',
      component: 'div',
      position: [30, 707],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '  >>',
    },

    {
      id: 'talent-industry-icon',
      component: 'div',
      position: [1490, 49],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '  >>',
    },

    {
      id: 'industry-talent-icon',
      component: 'div',
      position: [1490, 391],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '  >>',
    },

    {
      id: 'talent-demand-icon',
      component: 'div',
      position: [1490, 707],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '  >>',
    },

    {
      id: 'demand-type-circle',
      component: 'div',
      position: [42, 364],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },

    },

    partProduction,
    talentNumber,
  ]
}
