import React, { Component } from 'react';
import { StProjectMeta, StMainContainer, StFullScreen } from './styled-ui';
import {
  DefaultChart,
  BarChart,
  StackedBarChart,
  SparkBarChart,
  LineChart,
  SparklineChart,
  DonutChart,
  StackColumnChart,
  StackColumnAreaChart,
  AreaChart,
  GroupColumnChart,
  LineAreaChart
} from '../components';
import {
  barChart,
  stackedBarChart,
  sparkBarChart,
  lineChart,
  sparklineChart,
  donutChart,
  stackedColumnChart,
  stackedColumnAreaChart,
  areaChart,
  groupColumnChart,
  lineAreaChart
} from './data';

console.log(BarChart, StackedBarChart, SparkBarChart, LineChart);

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StMainContainer>
        <StProjectMeta>
          <h1>React Highchart</h1>
          <hr />
          <StFullScreen id="default-example">
            <DefaultChart />
          </StFullScreen>
          <StFullScreen id="bar-example">
            <h2>Bar Chart</h2>
            <BarChart {...barChart} />
          </StFullScreen>
          <hr />
          <StFullScreen id="stackedbar-example">
            <h2>StackedBar Chart</h2>
            <StackedBarChart {...stackedBarChart} />
          </StFullScreen>
          <StFullScreen id="sparkbar-example">
            <h2>SparkBar Chart</h2>
            <SparkBarChart {...sparkBarChart} />
          </StFullScreen>
          <StFullScreen id="line-example">
            <h2>Line Chart</h2>
            <LineChart {...lineChart} />
          </StFullScreen>
          <StFullScreen id="sparkline-example">
            <h2>Sparkline Chart</h2>
            <SparklineChart {...sparklineChart} />
          </StFullScreen>
          <StFullScreen id="sparkline-example">
            <h2>Donut Chart</h2>
            <DonutChart {...donutChart} />
          </StFullScreen>
          <StFullScreen id="stackcolumn-example">
            <h2>StackColumn Chart</h2>
            <StackColumnChart {...stackedColumnChart} />
          </StFullScreen>
          <StFullScreen id="stackcolumnarea-example">
            <h2>StackColumnArea Chart</h2>
            <StackColumnAreaChart {...stackedColumnAreaChart} />
          </StFullScreen>
          <StFullScreen id="area-example">
            <h2>Area Chart</h2>
            <AreaChart {...areaChart} />
          </StFullScreen>
          <StFullScreen id="groupcolumn-example">
            <h2>GroupColumn Chart</h2>
            <GroupColumnChart {...groupColumnChart} />
          </StFullScreen>
          <StFullScreen id="linearea-example">
            <h2>LineArea Chart</h2>
            <LineAreaChart {...lineAreaChart} />
          </StFullScreen>
        </StProjectMeta>
      </StMainContainer>
    );
  }
}

export default App;
