import { CHART_COLORS, CHART_GRADIENTS } from '../components';

const data = {
  barChart: {
    type: 'Name',
    data: [{
      name: 'Mobile calls',
      data: [12],
      color: CHART_COLORS.greyDark
    }, {
      name: 'Emails',
      data: [6],
      color: CHART_COLORS.accent
    }]
  },
  stackedBarChart: {
    colors: [CHART_COLORS.purple, CHART_COLORS.teal, CHART_COLORS.yellow],
    categories: ['Emails', 'Mobile calls', 'Trackable calls'],
    data: [{
      name: 'Product 1',
      data: [6, 4, 0]
    }, {
      name: 'Product 2',
      data: [10, 8, 18]
    }, {
      name: 'Product 3',
      data: [4, 2, 0]
    }]
  },
  sparkBarChart: {
    data: [{
      name: 'This week',
      y: 6,
      color: CHART_COLORS.accent
    }, {
      name: 'Last week',
      y: 4,
      color: CHART_COLORS.accentLight
    }]
  },
  lineChart: {
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
  },
  sparklineChart: {
    color: CHART_COLORS.grey,
    data: [12, 12, 23, 34, 45, 56, 16, 20]
  },
  donutChart: {
    category: 'Products',
    data: [{
      name: 'Product 1',
      y: 2140,
      color: CHART_COLORS.accent
    }, {
      name: 'Product 2',
      y: 550,
      color: CHART_COLORS.accentLight
    }, {
      name: 'Product 3',
      y: 450,
      color: CHART_COLORS.grey
    }]
  },
  stackedColumnChart: {
    data: [{
      name: 'Paid Impressions',
      data: [
        ['Aug 1', 2005],
        ['Aug 8', 2523],
        ['Aug 15', 1950],
        ['Aug 22', 1416],
        ['Aug 29', 1402],
        ['Sep 5', 1416],
        ['Sep 12', 1402],
        ['Sep 19', 1950]
      ],
      color: CHART_COLORS.purple
    }, {
      name: 'Impressions',
      data: [
        ['Aug 1', 1923],
        ['Aug 8', 2410],
        ['Aug 15', 144],
        ['Aug 22', 101],
        ['Aug 29', 494],
        ['Sep 5', 76],
        ['Sep 12', 76],
        ['Sep 19', 76]
      ],
      color: CHART_COLORS.yellow
    }],
    userOptions: {
      // plotOptions: {
      //   series: {
      //     events: {
      //       legendItemClick: function() { return false; }
      //     }
      //   }
      // }
    }
  },
  stackedColumnAreaChart: {
    columnData: [{
      name: 'Product 1',
      data: [
        [Date.UTC(2016, 4, 7), 50000],
        [Date.UTC(2016, 4, 8), 40000],
        [Date.UTC(2016, 4, 9), 20000],
        [Date.UTC(2016, 4, 10), 10000],
        [Date.UTC(2016, 4, 11), 20000],
        [Date.UTC(2016, 4, 12), 40000],
      ],
      color: CHART_COLORS.lightBlue
    }, {
      name: 'Product 2',
      data: [
        [Date.UTC(2016, 4, 7), 10000],
        [Date.UTC(2016, 4, 8), 20000],
        [Date.UTC(2016, 4, 9), 30000],
        [Date.UTC(2016, 4, 10), 20000],
        [Date.UTC(2016, 4, 11), 40000],
        [Date.UTC(2016, 4, 12), 50000],
      ],
      color: CHART_COLORS.purple
    }],
    areaData: {
      name: 'April 1 - 31st',
      data: [
        [Date.UTC(2016, 4, 1), 70000],
        [Date.UTC(2016, 4, 2), 70000],
        [Date.UTC(2016, 4, 3), 70000],
        [Date.UTC(2016, 4, 4), 70000],
        [Date.UTC(2016, 4, 5), 70000],
        [Date.UTC(2016, 4, 6), 70000],
      ]
    }
  },
  areaChart: {
    data: {
      name: 'Total leads',
      data: [
        [Date.UTC(2016, 3, 1), 60],
        [Date.UTC(2016, 3, 2), 70],
        [Date.UTC(2016, 3, 3), 75],
        [Date.UTC(2016, 3, 4), 80]
      ]
    },
    userOptions: {
      chart: {
        marginLeft: 0,
        marginRight: 0,
        height: 180
      },
      legend: {
        enabled: false
      }
    }
  },
  groupColumnChart: {
    categories: ['Northwest Realtors', 'Lake and Country', 'Territory NW', 'Valley Homes'],
    data: [{
      name: 'Total listings',
      data: [2800, 2500, 4000, 1500],
      color: CHART_COLORS.purple
    }, {
      name: 'Total search results',
      data: [15, 20, 35, 25],
      color: CHART_COLORS.orange
    }, {
      name: 'Listing details views',
      data: [15, 20, 35, 25],
      color: CHART_COLORS.pink
    }, {
      name: 'Listing inquiries',
      data: [15, 20, 35, 25],
      color: CHART_COLORS.lightBlue
    }]
  },
  lineAreaChart: {
    lineData: {
      name: 'Apr 1 - Apr 31, 2016',
      data: [
        [Date.UTC(2016, 4, 1), 70000],
        [Date.UTC(2016, 4, 2), 60000],
        [Date.UTC(2016, 4, 3), 65000],
        [Date.UTC(2016, 4, 4), 70000],
        [Date.UTC(2016, 4, 5), 80000]
      ]
    },
    areaData: {
      name: 'Apr 1 - Apr 31, 2016',
      data: [
        [Date.UTC(2016, 3, 1), 60000],
        [Date.UTC(2016, 3, 2), 70000],
        [Date.UTC(2016, 3, 3), 75000],
        [Date.UTC(2016, 3, 4), 80000],
        [Date.UTC(2016, 3, 5), 70000]
      ]
    }
  }
};

module.exports = data;