module.exports = [
  {
    id: 'talent-index-icon',
    component: 'div',
    position: [40, 305],
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
    id: 'talent-demand',
    component: 'div',
    position: [74, 302],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '需求岗位排名',
  },
  {
    component: '@byzanteam/vis-components/brick-tabs',
    position: [110, 352],
    directive: {
      model: 'craneStates.tabCurrent',
    },
    props: {
      $tabNavs: 'craneStates.tabNavs',
      $activeTab: 'craneStates.tabCurrent'
    }
  }
]
