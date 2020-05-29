module.exports = {
  component: 'element-ui/date-picker',
  position: [40, 116],
  props: {
    $style: {
      width: '380px',
      height: '50px'
    },
    'v-model': 'craneStates.year',
    type: 'year',
    placeholder: '选择时间'
  }
}
