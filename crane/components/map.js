module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [0, 0],
  children: [
    {
      component: 'v-chart',
      props: {
        $options: 'craneStates.options'
      }
    }
  ]
}
