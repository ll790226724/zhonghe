const map = require('./map')

module.exports = {
  route: {
    name: 'resources',
    path: ''
  },
  title: '全国人才资源态势总览',
  states: [
    {
      id: 'options',
      value: []
    }
  ],
  components: [
    map
  ]
}
