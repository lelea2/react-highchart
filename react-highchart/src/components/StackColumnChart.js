import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  dateFormat,
  labelFormat,
  BASE_OPTIONS
} from './base';

class StackColumnChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    const { data, userOptions } = this.props;
    const series = [];
    // Add columns
    for (let i = 0; i < data.length; i++) {
      series.push({
        name: data[i].name,
        type: 'column',
        data: data[i].data,
        color: data[i].color
      });
    }
    const options = {
      chart: {
        type: 'column',
      },
      plotOptions: {
        column: {
          marker: {
            enabled: false
          },
          stacking: 'normal',
          borderWidth: 0
        }
      },
      xAxis: [{
        minPadding: 0,
        maxPadding: 0,
        type: 'datetime',
        labels: {
          formatter: function() {
            return dateFormat(this.value);
          }
        }
      }],
      yAxis: {
        title: {
          text: ''
        },
        allowDecimals: false,
        labels: {
          formatter: function() {
            return labelFormat(this.labelFormat);
          }
        }
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        borderWidth: 0
      },
      series: series
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

export default StackColumnChart;
