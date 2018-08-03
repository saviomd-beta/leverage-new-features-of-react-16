import React, { Component } from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  componentWillReceiveProps() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return (
        <img src={`/spinner.gif`} alt="loading" />
      );
    }
    return (
      <img
        style={{ width: '100%' }}
        alt={this.props.name}
        src={`/${this.props.name}.png`}
      />
    );
  }
}

export default City;
