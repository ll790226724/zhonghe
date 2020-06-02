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
      id: 'map',
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $series: "[{type: 'map', mapType: 'Liuzhou', label: {show: true, color: 'white'}, itemStyle: {areaColor: 'rgba(106, 214, 255, .1)', borderColor: '#6ad6ff', borderType: 'solid', borderWidth: 0.5}, emphasis: {label: {color: 'white',fontWeight: 600}, itemStyle: {areaColor: '#6ad6ff'}}}]"
        }
      }
    }
  ]
}
