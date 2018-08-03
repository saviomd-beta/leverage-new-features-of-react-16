import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    console.log(`constructor: ${this.chartRef.current}`);
  }
  componentDidMount() {
    const chart = d3.select(this.chartRef.current);
    console.log(`componentDidMount: ${this.chartRef.current}`);
    const barHeight = 20;
    const chartWidth = 200;
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.props.data)])
      .range([0, chartWidth]);
    const bar = chart
      .selectAll('g')
      .data(this.props.data)
      .enter()
      .append('g')
      .attr('transform', (value, i) => `translate(0,${i * barHeight})`);
    bar
      .append('rect')
      .attr('width', value => xScale(value))
      .attr('height', barHeight - 1)
      .attr('style', 'fill: steelblue;');
    bar
      .append('text')
      .attr('x', value => xScale(value) - 5)
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .attr('style', 'fill: white; font: 14px sans-serif; text-anchor: end;')
      .text(value => value);
  }

  highlight = index => {
    const transition = d3
      .transition()
      .duration(450)
      .ease(d3.easeLinear);
    d3
      .select(this.chartRef.current)
      .select(`g:nth-child(${index}) rect`)
      .transition(transition)
      .style('fill', 'orange')
      .transition(transition)
      .style('fill', 'steelblue');
  }

  render() {
    return <svg ref={this.chartRef} />;
  }
}

export default BarChart;
