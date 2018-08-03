import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';

class App extends Component {
  inputRef = React.createRef();

  focusInput = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <Fragment>
        <TextInput ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus</button>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
