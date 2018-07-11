import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  dateFormat,
  BASE_OPTIONS,
  CHART_COLORS,
  CHART_GRADIENTS
} from './base';

class LineAreaChart extends Component {

  constructor(props) {
    super(props);
  }

  generateData() {
    const { lineData, areaData } = this.props;
    console.log(lineData, areaData);
    const options = {
      plotOptions: {
        line: {
          marker: {
            enabled: false
          }
        },
        area: {
          marker: {
            enabled: false
          }
        }
      },
      xAxis: [{
        type: 'datetime',
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
          enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
      }, {
        type: 'datetime',
        minPadding: 0,
        maxPadding: 0,
        labels: {
          formatter: function() {
            return dateFormat(this.value);
          },
          style: {
            color: '#767676',
            fontSize: '14px'
          }
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
        name: areaData.name,
        // showInLegend: false,
        type: 'area',
        xAxis: 0,
        data: areaData.data,
        color: CHART_GRADIENTS.greyGradient,
        lineColor: CHART_COLORS.grey
      }, {
        name: lineData.name,
        // showInLegend: false,
        xAxis: 1,
        data: lineData.data,
        color: (lineData.color) ? lineData.color : CHART_COLORS.darkOrange
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

export default LineAreaChart;
