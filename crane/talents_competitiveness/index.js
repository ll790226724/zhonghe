const map = require('./map')
const table = require('./table')
const talentsIndicatorsSummary = require('./talents_indicators_summary')
const radar = require('./radar')

module.exports = {
  route: {
    name: 'talents_competitiveness',
    path: 'talents-competitiveness'
  },
  title:'省域人才综合竞争力',
  states: [
    {
      id: 'province',
      value: ''
    },
    {
      id: 'city',
      value: ''
    },
    {
      id: 'indicators',
      value: ['人才数量指标', '人才质量指标', '人才结构指标', '人才投入指标', '人才平台指标', '人才生活指标', '人才环境指标', '人才效能指标', '人才效益指标', '人才发展指标']
    },
    {
      id: 'indicator',
      value: ''
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
      id: 'page-title',
      component: 'div',
      content: '省域人才综合竞争力',
      position: [833, 27],
      props: {
        $style: {
          color: '#fff',
          fontSize: '42px',
          $fontWeight: '600',
          textAlign: 'center',
        }
      }
    },
    ...map,
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
    table,
    ...talentsIndicatorsSummary,
    radar
  ]
}
