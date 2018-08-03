import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Foo {
  toString() {
    return 'foo';
  }
}

const foo = new Foo();

class App extends Component {
  render() {
    return (
      <div
        my-attribute={foo}
      >
        Hello!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
