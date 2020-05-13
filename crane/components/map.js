module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [510, 160],
  props: {
    $style: {
      width: '900px',
      height: '900px'
    }
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options: 'craneStates.options'
      }
    }
  ]
}
