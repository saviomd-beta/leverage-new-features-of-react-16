import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Aux = props => {
  return props.children;
};

let idCounter = 0;
const uniqueId = () => ++idCounter + '';

const convertRowsToColumns = data =>
  data[0].map((col, i) => data.map(row => row[i]));

const sumPerColumn = data =>
  convertRowsToColumns(data).map(column =>
    column.reduce((sum, value) => {
      return sum + value;
    }, 0)
  );

const trendInPercent = data =>
  sumPerColumn(data).map((value, index, list) => {
    if (index === 0) {
      return 0;
    }
    return (100 / list[index - 1] * value - 100).toFixed(0);
  });

export const RawRows = props =>
  props.data.map(row => (
    <tr key={uniqueId()}>
      {row.map(item => <td key={uniqueId()}>{item}</td>)}
    </tr>
  ));

export const SumRow = props => (
  <tr key="1" style={{ borderTop: '2px solid #333' }}>
    {sumPerColumn(props.data).map(value => <td key={uniqueId()}>{value}</td>)}
  </tr>
);

const TrendRow = props => (
  <tr key="2">
    {trendInPercent(props.data).map(value => (
      <td key={uniqueId()}>{value}%</td>
    ))}
  </tr>
);

export const StatsRows = props => (
  <Aux>
    <SumRow data={props.data} />
    <TrendRow data={props.data} />
  </Aux>
);
