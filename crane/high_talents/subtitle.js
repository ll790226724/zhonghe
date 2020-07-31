const { subtitle_text, subtitle_icon } = require('../share')
module.exports = [
  {
    id: 'talent-stock',
    position: [118, 230],
    ...subtitle_text,
    content: '人才存量',
  },
  {
    id: 'apply-route',
    position: [596, 230],
    ...subtitle_text,
    content: '申报途径',
  },
  {
    id: 'talent-type',
    position: [1046, 230],
    ...subtitle_text,
    content: '人才认定分类',
  },
  {
    id: 'talent-past',
    position: [596, 578],
    ...subtitle_text,
    content: '人才原来状况',
  },
  {
    id: 'talent-now',
    position: [1046, 578],
    ...subtitle_text,
    content: '人才现在情况',
  },
  {
    id: 'talent-abroad',
    position: [1496, 578],
    ...subtitle_text,
    content: '人才境内外分类',
  },
  {
    id: 'talent-stock-icon',
    position: [81, 232],
    ...subtitle_icon
  },
  {
    id: 'apply-route-icon',
    position: [559, 232],
    ...subtitle_icon
  },
  {
    id: 'talent-type-icon',
    component: 'div',
    position: [1009, 232],
    ...subtitle_icon
  },
  {
    id: 'talent-past-icon',
    position: [559, 580],
    ...subtitle_icon
  },
  {
    id: 'talent-now-icon',
    position: [1009, 580],
    ...subtitle_icon
  },
  {
    id: 'talent-abroad-icon',
    position: [1459, 580],
    ...subtitle_icon
  },
]
