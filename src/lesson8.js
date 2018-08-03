import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BarChart from './BarChart';

function FunctionalComponent() {
  let inputRef = React.createRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

class App extends Component {
  barChartRef = React.createRef();

  highlightThird = () => {
    this.barChartRef.current.highlight(3);
  }

  render() {
    return (
      <div>
        <BarChart data={[5, 8, 14, 15, 22, 34]} ref={this.barChartRef} />
        <button onClick={this.highlightThird}>Highlight</button>
        <FunctionalComponent />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
