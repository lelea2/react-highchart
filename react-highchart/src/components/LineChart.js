import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  dateFormat,
  BASE_OPTIONS
} from './base';

class LineChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    // const { data } = this.props;
    // console.log(this.props);
    const options = {
      chart: {
        type: 'line'
      },
      series: [this.props],
      xAxis: [{
        type: 'datetime',
        minPadding: 0,
        maxPadding: 0,
        labels: {
          formatter: function() {
            return dateFormat(this.value)
          }
        }
      }],
      plotOptions: {
        line: {
          marker: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      }
    };
    return {
      ...BASE_OPTIONS,
      ...options
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

export default LineChart;
