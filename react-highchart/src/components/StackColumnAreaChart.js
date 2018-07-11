import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  BASE_OPTIONS,
  CHART_COLORS,
  CHART_GRADIENTS,
  dateFormat,
  labelFormat
} from './base';

class StackColumnAreaChart extends Component {

  super(props) {
    constructor(props);
  }

  generateData() {
    const { columnData, areaData } = this.props;
    const series = [];
    // first add area
    series.push({
      fillOpacity: 1,
      name: areaData.name,
      type: 'area',
      xAxis: 0,
      data: areaData.data,
      // showInLegend: false,
      color: CHART_GRADIENTS.greyGradient,
      lineColor: CHART_COLORS.grey
    });
    // then add columns
    for (let i = 0; i < columnData.length; i++) {
      series.push({
        name: columnData[i].name,
        type: 'column',
        xAxis: 1,
        legendIndex: columnData.length - i,
        // showInLegend: false,
        data: columnData[i].data,
        color: columnData[i].color
      });
    }
    const options = {
      plotOptions: {
        column: {
          marker: {
            enabled: false
          },
          stacking: 'normal',
          borderWidth: 0
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
            return labelFormat(this.value);
          }
        }
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        borderWidth: 0,
        reversed: true
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

export default StackColumnAreaChart;
