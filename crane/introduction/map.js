module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [410, 160],
  props: {
    $style: {
      width: '1100px',
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
