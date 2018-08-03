import React, { Component } from 'react';
import logProps from './logProps';

class TextInput extends Component {
  inputRef = React.createRef();

  focus = () => {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} />
  };
}

export default logProps(TextInput);
