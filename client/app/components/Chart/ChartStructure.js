import React, {Component} from 'react';
const d3 = require('../../vendor/d3')
const c3 = require('../../vendor/c3')

export default class ChartStructure extends Component {
    componentDidMount() {
      this._updateChart();
    }
    componentDidUpdate() {
      this._updateChart();
    }
    _updateChart() {
      const chart = c3.generate({
        bindto: '#chartStructure',
        data: {
          columns: [['Трансферти з державного бюджету', 88.13],
          ['Податкові надходження', 9.41],
          ['Неподаткові надходження', 1.60],
          ['Трансферти з місцевих бюджетів', 0.86],
          ],
          type: "donut"
        },
        color: {
            pattern: ['#516696', '#516696', '#516696', '#516696'], // the three color levels for the percentage values.
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
      });
    }
    render() {
      return <div className="chart__container">
        <div id="chartStructure">hi</div>
      </div>
    }
}