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
    fontSize: '36px',
    color: '#FFFFFF',
    fontWeight: 400,
    fontFamily: 'Oswald-Regular',
  },
};

exports.total_count_digital_style = {
  $titleStyle: {
    color: '#2E2E2E',
    fontSize: '14px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '26px',
    color: '#2E2E2E',
    fontFamily: 'Oswald',
    fontWeight: 400,
    format: '11.11',
    letterSpacing: '0.6',

  },
  $suffixStyle: {
    fontSize: '14px',
    color: '#8F919F',
    fontWeight: 400,
  },
  $options: {
    separator: ',',
    decimalPlaces: 2,
  }
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
      fill: '#007AFE',
      name: 'circle-small',
      $size: 14
    }
  },
  $tooltipOptions: {
    background: 'rgba(60, 71, 89, 0.9)',
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
