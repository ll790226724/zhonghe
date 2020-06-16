const digitals = require('./digitals')
const mapTabs = require('./map_tabs')
const highTalentsDemandChange = require('./high_talents_demand_change')
const highTalentsDistribution = require('./high_talents_distribution')
const shortageTalentsDistribution = require('./shortage_talents_distribution')
const areaShortageChange = require('./area_shortage_change')
const map = require ('./map')

module.exports = {
  route: {
    name: 'key_talents',
    path: 'keyTalents'
  },
  title:'重点人才专题',
  states: [
    {
      id: 'types',
      value: [
        {index: 1, name: '学术型人才'},
        {index: 2, name: '工程型人才'},
        {index: 3, name: '技能型人才'},
        {index: 4, name: '技术型人才'},
      ]
    },
    {
      id: 'currentKeyword',
      value: ''
    },
    {
      id: 'currentTalentType',
      value: ''
    },
    {
      id: 'currentDemandType',
      value: ''
    },
    {
      id: 'mapTabCurrent',
      value: 'MAP_TAB_NAVS[0]'
    },
    {
      id: 'mapTabNavs',
      value: 'MAP_TAB_NAVS'
    },
    {
      id: 'time',
      value: ''
    },
    {
      id: 'dateRange',
      value: [],
    },
    {
      id: 'currentShortageType',
      value: ''
    },
    {
      id: 'selectOptions',
      value: [{label: '福州', uuid: 'fuzhou'}, {label: '宁德', uuid: 'ningde'}, {label: '龙岩', uuid: 'longyan'}, {label: '莆田', uuid: 'putian'}, {label: '南平', uuid: 'nanping'}, {label: '三明', uuid: 'sanming'}, {label: '厦门', uuid: 'xiamen'}, {label: '漳州', uuid: 'zhangzhou'}, {label: '泉州', uuid: 'quanzhou'}]
    },
    {
      id: 'department',
      value: null,
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
      content: '重点人才专题',
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
      id: 'box-bg',
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
    ...digitals,
    ...mapTabs,
    ...highTalentsDemandChange,
    ...highTalentsDistribution,
    ...shortageTalentsDistribution,
    ...areaShortageChange,
    ...map
  ]
}
