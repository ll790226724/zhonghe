module.exports = {
  component: 'iview/date-picker',
  position: [40, 50],
  props: {
    class: 'supply-datepicker',
    $style: {
      width: '380px',
      height: '50px'
    },
    'v-model': 'craneStates.year',
    type: 'year',
    placeholder: '选择时间'
  }
}
