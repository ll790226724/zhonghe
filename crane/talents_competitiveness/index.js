const map = require('./map')
const table = require('./table')
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
    table,
    digital
  ]
}
