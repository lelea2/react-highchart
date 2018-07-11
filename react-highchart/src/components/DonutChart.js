import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  dateFormat,
  BASE_OPTIONS
} from './base';

class DonutChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    const { category, data } = this.props;
    const options = {
      chart: {
        type: 'pie'
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle'
      },
      series: [{
        name: category,
        data: data,
        size: '100%',
        innerSize: '92%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }
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

export default DonutChart;
