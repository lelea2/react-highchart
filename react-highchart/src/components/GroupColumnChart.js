import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  dateFormat,
  BASE_OPTIONS
} from './base';

class GroupColumnChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    const { data, categories } = this.props;
    const series = [];
    for (let i = 0; i < data.length; i++) {
      series.push({
        name: data[i].name,
        data: data[i].data,
        stack: data[i].name,
        color: data[i].color
      });
    }

    const options = {
      chart: {
        type: 'column'
      },
      xAxis: {
        categories: categories,
        labels: {
          enabled: true
        },
      },
      legend: {
        symbolRadius: 10,
        symbolWidth: 12
      },
      tooltip: {
        formatter: function() {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + Highcharts.numberFormat(this.y, 0) + '<br/>' +
            'Total: ' + Highcharts.numberFormat(this.point.stackTotal, 0);
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: series
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

export default GroupColumnChart;
