module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [510, 261],
  props: {
    $style: {
      width: '900px',
      height: '698px'
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
