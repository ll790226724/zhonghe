const jobSelect = require('./job_select')

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
    }
  ],
  components: [
    jobSelect
  ]
}
