const {small_digital_style} = require('../share')

const digital_style = {
  ...small_digital_style,
  letterSpacing: '0.8px',
  $suffixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
}

module.exports = [
  {
    component: 'div',
    position: [40, 49],
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
    content: '高层次人才供需地图',
  },
  {
    component: 'div',
    position: [30, 88],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [119, 117],
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
    component: '@byzanteam/vis-components/data-loader',
    position: [145, 94],
    props: {
      $url: "`/v1/components/24b74ddd-39de-493f-84ab-9d87fcf23fee/data`",
      method: 'get',
      $data: "[[0]]",
    },
    exports: {
      results: 'results',
    },
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '人才数量统计',
            $digital: "results ? results[0][0] : 0",
            suffix: '人',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '196px',
            height: '39px'
          },
          ...digital_style
        }
      },
    ]
  },
  {
    component: 'div',
    position: [30, 154],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [119, 183],
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
    component: '@byzanteam/vis-components/data-loader',
    position: [145, 160],
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '人才引进统计',
            $digital: 0,
            suffix: '次',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '158px',
            height: '39px'
          },
          ...digital_style
        }
      },
    ]
  },
  {
    component: 'div',
    position: [1504, 49],
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
    component: 'div',
    position: [1536, 46],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '区域紧缺人才地图',
  },
  {
    component: 'div',
    position: [1490, 128],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [1588, 157],
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
    component: '@byzanteam/vis-components/data-loader',
    position: [1614, 134],
    props: {
      $url: "`/v1/components/29b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}&year=${this.craneStates.year ? this.craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
      method: 'get',
      $data: "[[0]]",
    },
    exports: {
      results: 'results',
    },
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '紧缺人才数量',
            $digital: "results ? results[0][0] : 0",
            suffix: '人',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '278px',
            height: '39px'
          },
          ...digital_style,
        }
      },
    ]
  }
]
