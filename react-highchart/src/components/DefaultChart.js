import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  BASE_OPTIONS
} from './base';

class DefaultChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const options = {
      title: {
        text: 'My chart'
      },
      series: [{
        name: 'Search results',
        data: [
          [Date.UTC(2016, 4, 1), 23],
          [Date.UTC(2016, 4, 2), 50],
          [Date.UTC(2016, 4, 3), 69],
          [Date.UTC(2016, 4, 4), 32],
          [Date.UTC(2016, 4, 5), 89],
          [Date.UTC(2016, 4, 6), 100],
          [Date.UTC(2016, 4, 7), 130]
        ]
      }]
    };
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    );
  }
}

export default DefaultChart;
