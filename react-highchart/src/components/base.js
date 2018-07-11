import Highcharts from 'highcharts';
import * as moment from 'moment';

const labelFormat = (value) => {
  let ret;
  const numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'];
  let i = 6;
  if (value >= 1000) {
    while (i-- && ret === undefined) {
      let multi = Math.pow(1000, i + 1);
      if (value >= multi && numericSymbols[i] !== null) {
        ret = (value / multi) + numericSymbols[i];
      }
    }
  }
  return (ret ? ret : value);
};

const dateFormat = (value) => {
  return moment.utc(value).format('M/DD');
};

const options = {
  CHART_COLORS: {
    success: '#3FC478',
    info: '#6DB8ED',
    accent: '#6759A6',
    accentLight: '#A09CC7',
    grey: '#CCCCCC',
    greyDark: '#333333',
    orange: '#FF9A52',
    orangeLight: '#FFE0CB',
    darkOrange: "#fd9a5a",
    yellowOrange: '#fEC962',
    purple: '#92A0E5',
    pink: '#EE7DAC',
    lightBlue: '#7ECDF1',
    purpleLight: '#DEE2F7',
    yellow: '#FFCA58',
    teal: '#7BCDF3',
    green: '#B4D478'
  },
  CHART_GRADIENTS: {
    greyGradient: {
      linearGradient: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 1
      },
      stops: [
        [0, '#e0dfdf'],
        [1, '#fbfbfb']
      ],
    },
    accentGradient: {
      linearGradient: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 1
      },
      stops: [
        [0, 'rgba(103,89,166,0.1)'],
        [1, 'rgba(255,255,255,0.1)']
      ],
    }
  },
  BASE_OPTIONS: {
    credits: {
      enabled: false
    },
    chart: {
      style: {
        fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
        fontSize: '20px'
      },
    },
    exporting: {
      enabled: false
    },
    title: {
      text: '',
    },
    subtitle: {
      text: ''
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: ''
      },
      labels: {
        formatter: function() {
          return labelFormat(this.value);
        },
        style: {
          color: '#767676',
          fontSize: '14px'
        }
      },
      stackLabels: {
        style: {
          fontSize: '14px',
          fontWeight: '400'
        }
      }
    },
    xAxis: {
      allowDecimals: false,
      title: {
        text: ''
      },
      labels: {
        enabled: false,
        style: {
          color: '#767676',
          fontSize: '14px'
        }
      }
    },
    legend: {
      symbolRadius: 10,
      symbolWidth: 12,
      itemMarginTop: 5,
      itemMarginBottom: 5,
      useHTML: true,
      itemStyle: {
        fontSize: '14px',
        fontWeight: '400'
      }
    }
  },
  dateFormat,
  labelFormat
};

module.exports = options;
