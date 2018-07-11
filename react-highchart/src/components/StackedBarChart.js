import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  BASE_OPTIONS
} from './base';

class StackedBarChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    const { categories, colors, data } = this.props;
    const options = {
      chart: {
        type: 'bar',
        borderWidth: 0
      },
      xAxis: {
        categories,
        labels: {
          enabled: true,
          useHTML: true
        },
      },
      yAxis: {
        min: 0,
        labels: {
          step: 2 // this will show every second label
        },
        title: {
          enabled: false
        },
        stackLabels: {
          enabled: true
        }
      },
      legend: {
        reversed: true
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            style: {
              textShadow: false
            },
            formatter: () => {
              if (this.y !== 0) {
                return this.y;
              }
            }
          }
        },
        series: {
          stacking: 'normal'
        }
      },
      colors: colors,
      series: data
    };
    return {
      ...BASE_OPTIONS,
      ...options,
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

export default StackedBarChart;
