const jobSelect = require('./job_select')
const singleDigital = require('./single_digital')
const talentsExponent = require('./talents_exponent')
const lineChart = require('./line')

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
      id: 'jobs',
      value: [
        {index: 1, name: '高级前端工程师'},
        {index: 2, name: 'java工程师'},
        {index: 3, name: '用户体验设计师'},
        {index: 4, name: '产品经理'},
        {index: 5, name: '产品助理'},
        {index: 6, name: '智能硬件'},
        {index: 7, name: '生活服务'}
      ]
    },
    {
      id: 'tabNavs',
      value: 'TAB_NAVS'
    },
    {
      id: 'tabCurrent',
      value: 'TAB_NAVS[0]'
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
        src: '/static/images/Box-Bg.png'
      },
    },
    jobSelect,
    ...singleDigital,
    ...talentsExponent,
    ...lineChart
  ]
}
