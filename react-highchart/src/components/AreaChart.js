import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  BASE_OPTIONS,
  CHART_COLORS,
  CHART_GRADIENTS
} from './base';

class AreaChart extends Component {

  super(props) {
    constructor(props);
  }

  generateData() {
    const { data, userOptions } = this.props;
    const options = {
      plotOptions: {
        area: {
          marker: {
            enabled: false
          }
        }
      },
      xAxis: [{
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%b %e',
          week: '%b %e'
        }
      }],
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        borderWidth: 0,
        reversed: true
      },
      series: [{
        fillOpacity: 1,
        name: data.name,
        type: 'area',
        xAxis: 0,
        data: data.data,
        color: CHART_COLORS.accentGradient,
        lineColor: CHART_COLORS.accent
      }]
    };
    return {
      ...BASE_OPTIONS,
      ...options,
      ...userOptions
    };
  }

  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={this.generateData()}
      />
    );
  }

}

export default AreaChart;