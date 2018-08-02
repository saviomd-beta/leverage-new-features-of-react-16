import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { RawRows, SumRow, StatsRows } from './utils';

const Comment = ({ text }) => {
  const emojifiedText = text
    .replace(':)', '😊')
    .replace(':D', '😀')
    .replace(':(', '🙁');
  return emojifiedText;
};

class App extends Component {
  render() {
    return (
      <div>
        <Comment text="Today we are sailing home :)" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
