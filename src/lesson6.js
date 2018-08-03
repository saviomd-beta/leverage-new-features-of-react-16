import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import City from './city';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { city: 'vienna' };
  }

  selectCity = evt => {
    const newValue = evt.target.value;
    this.setState(state => {
      if (state.city === newValue) {
        return null;
      }
      return {
        city: newValue
      }
    });
  }

  render() {
    return (
      <div>
        <button type="button" value="vienna" onClick={this.selectCity}>Vienna</button>
        <button type="button" value="paris" onClick={this.selectCity}>Paris</button>
        <City name={this.state.city} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
