import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  BASE_OPTIONS
} from './base';

class SparkBarChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    const { data } = this.props;
    const categories = [];
    for (let i=0; i < data.length; i++) {
      categories.push(data[i].name);
    }
    const options = {
      chart: {
        type: 'bar',
        borderWidth: 0
      },
      xAxis: {
        categories: categories,
        labels: {
          enabled: true,
          style: {
            fontSize: '14px',
            fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
            color: '#999'
          }
        },
        tickWidth: 0,
        lineColor: 'transparent'
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
        bar: {
          dataLabels: {
            enabled: false
          }
        },
        series: {
          pointPadding: 0.1,
          groupPadding: 0,
          dataLabels: {
            allowOverlap: true
          }
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

export default SparkBarChart;