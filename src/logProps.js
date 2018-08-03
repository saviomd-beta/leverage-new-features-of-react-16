import React, { Component } from 'react';

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}

export default logProps;
