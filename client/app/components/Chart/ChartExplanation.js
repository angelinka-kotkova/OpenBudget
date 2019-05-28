import React, {Component} from 'react';
const d3 = require('../../vendor/d3')
const c3 = require('../../vendor/c3')
export default class ChartExplanation extends Component {
    componentDidMount() {
      this._updateChart();
    }
    componentDidUpdate() {
      this._updateChart();
    }
    _updateChart() {
      const chart = c3.generate({
        bindto: '#chartExplanation',
        data: {
          columns: this.props.columns,
          type: "gauge"
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
        <div id="chartExplanation">hi</div>
        <div data-id="до уточненого річного плану" className="block">
            <div className="block-color" style={{backgroundColor: 'rgb(81, 102, 150)'}}></div>
            <span className="block-text">до уточненого річного плану</span>
        </div>
      </div>
    }
}