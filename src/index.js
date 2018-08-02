import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState(state => ({ ...state, hasError: true }));
  }

  render() {
    if (this.state.hasError) {
      return <div>Error :(</div>
    } else {
      return this.props.children;
    }
  }
}

class Profile extends Component {
  onClick = () => {
    throw new Error('Oh no!');
  }

  render() {
    return (
      <div onClick={this.onClick}>
        Name: {this.props.user.name}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: 'Chris' },
    };
  }

  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    return (
      <div>
        <MyErrorBoundary>
          <Profile user={this.state.user} />
          <button onClick={this.updateUser}>Update</button>
        </MyErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
