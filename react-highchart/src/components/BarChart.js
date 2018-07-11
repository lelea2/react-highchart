import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  BASE_OPTIONS
} from './base';

class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    });
  }

  generateData() {
    const { type, data } = this.props;
    const options = {
      chart: {
        type: 'bar'
      },
      xAxis: {
        categories: [type]
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
      },
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

export default BarChart;
