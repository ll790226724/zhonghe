const map = require('./map')
const table = require('./table')
const donut = require('./donut')
const partProduction = require('./part_production_digital')
const talentNumber = require('./talent_number_digital')
const talentAge = require('./talent_age_index_digital')
const talentEducation = require('./talent_edution_index_digital')
const talentIndustry = require('./talent_industry_index_digital')
const talentQuality = require('./talent_quality_index_digital')
const talentRank = require('./talent_rank_index_digital')
const talentSynthesis = require('./talent_synthesis_index_digital')
const rank = require('./rank')
const verticalBar = require('./vertical_bar')

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
    {
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/static/images/Bg.png'
      },
    },
    map,
    table,
    donut,
    {
      id: 'title-bg',
      component: 'img',
      position: [607, 0],
      props: {
        $style: {
          width: '701px',
          height: '123px',
        },
        src: '/static/images/Title-Bg.png'
      },
    },

    {
      id: 'box-bg',
      component: 'img',
      position: [10, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/static/images/Box-Bg.png'
      },
    },

    {
      id: 'right-box-bg',
      component: 'img',
      position: [1471, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/static/images/Box-Bg.png'
      },
    },

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
      position: [38, 265],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'talent-education-icon',
      component: 'div',
      position: [38, 707],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'talent-industry-icon',
      component: 'div',
      position: [1498, 49],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'industry-talent-icon',
      component: 'div',
      position: [1498, 391],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'talent-demand-icon',
      component: 'div',
      position: [1498, 707],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'value-circle',
      component: 'div',
      position: [104, 79],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'number-circle',
      component: 'div',
      position: [104, 159],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'education-circle',
      component: 'div',
      position: [64, 364],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'rank-circle',
      component: 'div',
      position: [264, 364],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'age-circle',
      component: 'div',
      position: [64, 472],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'industry-circle',
      component: 'div',
      position: [264, 472],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'quality-circle',
      component: 'div',
      position: [64, 580],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'synthesis-circle',
      component: 'div',
      position: [264, 580],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#367391',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'age-bg',
      component: 'div',
      position: [40, 424],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'education-bg',
      component: 'div',
      position: [240, 324],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'industry-bg',
      component: 'div',
      position: [40, 432],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'number-bg',
      component: 'div',
      position: [240, 432],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'quality-bg',
      component: 'div',
      position: [40, 540],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'synthesis-bg',
      component: 'div',
      position: [240, 540],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'departments-loader',
      component: '@byzanteam/vis-components/data-loader',
      position: [929, 125],
      exports: {
        results: 'results',
      },
      props: {
        // $url: "`/v1/components/d9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
        // method: 'get',
      },
      children: [
        {
          id: 'departments-select',
          component: '@byzanteam/vis-components/vis-select',
          props: {
            // 'v-if': 'results',
            // $options: 'results.map( (item, index) => { return {label: item[0], uuid: index } } )',
            $options: "[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]",
            'v-model': 'craneStates.department',
            placeholder: '福州',
          },
        },
      ],
    },

    partProduction,
    talentNumber,
    talentAge,
    talentEducation,
    talentIndustry,
    talentQuality,
    talentRank,
    talentSynthesis,
    rank,
    verticalBar,
  ]
}
