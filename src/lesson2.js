import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { RawRows, SumRow, StatsRows } from './utils';

const Fruits = () => [
  <li key="1">Apple</li>,
  <li key="2">Orange</li>,
  <li key="3">Banana</li>
];

class MoreFruits extends React.Component {
  render() {
    return [
      <li key="1">Strawberry</li>,
      <li key="2">Blueberry</li>
    ];
  }
}

const data = [
  [14, 24, 125, 182],
  [10, 122, 220, 310],
  [0, 19, 28, 50],
];

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Peach</li>
          <li>Ananas</li>
          <Fruits />
          <MoreFruits />
        </ul>
        <table>
          <tbody>
            <RawRows data={data} />
            <StatsRows data={data} />
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
