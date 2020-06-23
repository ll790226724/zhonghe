const jobSelect = require('./job_select')
const datePicker = require('./date_picker')
const singleDigital = require('./single_digital')
const talentsExponent = require('./talents_exponent')
const salaryAnalysis = require('./salary_analysis')
const industriesDemandRanking = require('./industries_demand_ranking')
const talentsDemandChange = require('./talents_demand_change')
const degreeAnalysis = require('./degree_analysis')
const map = require('./map')

module.exports = {
  route: {
    name: 'supply',
    path: 'supply'
  },
  title:'人才供需专题',
  states: [
    {
      id: 'currentJob',
      value: ''
    },
    {
      id: 'inputQuery',
      value: ''
    },
    {
      id: 'year',
      value: ''
    },
    {
      id: 'department',
      value: {}
    },
    {
      id: 'dateRange',
      value: []
    },
    {
      id: 'tabNavs',
      value: 'TAB_NAVS'
    },
    {
      id: 'tabCurrent',
      value: 'TAB_NAVS[0]'
    },
    {
      id: 'chartTabNavs',
      value: 'CHART_TAB_NAVS'
    },
    {
      id: 'chartTabCurrent',
      value: 'CHART_TAB_NAVS[0]'
    },
    {
      id: 'selectedArea',
      value: {}
    }
  ],
  components: [
    {
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/hxcr/images/Bg.png'
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
        src: '/hxcr/images/Title-Bg.png'
      },
    },
    {
      id: 'page-title',
      component: 'div',
      content: '人才供需专题',
      position: [607, 27],
      props: {
        $style: {
          width: '701px',
          color: '#fff',
          fontSize: '42px',
          $fontWeight: '600',
          textAlign: 'center',
        }
      }
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
        src: '/hxcr/images/Box-Bg.png'
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
        src: '/hxcr/images/Box-Bg.png'
      },
    },
    jobSelect,
    datePicker,
    ...map,
    ...singleDigital,
    ...talentsExponent,
    ...salaryAnalysis,
    ...industriesDemandRanking,
    ...talentsDemandChange,
    ...degreeAnalysis
  ]
}
