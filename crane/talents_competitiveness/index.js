const map = require('./map')
const table = require('./table')
const talentsIndicatorsSummary = require('./talents_indicators_summary')
const radar = require('./radar')
const digital = require('./force_digital')

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
    },
    {
      id: 'types',
      value: [
        {index: 1, name: '四川省'},
        {index: 2, name: '重庆市'},
        {index: 3, name: '青海省'},
        {index: 4, name: '浙江省'},
        {index: 5, name: '湖南省'},
        {index: 6, name: '湖北省'},
        {index: 7, name: '甘肃省'},
        {index: 8, name: '山东省'},
        {index: 9, name: '江苏省'},
        {index: 10, name: '江西省'},
        {index: 11, name: '福建省'},
        {index: 12, name: '贵州省'},
        {index: 13, name: '陕西省'},
        {index: 14, name: '山西省'},
      ]
    },
    {
      id: 'currentProvince',
      value: ''
    },
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
    radar,
    {
      id: 'province-talent-number',
      component: 'div',
      position: [74, 46],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '省域人才指标汇总',
    },
    {
      id: 'province-talent-number-icon',
      component: 'div',
      position: [48, 49],
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
      id: 'ten-number',
      component: 'div',
      position: [1536, 216],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '十大指标汇总',
    },
    {
      id: 'ten-number-icon',
      component: 'div',
      position: [1512, 219],
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
      id: 'force-circle',
      component: 'div',
      position: [1588, 89],
      props: {
        $style: {
          height:'10px',
          width: '10px',
          borderRadius: '10px',
          borderWidth: '1px',
          borderColor: '#6ad6ff',
          borderStyle: 'solid',
        }
      },
    },
    {
      id: 'area-select',
      component: 'iview/Select',
      position: [1500, 577],
      props: {
        placeholder: '选择省市',
        class: 'map-select',
        $style: {
          width: '382px',
        },
        'v-model': 'craneStates.currentProvince'
      },
      children: [
        {
          component: 'iview/Option',
          vfor: {
            data: "craneStates.types",
            exports: {item: 'item', index: 'key'}
          },
          props: {
            $value: "item.index",
            $label: "item.name"
          },
          content: '{{item.name}}',
        }
      ]
    },
    table,
    digital
  ]
}
