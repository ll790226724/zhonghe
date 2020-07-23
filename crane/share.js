exports.normal_digital_style = {
  $titleStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $prefixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $suffixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '32px',
    color: '#6ad6ff',
    fontWeight: 400,
    fontFamily: 'Oswald-Regular',
    format: '11',
    letterSpacing: '2.4px',
  },
};

exports.small_digital_style = {
  $prefixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $suffixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $titleStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '32px',
    color: '#6ad6ff',
    fontWeight: 400,
    fontFamily: 'Oswald-Regular',
    format: '11',
    letterSpacing: '2.4px',
  },
};

const chartTooltipOptions = {
  $tooltip: {
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $notation: {
      fill: '#367391',
      name: 'circle-small',
      $size: 14
    }
  },
  $tooltipOptions: {
    background: '#566374f0',
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $title:{
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
  }
};
exports.chartTooltipOptions = chartTooltipOptions;

exports.page_title_content = {
  component: 'div',
  position: [733, 38],
  events: {
    'click': {
      actions: ["openNavigator()"]
    }
  },
  props: {
    $style: {
      cursor: 'pointer',
      width: '454px',
      color: '#fff',
      fontSize: '42px',
      $fontWeight: '600',
      textAlign: 'center',
      $lineHeight: 1,
    }
  }
}
