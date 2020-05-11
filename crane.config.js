const resources = require('./crane/components')

module.exports = {
  // i18n 配置
  name: 'humanResources',
  // 屏幕默认尺寸, 所有页面都继承该值，页面可单独设置
  size: [1920, 1080],
  requestSettings: {
    baseURL: 'http://www.pdjxj.com/vis-backend/',
  },
  modules: {
    '@byzanteam/vis-components': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/index.css',
      },
    },

    '@byzanteam/graphite': {
      version: 'latest',
    },

    '@byzanteam/carbonium': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/carbonium.css',
      },
    },
  },
  // 页面
  pages: [
    resources,
  ],
}
