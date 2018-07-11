import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  BASE_OPTIONS
} from './base';

class SparklineChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    const { data, color } = this.props;
    const options = {
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        type: 'area',
        margin: [2, 0, 2, 0],
        width: 80,
        height: 40,
        style: {
          overflow: 'visible'
        },
        skipClone: true
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        series: {
          color: color,
          animation: false,
          allowPointSelect: false,
          lineWidth: 1,
          shadow: false,
          states: {
            hover: {
              enabled: false
            }
          },
          marker: {
            enabled: false
          },
          fillOpacity: 0
        },
        column: {
          negativeColor: '#910000',
          borderColor: 'silver'
        }
      },
      series: [{
        data: data
      }]
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

export default SparklineChart;
